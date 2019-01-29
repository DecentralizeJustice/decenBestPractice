module.exports = {
  title: 'DJ Business Plan',
  description: 'A Collaborative Endeavour',
  base: '/busi/',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Intro', link: '/intro/' },
      { text: 'Github', link: 'https://github.com/DecentralizeJustice/business' },

    ],
    sidebar: [
      '/intro/',
      '/todo/',
      '/brand/',
    ]
  }
}
