/**
 * @Description: 全局公共函数
 * @author Ding Sheng
 * @date 2019-02-26
*/

/**
 * react router 切换路由
 * @param that
 * @param pathname
 */
const goToPage = (that, pathname) => {
  const { router } = that.context
  router.history.push({
    pathname,
  })
}


export { goToPage }
