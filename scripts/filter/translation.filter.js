var hexoUlti = require('hexo-util');
function matchedChildCallback(identifier,footerRe){
  return function (match, p1, p2, p3, p4) {
    var matchedContentArr = p4.split(identifier);
    var footerContent;
    if(matchedContentArr.length>=2){
      if(matchedContentArr[1]&&footerRe){
        footerContent = footerRe.exec(matchedContentArr[1]);
        matchedContentArr[0] = matchedContentArr[0] + (footerContent?footerContent[0]:'');
      }
      var titleString = hexoUlti.escapeHTML(hexoUlti.stripHTML(matchedContentArr[0].trim()));
      //暂时不需要data-title
      // var dataTitleString = hexoUlti.escapeHTML(matchedContentArr[0].trim());
      // return '<'+p1+p2+' title="'+titleString+'" data-title="'+dataTitleString+'">'+matchedContentArr[1].trim()+'</'+p1+'>';
      return '<'+p1+p2+' title="'+titleString+'">'+matchedContentArr[1].trim()+'</'+p1+'>';
    }
    else{
      return match;
    }
  }
}
function filterTranslationPosts (data) {
  if (data.translation) {
    var matchedTagsFooter = /<(footer)>([^]*?)<\/\1>/g;//为了blockquote中的footer
    var nestedlistRe = /<li>(.*)(?=\s*<[uo]l)/g;//将嵌套List的Li文字用<div>包裹，方便title处理
    var processTagsRe = /<(p|h[1-6]|th|td|dt|dd)((\s*\w+="[^]*?")*)>([^]*?)<\/\1>/g;//最小粒度的标签
    var specialProcessTagsRe = /<(blockquote|li(?!>(?:.*?)(?=\s*<[uo]l)))((\s+\w+="[^]*?")*)>([^]*?)<\/\1>/g;//最小粒度的标签
    var identifier = "[id.]";
    var titleIdRe = /<(h[1-6])([^>]*)id="(.*?)"([^>]*)>(.*?)<\/\1>/g;
    //处理嵌套ol与ul--追加标签
    data.content = data.content.replace(nestedlistRe,'<li><p class="nested-list-title">$1</p>');
    // 标签处理，以[id.]作为分隔符
    data.content = data.content.replace(processTagsRe,matchedChildCallback(identifier));
    // 特殊标签处理（嵌套标签居多）
    data.content = data.content.replace(specialProcessTagsRe,matchedChildCallback(identifier,matchedTagsFooter));
    //h1-h6的title的id处理
    data.content = data.content.replace(titleIdRe,function (match, p1, p2, p3, p4, p5) {
      return '<'+p1+p2+'id="'+p5+'"'+p4+'>'+p5+'</'+p1+'>';
    });
    return data;
  }
}
hexo.extend.filter.register("after_post_render", filterTranslationPosts);