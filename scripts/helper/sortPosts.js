function sortPostsFunc(posts) {

    var datas = posts.data.sort(function(a, b){
        if(a.top && b.top) {
            if(a.top == b.top) return b.date - a.date;
            else return b.top - a.top;
        }
        else if(a.top && !b.top) {
            return -1;
        }
        else if(!a.top && b.top) {
            return 1;
        }
        else {
            return b.date - a.date;
        }
    });

    return datas;
}
hexo.extend.helper.register('sortPosts',sortPostsFunc);