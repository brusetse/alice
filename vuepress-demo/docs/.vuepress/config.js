module.exports = {
  base: '/',
  title: 'Hero',
  description: 'Hero api docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  // host: '0.0.0.0',
  port: 8888,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '学习', link: '/learn/' },
      { text: '生态系统', link: '/ecosystem/' },
      { text: 'Gitlab', link: 'http://git.ivyb2b.cn' }
    ],
    sidebar: {
      '/learn/': [
        ['', 'learn'],     /* /learn/ */
        ['one', 'one'],  /* /learn/one.html */
        ['two', 'two']   /* /learn/two.html */
      ],

      '/ecosystem/': [
        ['', 'ecosystem'],      /* /ecosystem/ */
        ['three', 'three'], /* /ecosystem/three.html */
        ['four', 'four']   /* /ecosystem/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}