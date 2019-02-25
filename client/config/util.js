const goToPage = (that, pathname) => {
  const { router } = that.context
  router.history.push({
    pathname,
  })
}


export { goToPage }
