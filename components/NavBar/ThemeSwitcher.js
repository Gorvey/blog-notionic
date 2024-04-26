import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // ---------------------//
  function toggleTheme(event) {
    const willDark = !isDark()
    // 浏览器新特性不支持 或者 开启了动画减弱
    if (!document.startViewTransition || isReducedMotion()) {
      toggleDark()
      return
    }

    const transition = document.startViewTransition(() => {
      toggleDark()
    })

    // 传入点击事件，从点击处开始扩散。否则，从右上角开始扩散
    const x = event?.clientX ?? window.innerWidth
    const y = event?.clientY ?? 0

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ]
      document.documentElement.animate(
        {
          clipPath: willDark ? clipPath : [...clipPath].reverse()
        },
        {
          duration: 500,
          easing: 'ease-in',
          pseudoElement: willDark
            ? '::view-transition-new(root)'
            : '::view-transition-old(root)'
        }
      )
    })
  }
  /**
   * 切换主题色，html标签切换dark类
   */
  function toggleDark() {
    setTheme(theme === 'light' ? 'dark' : theme === 'system' ? 'dark' : 'light')
  }

  /**
   * 检测用户的系统是否被开启了动画减弱功能
   * @link https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion
   */
  function isReducedMotion() {
    return (
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
    )
  }

  /**
   * 当前主题色是否是暗色
   */
  function isDark() {
    return document.documentElement.classList.contains('dark')
  }

  // ---------------------//

  return (
    <>
      <button
        // title={`Toggle theme - current ${theme}`}
        aria-label='ThemeSwitcher'
        onClick={(e) => toggleTheme(e)}
        className='p-2 ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100'
      >
        {hasMounted && theme === 'dark' ? (
          <MoonIcon className='h-5 w-5' />
        ) : (
          <SunIcon className='h-5 w-5' />
        )}
      </button>
    </>
  )
}

export default ThemeSwitcher
