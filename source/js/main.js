$(function() {
    var isPhone = $(window).width() < 768;

    $('.material-preloader').hide();

    init();

    //smooth sate
    var $body = $('html, body'),
        $main = $('#main'),
        options = {
            prefetch: true,
            pageCacheSize: 4,
            blacklist: '#toc a,.post-content a,.no-smoothstate',
            onStart: {
                duration: 250,
                render: function(url, $container) {
                    $('.material-preloader').show();
                    $body.animate({
                        scrollTop: 0
                    });
                    $main.addClass('is-exiting');
                    smoothState.restartCSSAnimations();
                }
            },
            onEnd: {
                duration: 0,
                render: function(url, $container, $content) {
                    $('.material-preloader').hide();
                    $main.removeClass('is-exiting');
                    $main.html($content);
                    $body.css('cursor', 'auto');
                    // $body.find('a').css('cursor', 'auto');

                    //re-initial page after loaded
                    setTimeout(function() {
                        init();
                        //页面加载后显示评论，如果有的话
                        if (window['DUOSHUO'] && $('#ds-thread')) {
                            DUOSHUO.EmbedThread($('#ds-thread')[0]);
                        }
                        // if (window['DISQUS'] && $('#disqus_thread')) {
                        //     DISQUS.reset({
                        //         reload: true,
                        //         config: function() {
                        //             this.page.identifier = window.disqusConfig.identifier;
                        //             this.page.url = window.disqusConfig.url;
                        //         }
                        //     });
                        // }
                    });
                }
            }
        },
        smoothState = $main.smoothState(options).data('smoothState');

    function init() {
        $('.material-preloader').hide();
        initialNavToggle();
        setupRipple();
        slidingBorder();
        toc();
    }

    function slidingBorder() {
        // sliding border
        var $activeState = $('.nav-indicator', 'nav'),
            $navParent = $('.menu-wrapper', 'nav'),
            overNav = false,
            $hoveredLink,
            $activeLink = $("ul.menus li.active a"),
            activeHideTimeout;
        setActiveLink(true);
        $('.menu-wrapper ul.menus li').on('mousemove', onLinkHover);
        $('.menu-wrapper').on('mouseleave', onLinksLeave);

        function onLinkHover(e) {
            if (!isPhone) {
                $hoveredLink = e.target ? $(e.target) : e;
                if (!$hoveredLink.is('li')) {
                    $hoveredLink = $hoveredLink.parent('li');
                }
                var left = $hoveredLink.offset().left - $navParent.offset().left,
                    width = $hoveredLink.width();
                if (0 != $activeLink.length || overNav) {
                    $activeState.css({
                        transform: "translate3d(" + left + "px, 0, 0) scaleX(" + width / 100 + ")"
                    });
                } else {
                    clearTimeout(activeHideTimeout),
                        $activeState.css({
                            transform: "translate3d(" + (left + width / 2) + "px, 0, 0) scaleX(0.001)"
                        });
                    setTimeout(function() {
                        $activeState.addClass("animate-indicator").css({
                            transform: "translate3d(" + left + "px, 0, 0) scaleX(" + width / 100 + ")"
                        })
                    }, 10);
                }
                overNav = true;
            }
        }

        function onLinksLeave(e) {
            if (!isPhone) {
                if (0 == $activeLink.length) {
                    var left = $hoveredLink.offset().left - $navParent.offset().left,
                        width = $hoveredLink.width();
                    $activeState.css({
                        'transform': "translate3d(" + (left + width / 2) + "px, 0, 0) scaleX(0.001)"
                    });
                    activeHideTimeout = setTimeout(function() {
                        $activeState.removeClass("animate-indicator")
                    }, 200);
                } else {
                    onLinkHover($activeLink);
                }
                overNav = false;
            }
        }

        function setActiveLink(load) {
            if ($activeLink.length > 0) {
                var left = $activeLink.offset().left - $navParent.offset().left;
                $activeState.css({
                    'transform': "translate3d(" + (left + $activeLink.width() / 2) + "px, 0, 0) scaleX(0.001)"
                });
                setTimeout(function() {
                    $activeState.addClass("animate-indicator"),
                        onLinkHover($activeLink)
                }, 100);
            }
        }
    }

    function toc() {
        if (!isPhone) {
            //toc
            $('#toc').html('');
            $('#toc').tocify({
                'selectors': 'h2,h3',
                'extendPage': false,
                'theme': 'none',
                'scrollHistory':true
            });
        }
    }

    function initialNavToggle() {
        //nav icon morphing
        $('.nav-toggle-icon').click(function() {
            $(this).toggleClass('active').find('.material-hamburger').toggleClass('opened');
            $('.menu-wrapper').toggleClass('active');
            $('.logo').toggleClass('fixed');
        });
    }

    function setupRipple() {
        // ripple click http://fian.my.id/Waves/#start
        Waves.attach('.wave');
        Waves.attach('.pagination a');
        Waves.attach('.pager .pager-item', ['waves-button']);
        Waves.attach('.btn', ['waves-button']);
        Waves.init();
    }

})
