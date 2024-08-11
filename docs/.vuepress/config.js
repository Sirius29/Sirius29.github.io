import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    lang: 'zh-CN',
    title: 'Sirius',
    description: '做一些记录~',
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '编程',
                link: '/program/',
                children: [
                    { text: "C++", link: '/program/C++/' }
                ],
            },
            {
                text: '阅读',
                link: '/read/',
            },
            {
                text: '生活',
                link: '/life/',
            },
            {
                text: '关于',
                link: '/about/',
            },
        ],
        sidebar: [
            {
                text: '编程',
                link: '/',
                collapsable: false,
                children: [
                    {
                        text: "文章测试",
                        link: '/program/test.md'
                    },
                    {
                        text: "Profiling",
                        link: '/program/Profiling.md'
                    },
                    {
                        text: "关于优化的思考",
                        link: '/program/关于优化的思考.md'
                    },
                ]
            },
        ]
    }),
})

