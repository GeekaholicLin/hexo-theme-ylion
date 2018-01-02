# hexo-theme-ylion
:blush: 너를 놀라게할 hexo 일지도 몰라 :beers: :candy:

[미리보기](http://blog.geekaholic.cn)

![hexo-theme-ylion](http://olpvawdcl.bkt.clouddn.com/hexo-theme-ylion.jpg)




## Features

- [x] jQuery Free，Vanilla javascript로 작성
- [x] 강력한 css3 애니메이션
- [x] 블로그 글이 오래되었을 경우 알림
- [x] 블로그 글 상단 고정 지원
- [x] 사이트 공지 기능
- [x] 강화된 사이트 내 검색
- [x] 사이트 이미지 Lazyload 지원
- [x] 인기있는 통계위젯인 leancloud 사용
- [x] 더욱 강력해진 사용자 커스터마이징
- [x] 전용 이미지가 존재하지 않는 테마
- [x] 반응형 테마
- [x] gitment 통합
- [x] 다국어 지원
- [x] （더 이상 요약을 못하겠어. 너가 찾아주길 바래~）

## TODO

- [x] [Hexo 튜토리얼 작성](http://blog.geekaholic.cn/tags/%E4%B8%BB%E9%A2%98%E5%88%B6%E4%BD%9C/)
- [ ] ~~더 많은 최적화 작업~~（==）
- [ ] ~~post 분류 확장 개발 가능~~
- [ ] Javascript 모듈화
- [ ] ~~댓글 기능을 만들려다~~ [gitment](https://github.com/imsun/gitment)로 대체
- [x] 수학공식 지원 / updated: 2017/2/19，[설몇&주의사항](http://blog.geekaholic.cn/2017/02/19/mathjax/)
- [ ] 더욱 편리해진 번역과 다국어 사용 기능 튜토리얼
- [ ] 그리고 너가 만들어줘...:monkey:


## Getting Started

:warning:
**이전에 `Hexo 2.x`를 사용했다면 알 수없는 오류를 피하기 위해 데이터를 백업하거나 새로운 블로그 디렉토리를 만드세요**

### Prerequisites

`Node.js` 환경, `Git` 환경과 `Hexo`가 필요합니다.

만약 아직 `Hexo`를 설치하지 않았거나 이해하지 못한다면 [공식 튜토리얼](https://hexo.io/ko/docs/index.html)을 참고하세요

### Dependencies

**hexo-theme-ylion**은 `ejs`와 `Less`를 사용했습니다. 이는 공식 플러그인을 기반으로 한 기능 개발의 필수 요소입니다.

``` bash
    ## ejs의 버전문제에 주의하십시오([issue](https://github.com/GeekaholicLin/hexo-theme-ylion/issues/5) #5)
    npm install hexo-renderer-ejs hexo-renderer-less hexo-generator-feed hexo-generator-sitemap hexo-deployer-git hexo-util ejs@^1.0.0 moment utils-merge --save
```

### Download

테마를 다운로드 하는 방법은 두가지가 있습니다.
`*.zip` 파일을 다운로드하거나 `git`을 사용하십시오.
어떤 방식이든 다운로드 한 파일의 디렉토리를 아래와 같이 블로그 사이트의 landscape 와 동등한 위치에 넣으십시오

``` bash
    .
    ├── landscape
    └── ylion
```

### Configure

설정 부분은 테마 설정과 웹사이트 설정으로 나누었습니다.
주로 봐야할 부분은 테마 설정 입니다

#### Theme Configure

각 설정 항목은 주석 형식으로 설명되어 있습니다.

``` yaml

# layout


## menu -- 탐색메뉴 표시{[@page:이름/*다국어지원*/,@url:주소,@icon:표시아이콘],[...]}
menu:
- page: home
  url: /
  icon: fa-home
- page: rss
  url: /atom.xml
  icon: fa-rss

## favicon -- 사이트 파비콘 위치{@favicon}
favicon: /favicon.ico

## rss --rss파일 위치{@rss}
rss: /atom.xml

## widgets -- 사이트 왼측에 위치하는 위젯{@widgets:[notification,category,archive,popular,tagcloud,friends]}
widgets:
- notification ## 상단 공지
- category ## 카테고리
- archive ## 아카이브
- popular ## 인기있는 문서
- tagcloud ## 태그 목록
- friends ## 이웃 링크

## widgets settings
### notification config --사이트 상단 공지에 대한 설정. HTML과 plain text 지원
notification: |-

            <p>ylion 테마 v0.0.0버전 출시 예정，기다려주세요~！
            테마 제작자：<a href="https://github.com/GeekaholicLin"
            title="fork me" target="_blank">Geekaholic</a></p>

### categories-list config --카테고리 설정{@cate_config:{@show_count:숫자 표시여부，@show_current: 현재 카테고리 하이라이트 여부}}
cate_config:
 show_count: true
 show_current: true


### archives-list config
### 아카이브 설정{@arch_config:/*참고 매개변수：https://hexo.io/ko/docs/helpers.html#list-archives*/}
arch_config:
 type: 'monthly'
 show_count: true
 order: -1

### tagcloud config
### 태그 목록 설정{@tagcloud_config:/*https://hexo.io/ko/docs/helpers.html#tagcloud*/}
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
### 이웃 링크:{@links:[,,,]}
links:
- 테마 제작자: http://geekaholiclin.github.io



# content

## show top posts or not
## 블로그 글 상단 고정 기능 사용여부
## 사용할 경우 post의 front-matter에 `top`필드을 추가하세요. `top`가 클수록 상단에 위치합니다
stick: true

## social config
## social 기능 설정 {@social:[url:주소,title:태그의 title,icon:표시 아이콘],[]}
social:
- url: https://www.example1.com
  title: freecodecamp
  icon: fa-free-code-camp
- url: https://www.example2.com
  title: Follow me~
  icon: fa-github


## custom content config
## 커스텀 컨텐츠 설정
### append copyright when copy the text
### 저작권 보호 추가 {@appendCopyright:{enable:사용여부,triggerCopyLength:길이,appendText:추가 정보}}
appendCopyright:
  enable: true
  triggerCopyLength: 200
  appendText: '상업적인 사용은 저자에게 연락하여 권한을 얻어주시기 바랍니다. 비상업적 사용은 출처를 명확히 밝혀주시기 바랍니다 © example'

### uncategory posts meta text
### 디렉토리에 category가 추가되지 않으면 default로 'null'
noCategoryText: 'null'

### outdated browser warning
### 낮은 버전의 브라우저 사용시 경고 메세지
outdated_browser_text: '귀하의 브라우저 버전이 너무 낮습니다. 더 나은 사용환경을 경험하시려면 브라우저 버전을 업데이트 하시거나 IE Edge, Chrome, Firefox, Safari 등과 같은 최신 브라우저를 사용하십시오'

### outdated post warning
### 블로그 글 만료 기능 {@warning:{days:만료 일자,text:알림문자/*%d: 기간만료 일자 표시자*/}}
warning:
  days: 300 #default is 300 days
  text: '해당 문서는 %d일 전에 작성되었습니다. 내용이 최신과 달라 의심스러운 경우 댓글로 남겨주세요'

### index article excerpt
### 블로그 글에 사용되는 디폴트 이미지
### 규칙 : Front-matter 'img'에 있는 이미지 -> 해당 블로그 글의 임의 이미지 -> 디폴트 이미지 순으로 적용
defaultImgs:
  - http://XXXX.example.jpg
  - /img/default-1.jpg
excerptLength: 400

### article meta
### article meta는 첫 페이지에서 보여지는 블로그 글의 내부 페이지와 아이콘 정보입니다
### @whichCategory 표시할 카테고리를 지정하십시오. 기본값은 마지막 카테고리 입니다. 만약 카테고리 갯수가 최대 길이를 초과한다면 마지막 한가지를 보여 줍니다
whichCategory: 0

### post footer
### 저자 정보 부분 설정
high_song: '신나게!! &#128541;'  ### 노래를 틀어주는 문자. 이 기능이 필요하지 않다면 비우거나 제거하세요
author_img: http://example.com/author.jpg ### 저자 아바타 주소
author_profile_page: /about.html  ### 저자의 이름을 클릭할 때 이동할 페이지
donate:
  text: '赠我一杯 &#128536;' ### 컨텐츠에 만족한 구독자가 donation을 해주는 기능을 나타내는 문자입니다. 필요하지 않다면 비우거나 제거하세요
  img: ### donation 이미지주소
  - url: http://example.com/alipay.jpg
    alt: '支付宝付款'
  - url: http://example.com/wechat.png
    alt: '微信付款'

### support html&text like notification's support in this theme,
### but please don't use <li> tag
### 저작권 고지 텍스트, html / 텍스트 지원, <li> 태그 사용 불가
cc: |-
        <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/" target="_blank">
        크리에이티브 커먼즈 저작자 표시 - 비영리적인 용도로만 - 비공식 3.0 비공식 라이센스（CC BY-NC-ND 3.0）
        </a>

### highlight {@highlightStyle:[github,solarized-light]}
highlightStyle: github ### 내장테마
# third party service
# 역자: busuanzi와 leancloud는 중국에서 사용하는 통계 사이트입니다. 한국에서의 사용은 무리가 있을 수 있으므로 별도의 번역을 하지는 않겠습니다.
## busuanzi --不蒜子站点总人数统计 {@visits_count:{enable:是否开启,icon:图标,text:显示文字/*%d为占位符*/,method:统计方式}}

visits_count:
  enable: true
  icon: fa-bar-chart
  text: '환영합니다 %d번째 방문자님'
  count_method: 'uv' ### uv: 여러 게시글 확인도 하나의 count로 처리，pv: 게시글을 확인할 때 마다 방문자 수 증가

## leancloud --- leancloud 阅读量统计
## {@leancloud:{enable:是否开启,className:创建的class,app_id:,app_key:,region:默认为中国地区,limits:热门文章显示总数}}
leancloud:
  enable: true
  className: "BlogCounter"
  app_id:
  app_key:
  region:
  limits: 10 ### 若要关闭该功能，设置为0或者在配置文件上移除popular对应的widget

## comments -- 댓글
### disqus
disqus_shortname:
### duoshuo
duoshuo_shortname:
### [gitment](https://github.com/imsun/gitment)
gitment:
  enable: true
  owner: GeekaholicLin
  repo: geekaholiclin.github.io
  client_id: aa2215dfc8ee944d1205
  client_secret: 77cd2afa5d161bc0ab04639ed81300d808c6e22b
  labels: "blog,gitment"
  perPage: 20
  maxCommentHeight:

## analytics
baidu_anaylytics:
google_anaylytics:

## sitemap
google_vertification:
baidu_vertification:

## mathjax
mathjax:
  enable: true  ### mathjax를 지원한다면 front-matter에서도 mathjax:true를 입력하세요
  src: //cdn.bootcss.com/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML ### cdn

# cdn or local files -- cdn을 통해 관련 라이브러리를 사용합니다. github에 내장된 파일을 사용하는 대신 cdn을 사용하는 것이 좋습니다.
## style cdn 
## icon -- 공식 홈페이지 주소: http://fontawesome.io/icons/
fontAwesome: //cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css


## script cdn --脚本cdn
## leancloud -- 官网:https://leancloud.cn/
leancloud_src: http://cdn1.lncld.net/static/js/2.1.0/av-min.js
## busuanzi -- 官网：http://busuanzi.ibruce.info/
busuanzi_src: //dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js

# theme and site self settings
since: 2015 ## 사이트 제작 시점
robot: 'all' ### 검색 엔진 크롤링 및 색인 생성 동작을 제어하려면 기본값은 all로 두세요. 'meta name = "robots"`또는 검색을 참조하십시오. https://support.google.com/webmasters/answer/79812?hl=ko
version: 0.0.2 ### 테마 버전


```


#### Site Configure

사이트는 일반적으로 기본 설정으로 유지되며 테마 관련 구성에 대해서만 설명합니다.

``` yaml
# Pagination
## Set per_page to 0 to disable pagination
## @per_page 첫 페이지 로딩속도를 위하여, 적절한 수치를 입력하세요
per_page: 10
pagination_dir: page

theme: ylion ### theme 디렉토리의 테마 파일 이름

### search플러그인 https://github.com/PaicHyperionDev/hexo-generator-search
### 사용설명은 해당 repository를 참고하세요
search:
  path: search.xml
  field: all

### 코드 하이라이트
highlight:
  enable: true
  line_number: true
  tab_replace:

```



### Run

``` bash
    hexo clean && hexo g && hexo s -p 4300
```

hexo dev server는 4300포트를 사용합니다. 브라우저에서 `http://localhost:4300`를 열어 미리보기를 하실 수 있습니다

**Tips:**

더 나은 블로그를 원한다면 `hexo-browsersync`와 `hexo-admin` 플러그인을 추천합니다

``` bash
    npm install hexo-browsersync --save
    npm install hexo-admin --save
```

`hexo-browsersync`는 모니터링을 하는데 사용합니다.
`hexo-admin`은 Backend와 유사한 기능을 제공합니다.

`hexo-browsersync`는 환경설정이 필요하지 않으며, 사용하는 server에 따라 미리보기가 바로 가능합니다.

`hexo-admin`의 사용은 공식 [Repository](https://github.com/jaredly/hexo-admin)를 참고하세요.

마지막으로，Enjoy it!!!:kissing_heart:


## Languages

영어, 중국어 간체자와 번체자를 지원합니다.
다른 언어로의 번역을 환영합니다.

한국어를 추가적으로 지원합니다.

## Compatibility

IE9+*、Chrome、Firefox、Safari

**설명:** IE9는 애니메이션을 제외한 기본기능만을 지원합니다. [leancloud는 통계기능을 정상적으로 사용할 수 없습니다](https://github.com/leancloud/javascript-sdk/issues/9)

## Contribute

테마의 기본적인 테스트는 통과를 했습니다. 개인적인 사용은 문제가 없습니다만 결함이 있을 수 있습니다.
사용 도중 버그 또는 개선사항이 있다면 언제든지 건의해 주십시오.

다양한 방식의 기여를 환영합니다. 건의사항이나 질문에 제한을 두지 않습니다.
코드를 수정하게 되는 경우, Fork와 PR을 기대합니다

테마가 마음에 든다면, star를 꼭 바라는건 아니지만.. :satisfied:

## Thanks

중국어 번역지원 : ku.taeyeon

## License

[MIT](/LICENSE)
