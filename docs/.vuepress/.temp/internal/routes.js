export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"W:/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/program/", { loader: () => import(/* webpackChunkName: "program_index.html" */"W:/blog/docs/.vuepress/.temp/pages/program/index.html.js"), meta: {"title":"编程人生"} }],
  ["/program/test.html", { loader: () => import(/* webpackChunkName: "program_test.html" */"W:/blog/docs/.vuepress/.temp/pages/program/test.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"W:/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
