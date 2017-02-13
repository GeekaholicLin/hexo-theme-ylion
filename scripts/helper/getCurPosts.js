function getCurPosts(sortedPosts, config, page) {
    return sortedPosts.slice((page.current - 1) * config.per_page, page.current * config.per_page);
}
hexo.extend.helper.register("getCurPosts",getCurPosts);