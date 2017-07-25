var _ajax = {
    websiteSearch: function (path,extra) {
        'use strict';
        /*success func*/
        function success(xmlResponse,extra) {
            var datas;
            if(!extra.flag){
                datas = [];
                var $entries = xmlResponse.getElementsByTagName('entry');
                for (var i = 0, length = $entries.length; i < length; i++) {
                    var _this = $entries[i];
                    datas.push({
                        title: _this.getElementsByTagName('title')[0].textContent,
                        content: _this.getElementsByTagName('content')[0].textContent,
                        url: _this.getElementsByTagName('url')[0].textContent,
                        categories: _this.getElementsByTagName('categories')[0] && _this.getElementsByTagName('categories')[0].textContent,
                        tags: _this.getElementsByTagName('tags')[0] && _this.getElementsByTagName('tags')[0].textContent
                    });
                }
                extra.data = datas;//挂载
            }else datas = extra.data; //恢复
            var $input = document.getElementById('search-input');
            var $resultContent = document.getElementById('search-result');
            $input.addEventListener('input', function () {
                console.log('input');
                var str = '';
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.value.trim().length <= 0) {
                    return;
                }
                // perform local searching
                datas.forEach(function (data) {
                    var isMatch = false;
                    var content_index = [];
                    var data_title = data.title.trim().toLowerCase();
                    var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                    var data_categories = (data.categories ? data.categories.trim().replace(/[\n|\s]/g, " ").toLowerCase() + "\n" : "");
                    var data_tags = (data.tags ? data.tags.trim().replace(/[\n|\s]/g, " ").toLowerCase() + "\n" : "");
                    var data_url = data.url;
                    var index_title = -1;
                    var index_content = -1;
                    var first_occur = -1;
                    // only match artiles with not empty titles and contents
                    if (data_title != '' && data_content != '') {
                        keywords.forEach(function (keyword, i) {
                            index_title = data_title.indexOf(keyword);
                            var tempCates = data_categories?("Categories: "+data_categories):"";
                            var tempTags = data_tags?("Tags: "+data_tags):"";
                            data_content = tempCates + tempTags + data_content;
                            index_content = data_content.indexOf(keyword);
                            if (index_title < 0 && index_content < 0) {
                                isMatch = false;
                            } else {
                                if (index_content < 0) {
                                    index_content = 0;
                                }
                                if (i == 0) {
                                    first_occur = index_content;
                                }
                                isMatch = true;
                            }
                        });
                    }
                    // show search results
                    if (isMatch) {
                        str += "<li class='search-item'><a href='" + data_url + "'><h3 class='search-result-title'>" + data_title + "</h3>";
                        var content = data_content;
                        if (first_occur >= 0) {
                            // cut out 100 characters
                            var start = first_occur - 20;
                            var end = first_occur + 80;
                            if (start < 0) {
                                start = 0;
                            }
                            if (start == 0) {
                                end = 100;
                            }
                            if (end > content.length) {
                                end = content.length;
                            }
                            var match_content = content.substr(start, end);
                            // highlight all keywords
                            keywords.forEach(function (keyword) {
                                var regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, "<strong class=\"search-keyword\">" + keyword + "</strong>");
                            });

                            str += "<p class=\"search-result-items\">" + match_content + "...</p>"
                        }
                        str += "</a></li>";
                    }
                });
                $resultContent.innerHTML = str;
            });

        }
        /*ajax*/
            if(!extra.flag){
                var $ajax = new XMLHttpRequest();
                $ajax.onreadystatechange = function () {
                    if ($ajax.readyState === 4 && $ajax.status === 200) {
                        var $resultContent = document.getElementById('search-result');
                        $resultContent.innerHTML="";//remove the spinner
                        success($ajax.responseXML,extra);
                        extra.flag = true;
                        /*优化404页面延迟*/
                      var inputEvent = document.createEvent("HTMLEvents");
                      inputEvent.initEvent("input", false, true);
                      document.getElementById("search-input").dispatchEvent(inputEvent);
                    }
                };
                $ajax.open('GET', path, true);
                $ajax.send();
            }else success({},extra);
    },
    init: function () {
        return _ajax.websiteSearch;
    }
};
