import comp from "W:/blog/docs/.vuepress/.temp/pages/program/test.html.vue"
const data = JSON.parse("{\"path\":\"/program/test.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"测试文章！\",\"slug\":\"测试文章\",\"link\":\"#测试文章\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"program/test.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
