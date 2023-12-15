var posts=["2023/12/14/Github博客搭建笔记/","2023/12/15/阅读书源制作笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };