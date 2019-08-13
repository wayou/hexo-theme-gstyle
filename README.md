# hexo-theme-gstyle
a google style theme for hexo.

## Preview

[Live Demo](http://wayou.github.io/hexo-theme-gstyle/public/)

![preview](https://raw.githubusercontent.com/wayou/hexo-theme-gstyle/master/source/img/preview.jpg)

<sub>screenshot generated by [am i responsive](http://ami.responsivedesign.is/?url=http%3A%2F%2Fwayou.github.io%2F)</sub>

## Features

### Responsive
Totaly responsive, mobile first.
No bootstrap, using modern css3 flex!

### Impressing Navigation

![full screen navigation menu with morphing animation](https://raw.githubusercontent.com/wayou/hexo-theme-gstyle/master/source/img/nav.gif)
<br>
Full screen morphing navigation on mobile

### Graceful table of content module
Auto generated table of content with transition animation when expanding and collapsing.
![full screen navigation menu with morphing animation](https://raw.githubusercontent.com/wayou/hexo-theme-gstyle/master/source/img/toc.gif)

## Usage
- `git clone https://github.com/wayou/hexo-theme-gstyle.git themes/gstyle`
- config site `_config.yml` `theme: gstyle`

## Using relative assets path in your post
- Enable `post_asset_folder` in your hexo site config file `_config.yml`
- Install `hexo-filter-pathfix` to fix the path of assets `npm install --save hexo-filter-pathfix`
- Then you can using relative path when writing posts like `![image title](image_name.jpg)`.

## Config

### toc
Enable `toc: true` in the Front-matter of posts you wanna display table of content

```diff
title: this is the post title
+toc: true
date: 2016-01-01 15:47:33
tags:
---
```

### Comments
2 comment vendors implemented , choose one you like.
``` yml
duoshuo_shortname: #your duoshuo shortname goes here
disqus_shortname: #your disqus shortname goes here
```

### Site analytics
The `baidu_analytics` is mainly for mainland users. you can get the baidu analytics id from the admin page of baidu analytics code installing page.
![where to get the baidu analytics id](https://raw.githubusercontent.com/wayou/hexo-theme-gstyle/master/source/img/baidu_analytics.png)
``` yml
google_analytics:  
baidu_analytics:
```

### Image caption
To enable image caption for iamges, install `hexo-image-caption` plugin by using this command:
```bash
npm i --save hexo-image-caption
```
And then enable it in your hexo site config file `_config.yml` (not the theme config file).
```yml
# add caption for iamges
image_caption:
  enable: true
  class_name:
```

### Code highlight

Hexo default code highligth is the default. 
However, I customized [Prism.js](http://prismjs.com/) for this theme, whitch is much nicer and many languagaes like `jsx` are well supported.
And thanks to [ele828](https://www.npmjs.com/~ele828) for making the [hexo prism plugin](https://www.npmjs.com/package/hexo-prism-plugin).

To enable Prism code highlight,
- `npm i -S hexo-prism-plugin`
- edit hexo config file `_config.yml`(not the one for the theme) to enable this plugin
```yml
prism_plugin:
  mode: 'preprocess'    # realtime/preprocess 
  theme: 'default'
```
![](source/img/hexo-prism.jpg)

### Sliding navigation indicator
Whether to show an indicator for the active navigation menu item
```yml
active_nav: false
```

