import BLOG from '@/blog.config'
import { useEffect, useRef, useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const PostFooter = ({ frontMatter }) => {
  const { locale } = useRouter()
  const t = lang[locale]
  let isMeWrite = !frontMatter?.originAuthor

  let linkRef = useRef('')
  const [link, setLink] = useState('')
  useEffect(() => {
    linkRef.current = window.location.href
    setLink(linkRef.current)
  }, [frontMatter])

  const meWritePart = (
    <div className='shadow  bg-gray-100 text-gray-600 p-4 rounded text-sm   dark:bg-gray-800 dark:text-zinc-300 leading-6'>
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
        <a className='underline' href={`${BLOG.link}/about`}>
          {BLOG.author}
        </a>
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
    <div className='shadow  bg-gray-100 text-gray-600 p-4 rounded text-sm   dark:bg-gray-800 dark:text-zinc-300 leading-6'>
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
  return isMeWrite ? meWritePart : notMeWritePart
}

export default PostFooter
