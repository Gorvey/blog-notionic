/*
 * @Author: zengzhe
 * @Date: 2024-04-22 17:23:52
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-04-28 16:02:45
 * @Description:
 */
const BLOG = {
  title: 'Gorvey的空间',
  author: 'Gorvey',
  email: 'gorvey76@outlook.com',
  link: 'https://zmix.cn',
  newsletter: 'Notionic Weekly',
  description: '志存高远，脚踏实地',
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2024, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  pagesShow: {
    navigator: true,
    newsletter: false,
    notes: false,
    projects: false,
    contact: true,
    books: true,
    // friends: true,
    music: false,
    record: false
  },
  showWeChatPay: false,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: '',
    github: 'https://github.com/Gorvey',
    telegram: ''
  },
  seo: {
    keywords: ['zmix', 'Gorvey', 'Blog', '前端技术', '读书'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  // 微软 Clarity 站点分析
  clarityID: process.env.NEXT_PUBLIC_CLARITY_ID || null, // 只需要复制Clarity脚本中的ID部分，ID是一个十位的英文数字组合
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'izuolan.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '531640703', // The chat id of your Telegram bot
  telegramChannelUrl: '', // The link of your Telegram channel
  telegramChannelName: '', // The name of your Telegram channel
  craftConfigShareUrl: 'https://www.craft.do/s/kQtcWqkv98cHhB', // The link to share your craft config
  analytics: {
    provider: '', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '' // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    }
  },
  comment: {
    // support provider: utterances, supacomments
    // provider: 'supacomments', // leave it empty if you don't need any comment plugin
    provider: 'supacomments', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      // supabaseUrl: 'https://quxcrqxbqxiolseqelal.supabase.co', // The url of your Supabase instance
      // supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1eGNycXhicXhpb2xzZXFlbGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2Nzc0MjgsImV4cCI6MjAyNDI1MzQyOH0.oBp-krn-IacLsuO65XsL_9uGG_Z48z3n4X66KPie1yM' // The anonymous key of your Supabase instance
      supabaseUrl: 'https://dsjylimdeqzhcveytdgt.supabase.co', // The url of your Supabase instance
      supabaseAnonKey:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzanlsaW1kZXF6aGN2ZXl0ZGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMTYxNzksImV4cCI6MjAyOTg5MjE3OX0._sxeKG4qTZF6ZpHowMD5rQaVZ-u3x4eqDFkhy_mjg8I' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
