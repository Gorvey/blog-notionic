/*
 * @Author: zengzhe
 * @Date: 2024-04-26 11:04:15
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-04-28 14:59:41
 * @Description: 
 */
import Layout from '@/layouts/layout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'

const Post = ({ post, blockMap }) => {

  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
  if (!post) {
    return <NotFound statusCode={404} />
  }
  return (
    <Layout blockMap={blockMap} frontMatter={post} fullWidth={post.fullWidth} />
  )
}

export async function getStaticPaths() {
  const posts = await getAllPosts({ onlyPost: true })
  return {
    paths: posts.map((row) => `${BLOG.path}/article/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts({ onlyPost: true })
  const post = posts.find((t) => t.slug === slug)

  try {
    const blockMap = await getPostBlocks(post.id)
    return {
      props: {
        post,
        blockMap
      },
      revalidate: 43200
    }
  } catch (err) {
    console.error(err)
    return {
      props: {
        post: null,
        blockMap: null
      }
    }
  }
}

export default Post
