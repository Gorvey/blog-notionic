import React from 'react'
import Typed from 'typed.js'
import { LightningBoltIcon } from '@heroicons/react/outline'
const AISummary = (props) => {
  const summary = props?.frontMatter?.aiSummary || ''
  const typing = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    if (!summary) return
    const options = {
      strings: [summary],
      startDelay: 500,
      showCursor: true,
      typeSpeed: 35,
      onComplete(self) {
        self.cursor.style.display = 'none'
      }
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(typing.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [summary])

  return summary ? (
    <div className='ai-summary border p-3 bg-gray-100 rounded-xl my-4 shadow-lg dark:bg-gray-900'>
      <div className='flex items-center justify-between'>
        <div className='font-semibold flex items-center dark:text-white'>
          <LightningBoltIcon className='flex-shrink-0 w-6 h-6'></LightningBoltIcon>
          <div className='flex-shrink-0'>AI摘要</div>
        </div>
        <a
          target='_blank'
          href='https://chatglm.cn/'
          className='shadow-sm ai-tag'
          rel='noreferrer'
        >
          由 GLM-4 生成
        </a>
      </div>
      <div className='border text-base break-all my-2 ai-explanation rounded-xl bg-white p-2 shadow dark:bg-gray-700'>
        <span ref={typing}></span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='text-xs text-gray-500'>
          此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结
        </div>
        {/* <div className='text-xs text-gray-600'>反馈</div> */}
      </div>
    </div>
  ) : (
    <div ref={typing}></div>
  )
}
export default AISummary
