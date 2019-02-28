module.exports = {
  title: 'Decen Justice R & D',
  description: 'If we knew what we were doing, it would not be research',
  base: '/randd/',
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Intro', link: '/intro/' },
      { text: 'Github', link: 'https://github.com/DecentralizeJustice/research-and-development' }

    ],
    sidebar: [
      '/intro/',
      '/smartass/',
      '/inspirations/'
    ]
  }
}
