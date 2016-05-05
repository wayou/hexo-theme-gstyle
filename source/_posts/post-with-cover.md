title: 带封面的文章
date: 2016-05-05 21:17:10
cover: cover.jpeg
categories:
tags:
---

这是一篇带封面的文章，封面将作为标题的背景展示在首页，显示成一个卡片。

<!-- more -->

可以通过在markdown文件顶部指定`cover`属性来显示封面。

```markdown
title: 带封面的文章
toc: true
date: 2016-05-05 21:17:10
cover: cover.jpeg #指定图片资源
categories:
tags:
```
一般地，如果开启了hexo的`post_asset_folder: true`设置项，我们只需要将相应图片放到与文章一起生成的存放资源的文件夹里，即可简单方便地通过直接写图片名来指定封面了。参见本示例站点。
