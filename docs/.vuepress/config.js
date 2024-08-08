import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    // theme: defaultTheme(),
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        // 在这里进行配置
        navbar: [
          // NavbarItem
            {
                text: '首页',
                link: '/',
            },
            // NavbarGroup
            {
                text: '编程',
                link: '/program/',
                // children: ['/group/foo.md', '/group/bar.md'],
            },
        ],
    }),
    sidebar: {
        '/program/': [
            {
                text: '编程',
                collapsible: true,
                children: [
                    {
                        text: 'test',
                        link: '/program/test.md',
                    },
                ],
            },
        ],
        // '/designPatterns/': [
        //     {
        //         text: '设计模式',
        //         collapsible: true,
        //         children: [
        //             {
        //                 text: '单例模式--我的机器人女友',
        //                 link: '/designPatterns/单例模式--我的机器人女友.md',
        //             }
        //         ],
        //     },
        // ],
    },    
})

