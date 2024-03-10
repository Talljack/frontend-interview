import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Frontend Interview',
  description: 'Record all interview review question',
  head: [['link', { rel: 'shortcut icon', href: '/cat-cat.png' }]],
  lastUpdated: true,
  themeConfig: {
    logo: '/cat-cat.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Leetcode', link: '/leetcode/index' },
      { text: 'Utils', link: '/utils/index' },
    ],

    sidebar: {
      leetcode: [
        {
          text: '数组',
          collapsed: true,
          items: [{ text: '两数之和', link: '/leetcode/array/两数之和' }],
        },
        {
          text: '二叉树',
          collapsed: true,
          items: [
            { text: '前序遍历', link: '/leetcode/binaryTree/前序遍历' },
            { text: '层序遍历', link: '/leetcode/binaryTree/层序遍历' },
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
