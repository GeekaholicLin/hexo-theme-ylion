;(function () {
    document.body.insertAdjacentHTML("beforeend", '<div id="loading"><i class="load-info"></i></div>');
    document.addEventListener('readystatechange', function () {
        if (document.readyState === "complete") {
            var $load = document.getElementById('loading');
            document.body.removeChild($load);
        }
    });
})();

window.onload = function () {
    var $main = document.getElementById('main'),
        $totop = document.querySelector('#tools .totop-btn'),
        $processDiv = document.getElementById('process'),
        $body = document.body,
        scrollTimer = null,
        hashTimer = null,
        $postExpWrap = document.querySelector('ul#main'),
        $searchBtn = document.getElementById('search'),
        $searchOverlay = document.getElementById('search-overlay'),
        $tocBtn = document.querySelector('#tools .toc-btn'),
        $tocWrap = document.querySelector('.toc'),
        $searchInput = document.getElementById('search-input'),
        $header = document.getElementsByTagName('header')[0],
        $post = document.getElementById('post'),
        $postBody = document.getElementById('post-body'),
        $highSongBtn = document.querySelector('.high-song'),
        $donateBtn = document.querySelector('.donate'),
        $donateWrap = document.getElementById('donate-wrap'),
        $commentsCounter = document.getElementById('comments-count'),
        $ajaxImgs = document.querySelectorAll('.img-ajax'),
        $postList = document.getElementById('post-list');

    //responsive design
    var isPC = true;
    (function (designPercent) {
        function params(u, p) {
            var m = new RegExp("(?:&|/?)" + p + "=([^&$]+)").exec(u);
            return m ? m[1] : '';
        }

        if (/iphone|ios|android|ipod/i.test(navigator.userAgent.toLowerCase()) == true && params(location.search, "from") != "mobile") {
            $header.style.position = 'relative';
            var mainWidth = document.body.clientWidth;
            var fontSize = mainWidth / designPercent + 'px';
            document.documentElement.style.fontSize = fontSize;
            window.onresize = function () {
                var mainWidth = document.body.clientWidth;
                fontSize = mainWidth / designPercent + 'px';
                document.documentElement.style.fontSize = fontSize;
            };
            isPC = false;
        }
        else document.documentElement.style.fontSize = '610%';
    })(450 / 100);
    //classList ployfill
    if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== 'undefined') {
        Object.defineProperty(HTMLElement.prototype, 'classList', {
            get: function () {
                var self = this;

                function update(fn) {
                    return function (value) {
                        var classes = self.className.split(/\s+/),
                            index = classes.indexOf(value);
                        fn(classes, index, value);
                        self.className = classes.join(" ");
                    }
                }

                var ret = {
                    add: update(function (classes, index, value) {
                        ~index || classes.push(value);
                    }),

                    remove: update(function (classes, index) {
                        ~index && classes.splice(index, 1);
                    }),

                    toggle: update(function (classes, index, value) {
                        ~index ? classes.splice(index, 1) : classes.push(value);
                    }),

                    contains: function (value) {
                        return !!~self.className.split(/\s+/).indexOf(value);
                    },

                    item: function (i) {
                        return self.className.split(/\s+/)[i] || null;
                    }
                };

                Object.defineProperty(ret, 'length', {
                    get: function () {
                        return self.className.split(/\s+/).length;
                    }
                });

                return ret;
            }
        });
    }
    function getScrollTop() {
        return ($body.scrollTop || document.documentElement.scrollTop);
    }

    /*append copyright func*/

    if (Boolean(copyrightObj.enable)) {
        function appendCopyright(arg, triggerLength) {
            var selectionObj = window.getSelection();
            if (selectionObj.toString().length <= (parseInt(triggerLength) || 20)) return selectionObj;
            var $body = document.body,
                pageLink = "<br/><br/>url：" + window.location.href,
                copyrightText = selectionObj + pageLink +
                    "<br/>" + arg,
                tempDiv = document.createElement('div');
            tempDiv.style.display = 'absolute';
            tempDiv.style.left = '-99999px';
            $body.appendChild(tempDiv);
            tempDiv.innerHTML = copyrightText;
            selectionObj.selectAllChildren(tempDiv);
            setTimeout(function () {
                $body.removeChild(tempDiv);
            }, 500);
        }

        $main && $main.addEventListener('copy', function () {
            appendCopyright(copyrightObj.appendText, copyrightObj.triggerCopyLength);
        });
    }
    /*animation to targetEle*/
    $totop.onclick = function () {
        scrollTo(0, 1000);
    };
    //imgs ajax,also want to support post imgs
    function imgsAjax ($targetEles) {
        if(!$targetEles) return;
        var _length = $targetEles.length;
        if(_length>0){
            var scrollBottom = getScrollTop() + window.innerHeight;
            for(var i = 0;i<_length;i++){
                (function (index) {
                    var $this = $targetEles[index];
                    //fix offset bug...
                    var $this_offsetZero = $this.getBoundingClientRect().top+window.pageYOffset-document.documentElement.clientTop;
                    if(scrollBottom >= $this_offsetZero&&$this.getAttribute('data-src')&&$this.getAttribute('data-src').length>0){
                        if($this.nodeName.toLowerCase()==='img'){
                            $this.src = $this.getAttribute('data-src');
                        }else {
                            var imgObj = new Image();
                            imgObj.onload = function () {
                                $this.innerHTML = "";
                            };
                            imgObj.src = $this.getAttribute('data-src');
                            $this.style.backgroundImage = "url("+$this.getAttribute('data-src')+")";
                        }
                        $this.removeAttribute('data-src');//为了优化，移除
                    }
                })(i);
            }

        }
    }
    var scrollCallback = function () {
        //totop
        if (getScrollTop() > 260) {
            $totop.style.display = 'block';
        } else $totop.style.display = 'none';
        //header
        //getComputedStyle() fix 'fixed' style bug
        if (window.getComputedStyle($header).position === "fixed") {
            if (getScrollTop() > 0) {
                $header.classList.add('fixed');
            } else {
                $header.classList.remove('fixed');
            }
        }

        //rate of progress
        $processDiv.style.width = (getScrollTop() / ($body.scrollHeight - window.innerHeight)) * 100 + "%";
        //imgs ajax
        if(isPC){
            imgsAjax($ajaxImgs);
        }
    };
    scrollCallback();
    window.addEventListener('scroll', function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
            scrollCallback();
        }, 100);
    });
    /*hash click*/
    function scrollTo(to, duration) {
        if (getScrollTop() == to) return;
        var diff = to - getScrollTop();
        var scrollStep = Math.PI / (duration / 10);
        var count = 0, currPos;
        var start = getScrollTop();
        var scrollInterval = setInterval(function () {
            if (getScrollTop() != to) {
                count = count + 1;
                currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
                if ($body.scrollTop) $body.scrollTop = currPos;
                else document.documentElement.scrollTop = currPos;
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
    }

    function toHash(e) {
        var _that = e.target;
        var targetTag = _that.tagName.toLowerCase();
        if (targetTag === 'h1' || targetTag === 'h2' || targetTag === 'h3' || targetTag === 'h4' || targetTag === 'h5' || targetTag === 'h6') {
            // scrollTo(_that.offsetTop, 200);
            clearTimeout(hashTimer);
            hashTimer = setTimeout(function () {
                var hash = window.location.hash;
                var result = null;
                if (hash === "") result = window.location.href += '#' + _that.id;
                else result = window.location.href.replace(hash, '#' + _that.id);
                window.location.href = result;
            }, 100);
        }
    }

    $postBody && $postBody.addEventListener('click', function (e) {
        toHash(e);
    });
    // click fake links
    function clickLink(e, bounce) {
        e.preventDefault();
        var $listenEle = e.target;
        while ($listenEle !== this && $listenEle.tagName.toLowerCase() !== 'li') {
            $listenEle = $listenEle.parentNode;
        }
        if ($listenEle !== this) {
            if (bounce) $listenEle.classList.add('bounce');
            $body.style.opacity = '0.5';
            if ($listenEle.attributes["_href"]) {
                window.location.href = $listenEle.attributes["_href"].value;
            }
        }

    }

    $postList && $postList.addEventListener('click', function (e) {
        clickLink(e, true);
    }, false);
    $postExpWrap && $postExpWrap.addEventListener('click', function (e) {
        clickLink(e, false);
    }, false);
    /*search function*/
    var extra = {flag: false, data: []};
    $searchBtn.addEventListener('click', function (e) {
        search.func(search.path, extra);
        $searchOverlay.classList.add('show');
        $searchInput.focus();
    }, false);
    $searchOverlay.addEventListener('click', function (e) {
        if (e.target.classList.contains('search-area-wrap')) {
            this.classList.remove('show');
        }
    }, false);
    /*fix bug*/
    if (!$tocWrap && $tocBtn) {
        $tocBtn.style.display = 'none';
    }
    $tocBtn && $tocBtn.addEventListener('click', function (e) {
        if ($tocWrap) {
            if ($tocWrap.classList.contains('show')) {
                $tocWrap.classList.remove('show');
            } else $tocWrap.classList.add('show');
        }
    }, false);
    $searchInput.onfocus = function (e) {
        this.parentNode.classList.add('focus');
    };
    $searchInput.onblur = function (e) {
        this.parentNode.classList.remove('focus');
    };
    /*change comments original text*/
    function changeText() {
        $commentsCounter.removeEventListener('DOMNodeInserted', changeText);
        /*fix IE stackoverflow bug*/
        var text = $commentsCounter.textContent.trim().toLowerCase();
        var re = /.*(\d+).*/;
        var result = 0;
        if (text.match(re)) {
            result = text.replace(re, '$1');
        }
        $commentsCounter.textContent = result;
    }

    $commentsCounter && $commentsCounter.addEventListener('DOMNodeInserted', changeText);
    var canClick = true;
    /*high song and donate*/
    /*fix the multi-click bug*/
    $highSongBtn && $highSongBtn.addEventListener('click', function (e) {
        if (canClick) {
            canClick = false;
            setTimeout(function () {
                canClick = true;
            }, 60000);
            highSong();
        }
    });
    $donateBtn && $donateBtn.addEventListener('click', function (e) {
        $donateWrap && $donateWrap.classList.add('show');
    });
    $donateWrap && $donateWrap.addEventListener('click', function (e) {
        $donateWrap.classList.remove('show');
    });

    /*counter -- leancloud*/
    if (leancloudObj.enable) {
        (function () {
            var $targetArr = document.querySelectorAll('.article-meta .hits');
            // var className = $body.getAttribute('data-leancloud-classname');
            var className = leancloudObj.className.trim();
            if ($targetArr) var arrLength = $targetArr.length;
            if (arrLength > 0) {
                function addCount() {
                    var Counter = AV.Object.extend(className);
                    var query = new AV.Query(className);
                    var $target = document.querySelector('#post .hits');
                    var url = $target.getAttribute('data-leadcloud-url');
                    var title = $target.getAttribute('data-leadcloud-title').trim();
                    query.equalTo("url", url);
                    query.find().then(function (results) {
                        if (results.length > 0) {
                            var counter = results[0];
                            counter.increment("times", 1);
                            counter.save(null, {fetchWhenSave: true});
                        }
                        else {
                            var newcounter = new Counter();
                            newcounter.set("title", title);
                            newcounter.set("url", url);
                            newcounter.set("times", 1);
                            newcounter.save(null, {
                                success: function (newcounter) {
                                },
                                error: function (newcounter, error) {
                                    console.error('Failed to create!');
                                }
                            });
                        }
                    });
                }

                if ($post) addCount();//if the layout of post, increase first
                for (var i = 0; i < arrLength; i++) {
                    (function (index) {
                        var query = new AV.Query(className);
                        var item = null, url = "";
                        item = $targetArr[index];
                        url = item.getAttribute('data-leadcloud-url');
                        query.equalTo("url", url);
                        query.find().then(function (results) {
                            if (results.length > 0) {
                                var counter = results[0];
                                var times = counter.get("times");
                                item.innerHTML = times.toString().trim();
                            }
                            else {
                                item.innerHTML = 0;
                            }
                        });
                    })(i);
                }
            }
        })();
        //popular posts
        (function () {
            var $popular = document.getElementById('popular-posts');
            var className = leancloudObj.className.trim();
            var limits = leancloudObj.limits;
            var $popularContent = document.getElementById('popular-content');
            var title = "", url = "", times = "";
            var $result = "";
            //if popular posts widget exits
            if ($popular) {
                var query = new AV.Query(className);
                query.descending("times");
                query.limit(limits);
                query.find().then(function (results) {
                    for (var i = 0, length = results.length; i < length; i++) {
                        (function (index) {
                            var item = results[index];
                            title = item.get('title')||'No Title!';
                            url = item.get('url');
                            times = item.get('times');
                            $result += '<li class="popular-item popular-item-' + (index + 1) + '">';
                            $result += '<a href="' + url + '">' + title + '<sup>' + times + '</sup></a>';
                            $result += '</li>'
                        })(i);
                    }
                    $popularContent.innerHTML = $result;
                });
            }
        })();
    }


};
