var posts=["2023/12/14/Github博客搭建笔记/","2023/12/14/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };