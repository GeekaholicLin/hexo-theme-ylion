function filterEmptyCodeLine (data) {
  data.content = data.content.replace(/<div class="line">\s*<\/div>/mg, '');
  return data;
}

hexo.extend.filter.register('after_post_render', filterEmptyCodeLine);