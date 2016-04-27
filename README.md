# hexo-theme-gstyle
a googl style hexo theme.

##features
### smooth page transition
all pages are loaded async by using [smoothsate](http://smoothstate.com/).
and pages are preloaded before you visit them, super fast!
no blank between page switch!

### responsive
totaly responsive, mobile first.
![hexo-theme-gstyle responsive screenshot]()

### impressing navigation
full screen morphing navigation on mobile
![full screen navigation menu with morphing animation]()

## how to use
- `git clone <repo addr> themes/`
- config site `_config.yml` `theme: splash`

## config

### comments
implemented 2 comments vendor, choose one you like.
``` yml
duoshuo_shortname: #your duoshuo shortname goes here
disqus_shortname: #your disqus shortname goes here
```

### site analytics
the `baidu_analytics` is mainly for mainland users. you can get the baidu analytics id from the admin page of baidu analytics code installing page.
![where to get the baidu analytics id]()
``` yml
google_analytics:  
baidu_analytics: 
```

### image title
add caption below each image in the post
```yml
image_caption: true
```

### navigation active indicator
whether to show an indicator for the active navigation menu item
```yml
active_nav: false
```

### known issues

- images may be empty after imagemin optimized. my suggestion is not to enable it at present
- 