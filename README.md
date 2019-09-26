# hexo-theme-ylion
:blush: 说不定是一个让你感到惊喜的hexo主题 :beers: :candy:

[在线预览 Preview](http://blog.geekaholic.cn)

![hexo-theme-ylion](http://image.geekaholic.cn/hexo-theme-ylion.jpg)


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

各个设置项均在主题配置文件中以注释的形式进行说明。详情请见配置文件。

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

[CHANGELOG](/CHANGELOG.md)

[MIT](/LICENSE)