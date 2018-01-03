# hexo-theme-ylion
:blush: 说不定是一个让你感到惊喜的hexo主题 :beers: :candy:

[在线预览 Preview](http://blog.geekaholic.cn)

![hexo-theme-ylion](http://olpvawdcl.bkt.clouddn.com/hexo-theme-ylion.jpg)


## Translate
Korean: [README Korean](./translate/korean/README_kr.md)

## Features | 特点

- [x] jQuery Free，原生Javascript实现
- [x] 强大的CSS3动画
- [x] 文章过时提醒功能
- [x] 支持文章置顶
- [x] 网站公告功能
- [x] 增强的站内搜索
- [x] 首页图片懒加载
- [x] leancloud阅读人数统计与最受欢迎文章widget
- [x] 更强大的自定义
- [x] 主题本身无图片
- [x] 响应式
- [x] gitment集成
- [x] 支持双语对照功能
- [x] （我编不下去了，等待你去发现~）

## TODO | 计划

- [x] [使用教程和开发Hexo主题教程](http://blog.geekaholic.cn/tags/%E4%B8%BB%E9%A2%98%E5%88%B6%E4%BD%9C/)
- [ ] ~~更多的优化~~（说了和没说一样==）
- [ ] ~~文章分类目录可展开~~
- [ ] Javascript模块化
- [ ] ~~多说的样式以拓展功能~~ (为多说默哀ing，已替换为[gitment](https://github.com/imsun/gitment))
- [x] 数学公式支持 / updated: 2017/2/19，[说明&注意事项](http://blog.geekaholic.cn/2017/02/19/mathjax/)
- [ ] 便捷翻译和双语对照功能的使用教程
- [ ] 你们来决定...:monkey:


## Getting Started | 开始使用

:warning:
**如果你在此之前使用的是 `Hexo 2.x` 版本，为了避免未知的错误，请备份好数据，或者建立新的博客目录**


### Prerequisites | 前提条件

`Node.js` 环境、`Git` 环境以及 `Hexo` ,如果你尚未安装或者不了解 `Hexo`，请参考 [官方教程](https://hexo.io/zh-cn/docs/index.html) 进行了解以及安装。

### Dependencies | 依赖安装

因为 **hexo-theme-ylion** 使用了 `ejs` 模版引擎 、 `Less` CSS预编译语言以及在官方插件的基础上
进行功能的开发，依赖必不可少。

``` bash
    ## 注意ejs的版本问题(见issue #5)
    npm install hexo-renderer-ejs hexo-renderer-less hexo-generator-feed hexo-generator-sitemap hexo-deployer-git hexo-util ejs@^1.0.0 moment utils-merge --save
```

### Download | 下载主题文件

有两种方式下载主题--下载 `*.zip` 文件和通过 `git` ，无论哪种方式请确认下载的文件目录和博客站点的theme子目录中的landscape
目录同一个级别，如下：

``` bash
    .
    ├── landscape
    └── ylion
```

### Configure | 配置

接下来就是配置的问题了，分为主题配置和站点配置，主要是主题配置。

#### Theme Configure | 主题配置

各个设置项均在以下的主题文件中以注释的形式进行说明：

``` yaml

# layout -- 布局相关


## menu -- 导航菜单显示{[@page:名字/*多语言支持*/,@url:地址,@icon:显示的图标],[...]}
menu:
- page: home
  url: /
  icon: fa-home
- page: rss
  url: /atom.xml
  icon: fa-rss

## favicon -- 网站图标位置{@favicon}
favicon: /favicon.ico

## rss --rss文件位置{@rss}
rss: /atom.xml

## widgets -- 6个左边小工具{@widgets:[notification,category,archive,popular,tagcloud,friends]}
widgets:
- notification ## 网站公告
- category ## 文章分类
- archive ## 文章归档
- popular ## 热门文章
- tagcloud ## 彩色标签云
- friends ## 友链

## widgets settings --各个小工具的设置
### notification config --网站公告设置。支持 html 和 纯文本
notification: |-

            <p>主题ylion v0.0.0版本即将上线，敬请期待~！
            主题作者：<a href="https://github.com/GeekaholicLin"
            title="fork me" target="_blank">Geekaholic</a></p>

### categories-list config --文章分类设置{@cate_config:{@show_count:是否显示数字，@show_current: 是否高亮当前category}}
cate_config:
 show_count: true
 show_current: true


### archives-list config
### 文章归档设置{@arch_config:/*参数参考：https://hexo.io/zh-cn/docs/helpers.html#list-archives*/}
arch_config:
 type: 'monthly'
 show_count: true
 order: -1

### tagcloud config
### 彩色标签云设置{@tagcloud_config:/*https://hexo.io/zh-cn/docs/helpers.html#tagcloud*/}
tagcloud_config:
 min_font: 0.14
 max_font: 0.2
 unit: rem
 amount: 100
 color: true
 orderby: 'count'
 start_color: '#6699cc'
 end_color: '#0A407C'

### friends' links settings
### 友链设置:{@links:[,,,]}
links:
- 主题作者: http://geekaholiclin.github.io



# content -- 内容显示相关

## show top posts or not
## 是否开启置顶文章功能？若开启，请在文章的Front-matter中加入`top`字段，top值越大越靠前
stick: true

## social config
## 社交功能设置 {@social:[url:地址,title:a标签的title,icon:显示图标],[]}
social:
- url: https://www.example1.com
  title: freecodecamp
  icon: fa-free-code-camp
- url: https://www.example2.com
  title: Follow me~
  icon: fa-github


## custom content config
## 自定义内容设置
### append copyright when copy the text
### 添加版权保护 {@appendCopyright:{enable:是否开启,triggerCopyLength:触发的复制长度,appendText:追加信息}}
appendCopyright:
  enable: true
  triggerCopyLength: 200
  appendText: '商业转载请联系作者获得授权,非商业转载请注明出处 © example'

### uncategory posts meta text
### 当无目录时的显示文字，默认为'null'
noCategoryText: 'null'

### outdated browser warning
### 过低版本的浏览器提醒文字
outdated_browser_text: '你使用的浏览器版本过低，为了你更好的阅读体验，请更新浏览器的版本或者使用其他现代浏览器，比如Chrome、Firefox、Safari等。'

### outdated post warning
### 文章过期提醒功能 {@warning:{days:临界天数,text:提醒文字/*%d为过期总天数占位符*/}}
warning:
  days: 300 #default is 300 days
  text: '本文于%d天之前发表，文中内容可能已经过时。如有疑问，请在评论区留言。'

### index article excerpt
### 首页文章简介的图片
### 规则:Front-matter中的自定义'img'字段 > 文章内的图片(随机获取) > defaultImgs(随机获取)
defaultImgs:
  - http://XXXX.example.jpg
  - /img/default-1.jpg
excerptLength: 400 ### 简介文字显示最大字数

### article meta
### 文章信息(article meta)指首页和文章内页，与icon一起的信息
### @whichCategory 指定显示哪个分类，默认为最后一个，可以指定，若指定的超过该文章的分类总长度， 显示最后一个
whichCategory: 0

### post footer
### 作者信息部分设置
high_song: 'high起来 &#128541;'  ### 歌曲显示文字，若不需要该功能，则留空或移除
author_img: http://example.com/author.jpg ### 作者头像地址
author_profile_page: /about.html  ### 点击作者的名字跳转的地址，默认为博客首页
donate:
  text: '赠我一杯 &#128536;' ### 打赏功能显示文字，若不需要，则留空或移除
  img: ### 打赏图片地址
  - url: http://example.com/alipay.jpg
    alt: '支付宝付款'
  - url: http://example.com/wechat.png
    alt: '微信付款'

### support html&text like notification's support in this theme,
### but please don't use <li> tag
### 版权声明文字，支持html/text，但不要使用<li>标签
cc: |-
        <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/" target="_blank">
        知识共享署名-非商业性使用-禁止演绎 3.0 未本地化版本许可协议（CC BY-NC-ND 3.0）
        </a>

### highlight {@highlightStyle:[github,solarized-light]}
highlightStyle: github ### 内置主题
# third party service --第三方服务
## busuanzi --不蒜子站点总人数统计 {@visits_count:{enable:是否开启,icon:图标,text:显示文字/*%d为占位符*/,method:统计方式}}
visits_count:
  enable:  true
  icon: fa-bar-chart
  text: '欢迎第%d位小伙伴~'
  count_method: 'uv' ### uv 为多次点击算一次，pv为每篇文章算一次

## leancloud --- leancloud 阅读量统计
## {@leancloud:{enable:是否开启,className:创建的class,app_id:,app_key:,region:默认为中国地区,limits:热门文章显示总数}}
leancloud:
  enable: true
  className: "BlogCounter"
  app_id:
  app_key:
  region:
  limits: 10 ### 若要关闭该功能，设置为0或者在配置文件上移除popular对应的widget

## comments -- 评论框
### disqus
disqus_shortname:
### duoshuo
duoshuo_shortname:
### gitment
gitment:
  enable: true
  owner: GeekaholicLin
  repo: geekaholiclin.github.io
  client_id: aa2215dfc8ee944d1205
  client_secret: 77cd2afa5d161bc0ab04639ed81300d808c6e22b
  labels: "blog,gitment"
  perPage: 20
  maxCommentHeight:

## analytics --统计功能
baidu_anaylytics:
google_anaylytics:

## sitemap -- 站点验证
google_vertification:
baidu_vertification:

## mathjax -- mathjax支持
mathjax:
  enable: true  ### 是否开启，若开启，请再在Front-matter中加入`mathjax:true`
  src: //cdn.bootcss.com/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML ### cdn

# cdn or local files --开启对应文件的cdn，默认使用本地文件。国内用户建议开启而不是使用github上的文件
## style cdn --样式 cdn
## icon -- 官网地址：http://fontawesome.io/icons/
fontAwesome: //cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css


## script cdn --脚本cdn
## leancloud -- 官网:https://leancloud.cn/
leancloud_src: http://cdn1.lncld.net/static/js/2.1.0/av-min.js
## busuanzi -- 官网：http://busuanzi.ibruce.info/
busuanzi_src: //dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js

# theme and site self settings
since: 2015 ## 网站建立时间
robot: 'all' ### 控制搜索引擎的抓取和索引编制行为，默认为all，搜索 `meta name="robots"` 或请参考： https://support.google.com/webmasters/answer/79812?hl=zh-Hans
version: 0.0.2 ### 主题版本


```


如果你对主题的配置文件格式有疑问或者不熟悉语法，参考 [阮一峰老师的博客](http://www.ruanyifeng.com/blog/2016/07/yaml.html) 或者提出issue



#### Site Configure | 站点配置

站点一般都保持默认，这里只讲主题相关的配置。

``` yaml
# Pagination
## Set per_page to 0 to disable pagination
## @per_page为了首页加载速度，请设置合理的数值
per_page: 10
pagination_dir: page

theme: ylion ### 主题文件在Theme目录下的命名

### search插件基于 https://github.com/PaicHyperionDev/hexo-generator-search
### 使用说明请参考该repo
search:
  path: search.xml
  field: all

### 代码高亮
highlight:
  enable: true
  line_number: true
  tab_replace:

```



### Run | 运行预览

``` bash
    hexo clean && hexo g && hexo s -p 4300
```

监听4300端口，使用浏览器打开地址`http://localhost:4300`进行预览。

**Tips:**

如果你为了更好地写博客，推荐两个Hexo插件：`hexo-browsersync` 和 `hexo-admin`。

``` bash
    npm install hexo-browsersync --save
    npm install hexo-admin --save
```

`hexo-browsersync` 主要用于监听刷新，`hexo-admin` 提供类似后台的功能。

前者无需配置，按照平常启用server预览即可。`hexo-admin` 的使用参考[官方Repo](https://github.com/jaredly/hexo-admin)

最后，Enjoy it!!!:kissing_heart:


## Languages | 支持的语言

支持英语，简体中文和繁体中文。能力有限，欢迎翻译其他语言。

## Compatibility | 兼容性

IE9+*、Chrome、Firefox、Safari

**说明：** IE9 支持基本功能，无动画效果以及 [leancloud无法正常使用统计功能](https://github.com/leancloud/javascript-sdk/issues/9)

## Contribute | 贡献

主题的测试基本通过，个人使用基本没有问题，但难免会有纰漏。如果大家在使用的过程发现bug或者有改进性的建议，欢迎提出~

接受各种形式的贡献，包括不限于提交问题与需求，修复代码。期待Fork和PR~

如果喜欢该款主题，还希望不吝啬你的star~:satisfied:

## Thanks | 感谢

作为一个设计天分上辈子都用光了的小前端，在设计这款主题的时候参考了好多主题和博客的设计和创意，
才能在这么短的时间内成型一个博客主题，真的特别感谢！比心 :heart:

**排名不分前后：**

- [阿城的blog](https://qiutc.me/) / 借鉴了代码框
- [小胡子哥的个人网站](http://www.barretlee.com/) / 借鉴文章过期提醒和作者信息
- [hexo-theme-tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak) / 借鉴文章简介的布局
- [hexo-theme-next](https://github.com/iissnan/hexo-theme-next) / 从配置文件得知Hexo博客受欢迎的功能
- [hexo-theme-landscape](https://github.com/hexojs/hexo-theme-landscape) / 师傅带入门，初期代码参考
- [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search) / 基于插件修改，解决站内搜索
- [Netcan_Space](http://www.netcan666.com/) / 参考置顶功能排序算法

## Changes log | 重要更新

### V0.6.x

- 增加便捷的翻译以及增加双语对照

### V0.5.x

- 增加主题的404页面(请手动将主题文件夹下的`404.md`拷贝至博客的source根目录)
- 修复手机屏幕下搜索弹出框的宽度异常

### V0.4.x

- 增加窄屏幕下的显示widgets支持
- 修复文章的底部信息样式错乱问题

### V0.3.x

- 移除多说的支持，替换为gitment，~~目前**尚未解决兼容性**~~，可以自行切换为Disqus(2017/7/23 V0.3.3 修复)
- 移除大部分的圆角样式
- 版本号更换 =。=

### V0.2.0

- 添加个人作品和About页面的支持


### V0.1.0

- 提交至官方theme仓库，ylion主题正式上线

## License

[MIT](/LICENSE)