/*
 * @Author: zengzhe
 * @Date: 2024-04-26 09:30:38
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-05-14 14:28:29
 * @Description: 
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getSandpackCssText } from "@codesandbox/sandpack-react";
import BLOG from '@/blog.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.lang}>
        <Head>
          {/* <link rel='icon' href='/favicon.ico' /> */}
          <link rel='icon' href='/favicon.png' type='image/png' />
          <link
            rel='apple-touch-icon'
            sizes='192x192'
            href='/favicon.png'
          ></link>
          <link
            rel='alternate'
            type='application/rss+xml'
            title='RSS 2.0'
            href='/feed'
          ></link>
          <style
            dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
            id="sandpack"
          />
          {BLOG.appearance === 'auto' ? (
            <>
              <meta
                name='theme-color'
                content={BLOG.lightBackground}
                media='(prefers-color-scheme: light)'
              />
              <meta
                name='theme-color'
                content={BLOG.darkBackground}
                media='(prefers-color-scheme: dark)'
              />
            </>
          ) : (
            <meta
              name='theme-color'
              content={
                BLOG.appearance === 'dark'
                  ? BLOG.darkBackground
                  : BLOG.lightBackground
              }
            />
          )}
        </Head>
        <body className='bg-day dark:bg-night'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
