import BLOG from '@/blog.config'
import { useEffect, useRef, useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

import WechatPay from '@/components/Post/WechatPay'
import { MailIcon, ThumbUpIcon } from '@heroicons/react/outline'

const PostFooter = ({ frontMatter }) => {
  const [showPay, setShowPay] = useState(false)
  const { locale } = useRouter()
  const router = useRouter()
  const t = lang[locale]
  let isMeWrite = !frontMatter?.originAuthor

  let linkRef = useRef('')
  const [link, setLink] = useState('')
  useEffect(() => {
    linkRef.current = window.location.href
    setLink(linkRef.current)
  }, [frontMatter])

  const meWritePart = (
    <div className='text-sm font-light md:text-base  bg-gray-100 text-gray-600 px-4 py-3 rounded  dark:bg-gray-800 dark:text-zinc-300 leading-6'>
      <div>
        <span className='font-bold'>{t.FOOTER.COPYRIGHT} </span>
        {t.FOOTER.COPYRIGHT_POST_START}
        <a
          target='_blank'
          className='underline'
          href={`${t.FOOTER.COPYRIGHT_LINK}`}
        >
          {t.FOOTER.COPYRIGHT_NAME}
        </a>
        {t.FOOTER.COPYRIGHT_END}
      </div>
      <div className='mt-1'>
        <span className='font-bold'>{t.FOOTER.COPYRIGHT_AUTHOR}</span>
        {BLOG.author}
      </div>
      <div className='mt-1'>
        <span className='font-bold'>{t.FOOTER.COPYRIGHT_POST_LINK}</span>
        <a className='underline' href={`${link}`}>
          {link}
        </a>
      </div>
    </div>
  )
  const notMeWritePart = (
    <div className='  bg-gray-100 text-gray-600 px-4 py-3 rounded text-sm   dark:bg-gray-800 dark:text-zinc-300 leading-6'>
      <div>
        <span className='font-bold'>{t.FOOTER.COPYRIGHT} </span>
        {t.FOOTER.COPYRIGHT_ORIGIN_START}
      </div>
      <div className='mt-1'>
        <span className='font-bold'>{t.FOOTER.COPYRIGHT_ORIGIN_AUTHOR}</span>
        {frontMatter.originAuthor}
      </div>
      <div className='mt-1'>
        <span className='font-bold'>{t.FOOTER.COPYRIGHT_ORIGIN_POST_LINK}</span>
        <a className='underline' href={`${frontMatter.originUrl}`}>
          {frontMatter.originUrl}
        </a>
      </div>
    </div>
  )
  return (
    <div>
      {isMeWrite ? meWritePart : notMeWritePart}
      <div className='w-full py-12 justify-between font-medium text-gray-500 dark:text-gray-400'>
        <div className='flex flex-wrap sm:flex-nowrap sm:justify-between items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 relative gap-3 px-4 py-3'>
          <div className='w-full sm:w-auto max-w-screen-sm inline-block text-sm font-light md:text-base mb-2 sm:mb-0'>
            {t.LAYOUT.NOTICE_TEXT}
          </div>
          <div className='flex flex-wrap gap-3'>
            {BLOG.showWeChatPay && (
              <button
                onClick={() => setShowPay((showPay) => !showPay)}
                className='flex gap-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-sm rounded-lg px-4 py-2'
              >
                <ThumbUpIcon className='flex flex-col justify-center items-center select-none cursor-pointer relative w-5 h-5' />
                {t.LAYOUT.PAY_BUTTON}
              </button>
            )}
            <button
              onClick={() => router.push(BLOG.path || '/contact')}
              className='flex gap-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-sm rounded-lg px-4 py-2'
            >
              <MailIcon className='flex flex-col justify-center items-center select-none cursor-pointer relative w-5 h-5' />
              {t.LAYOUT.NOTICE_BUTTON}
            </button>
          </div>
        </div>
        {showPay && <WechatPay />}
      </div>
    </div>
  )
}

export default PostFooter
