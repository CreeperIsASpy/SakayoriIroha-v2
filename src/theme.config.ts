import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  siteName: "Sakayori Iroha | 酒寄彩叶",
  locale: "zh-CN", 
  nav: [
    {
      href: "/",
      text: "首页",
      icon: "i-ri-home-line",
    },
    {
      text: "文章",
      href: "/posts/",
      icon: "i-ri-quill-pen-fill",
      dropbox: {
        enable: true,
        items: [
          {
            href: "/categories/",
            text: "分类",
            icon: "i-ri-book-shelf-fill",
          },
          {
            href: "/tags/",
            text: "标签",
            icon: "i-ri-price-tag-3-fill",
          },
          {
            href: "/archives/",
            text: "归档",
            icon: "i-ri-archive-line",
          },
        ],
      },
    },
    {
      text: "友链",
      href: "/friends/",
      icon: "i-ri-link",
    },
  ],
  brand: {
    title: "Sakayori Iroha | 酒寄彩葉",
    subtitle: "品行端正，成绩优秀，文武双全。只有贯彻无懈可击的完美女高中生形象，我才能向前迈进。",
    logo: "🦊",
  },
  cover: {
    enable: true,
    preload: false,
    fixedCover: {
      enable: true,
      url: "cover-1",
    },
    // gradient: true, // 渐变模式
    nextGradientCover: false, // 文章导航使用渐变背景
  },
  sidebar: {
    author: "酒寄彩葉",
    description: "17岁女高中生，文武双全的完美少女。",
    social: {
      github: {
        url: "https://github.com/sakayori-iroha",
        icon: "i-ri-github-fill",
      },
      twitter: {
        url: "https://x.com/iroha_sakayori",
        icon: "i-ri-twitter-x-line",
      },
      email: {
        url: "mailto:sakayori-iroha@gmail.com",
        icon: "i-ri-mail-line",
      },
    },
  },
  footer: {
    since: 2026,
    icon: {
      name: "sakura rotate",
      color: "#ffc0cb",
    },
    count: true,
    powered: true,
    icp: {
      enable: true,
      // icon: '/beian-icon.png',
      icpnumber: "萌ICP备20268017号",
      // beian: '网安备案号',
      recordcode: '20268017',
    },
  },
  widgets: {
    randomPosts: true,
    recentComments: true,
    recentCommentsLimit: 10,
  },
  comments: {
    enable: true,
    waline: {
      serverURL: "waline.creeperspy.top",
      lang: "zh-CN",
    },
  },
  hyc: {
    // HYC 扩展总开关：关闭后其所有子功能不可用
    enable: false,
    aiSummary: {
      // AI 摘要卡片开关（受 hyc.enable 总开关控制）
      enable: true,
      // 卡片标题
      title: "AI 摘要",
      // 是否显示摘要使用的模型名称
      showModel: true,
    },
    aiRecommend: {
      // AI 相近文章推荐开关（受 hyc.enable 总开关控制）
      enable: true,
      // 默认展示前 3 篇
      limit: 3,
      // 最低相似度阈值（0.4 = 40%）
      minSimilarity: 0.4,
    },
  },
  nyxPlayer: {
    enable: true,
    preset: "shokax",
    darkModeTarget: ':root[data-theme="dark"]',
    urls: [
      {
        name: "超かぐや姫！",
        url: "https://music.163.com/playlist?id=17792174512",
      },
    ],
  },
  visibilityTitle: {
    enable: true,
    leaveTitle: "👀 你先忙，我等你回来~",
    returnTitle: "🎉 欢迎回来！",
    restoreDelay: 3000,
  },
  home: {
    selectedCategories: [{ name: "Tutorial" }, { name: "Frontend" }],
    pageSize: 5,
	title: {
      behavior: "custom",
      customTitle: "🦊酒寄彩葉的博客站！"
    }
  },
  friends: {
    title: "友链",
    description: "友情链接！！！",
    avatar: "https://www.helloimg.com/i/2025/08/05/6891cf32ea2d9.jpeg",
    links: [
      {
        url: "https://astro.build/",
        title: "Astro",
        desc: "全站体验轻快的静态站点框架，适合内容型站点与博客。",
        author: "Astro Team",
        avatar: "https://avatars.githubusercontent.com/u/44914786?s=200&v=4",
        color: "var(--color-orange)",
        siteImage: "https://astro.build/assets/press/astro-logo-dark.svg",
      },
      {
        url: "https://svelte.dev/",
        title: "Svelte",
        desc: "编译时框架，现代与简洁，组件写起来很顺手。",
        author: "Svelte Team",
        avatar: "https://avatars.githubusercontent.com/u/23617963?s=200&v=4",
        color: "var(--color-red)",
      },
      {
        url: "https://vite.dev/",
        title: "Vite",
        desc: "快速的前端开发构建工具，HMR 体验很棒。",
        author: "Vite Team",
        avatar: "https://avatars.githubusercontent.com/u/65625612?s=200&v=4",
        color: "var(--color-blue)",
      },
      {
        url: "https://bun.sh/",
        title: "Bun",
        desc: "一体化 JavaScript 运行时，速度与工具链兼备。",
        author: "Bun Team",
        avatar: "https://avatars.githubusercontent.com/u/108928776?s=200&v=4",
        color: "var(--color-green)",
        siteImage: "https://bun.sh/logo.svg",
      },
    ],
  },
  copyright: {
    license: "CC-BY-NC-SA-4.0",
    show: true,
  },
});
