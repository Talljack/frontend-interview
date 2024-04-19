import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Frontend Interview',
  description: 'Record all interview review question',
  head: [
    ['link', { rel: 'shortcut icon', href: '/cat-cat.png' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-3YB3LMJ0GV' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3YB3LMJ0GV');`,
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/cat-cat.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Interview', link: '/interview/微派网络' },
      { text: 'Leetcode', link: '/leetcode/index' },
      { text: 'Utils', link: '/utils/index' },
      { text: 'Network', link: '/network/cache' },
    ],

    sidebar: {
      interview: [
        {
          text: '微派网络',
          link: '/interview/微派网络',
        },
      ],
      leetcode: [
        {
          text: '数组',
          collapsed: true,
          items: [
            { text: '两数之和', link: '/leetcode/array/两数之和' },
            { text: '三数之和', link: '/leetcode/array/三数之和' },
          ],
        },
        {
          text: '二叉树',
          collapsed: true,
          items: [
            { text: '前序遍历', link: '/leetcode/binaryTree/前序遍历' },
            { text: '层序遍历', link: '/leetcode/binaryTree/层序遍历' },
          ],
        },
        {
          text: '链表',
          collapsed: true,
          items: [
            {
              text: '相交链表',
              link: '/leetcode/listNode/相交链表',
            },
          ],
        },
      ],
      utils: [
        {
          text: 'Array',
          link: '/utils/array',
        },
        {
          text: 'Object',
          link: '/utils/object',
        },
      ],
      network: [
        {
          text: '浏览器缓存',
          link: '/network/cache',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Talljack/frontend-interview' },
      { icon: 'x', link: 'https://twitter.com/YugangCao' },
    ],
    footer: {
      message: 'MIT License.',
      copyright: 'Copyright © 2024-present Talljack',
    },
    search: {
      provider: 'local',
    },
  },
})
