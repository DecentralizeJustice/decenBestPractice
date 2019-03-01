module.exports = {
  title: 'Decen Justice Operations',
  description: 'So much time so little to do',
  base: '/opdocs/',
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Intro', link: '/intro/' },
      { text: 'Github', link: 'https://github.com/DecentralizeJustice/operations' }

    ],
    sidebar: [
      '/intro/'
    ]
  }
}
