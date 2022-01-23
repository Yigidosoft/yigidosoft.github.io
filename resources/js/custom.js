'use strict';

$(document).on('ready', function () {

    // Cached Variables
    var windowVar = $(window);
    var $main = $('html, body');
    var elImg = $('.bg-img');
    var elColor = $('.bg-color');
    var menuItems = $('.all-menu-wrapper .nav-link');
    var menuIcon = $('.menu-icon, #navMenuIcon');
    var menuBlock = $('.all-menu-wrapper');
    var reactToMenu = $('.page-main, .navbar-sidebar, .page-cover')
    var menuLinks = $(".navbar-mainmenu a, .navbar-sidebar a");
    var imageListSlide = $('.slide-show .img');
    var videoBg = $('.video-container video, .video-container object');
    var pageSectionDivs = $('.page-fullpage .section');
    var headerContainer = $('.hh-header');
    var slideElem = $('.slide');
    var arrowElem = $('.p-footer .arrow-d');
    var pageElem = $('.section');
    var mainPage = $('#mainpage');
    var sendEmailForm = $('.send_email_form');
    var sendMessageForm = $('.send_message_form');

    // Variables
    var imageSlides = [];
    var pageSections = [];
    var pageAnchors = [];
    var scrollOverflow = true;
    var css3 = true;

    //Page Loader
    windowVar.on('load', function () {
        $('#page-loader').addClass('p-hidden');
        $('.section').addClass('anim');
    });

    // Subscribe and contact forms sender
    $.fn.initForm = function (options) {
        var settings = $.extend({
            type: 'post',
            serverUrl: '#',
            successClean: this.find('.form-success-clean'),
            successGone: this.find('.form-success-gone'),
            successInvisible: this.find('.form-success-invisible'),
            successVisible: this.find('.form-success-visible'),
            textFeedback: this.find('.form-text-feedback'),
        }, options);
        var $ajax = {
            sendRequest: function (p) {
                var form_fill = $(p);
                var form_inputs = form_fill.find(':input');
                var form_data = {};
                form_inputs.each(function () {
                    form_data[this.name] = $(this).val();
                });
                $.ajax(
                    {
                        url: settings.serverUrl,
                        type: settings.type,
                        data: form_data,
                        dataType: 'json',

                        success: function (data) {
                            //Ajax connexion was a success, now handle response
                            if (data && !data.error) {
                                settings.successClean.val("");
                                settings.successInvisible.addClass('invisible');
                                settings.successGone.addClass('gone');
                                settings.successVisible.removeClass('invisible');
                                settings.successVisible.removeClass('gone');
                                console.log('Request sent successfully');
                            }
                            // Else the login credentials were invalid.
                            else {
                                settings.textFeedback.removeClass('gone');
                                settings.textFeedback.removeClass('invisible');
                                settings.textFeedback.html('Error when sending request.');
                                console.log('Could not process AJAX request to server');
                            }
                        },
                        /* show error message */
                        error: function (jqXHR, textStatus, errorThrown) {
                            settings.textFeedback.removeClass('gone');
                            settings.textFeedback.removeClass('invisible');
                            settings.textFeedback.html('Error when sending request.');
                            console.log('ajax error');

                        }
                    });
            }

        };


        //if jquery validator plugin is enable, use it
        if (jQuery.validator) {
            jQuery.validator.setDefaults({
                success: "valid"
            });
            this.validate({
                rules: {
                    field: {
                        required: true,
                        email: true
                    }
                }
            });
        }



        this.submit(function (event) {
            event.preventDefault();
            if (jQuery.validator) {
                if ($(this).valid()) {
                    $ajax.sendRequest(this);
                }
            }
            else {
                $ajax.sendRequest(this);
            }
        });

    };

    // Background image as data attribut
    for (var i = 0; i < elImg.length; i++) {
        var src = elImg[i].getAttribute('data-image-src');
        elImg[i].style.backgroundImage = "url('" + src + "')";
        elImg[i].style.backgroundRepeat = "no-repeat";
        elImg[i].style.backgroundPosition = "center";
        elImg[i].style.backgroundSize = "cover";
    }
    // Background color as data attribut
    for (var i = 0; i < elColor.length; i++) {
        var src = elColor[i].getAttribute('data-bgcolor');
        elColor[i].style.backgroundColor = src;
    }

    // Menu icon clicked
    menuIcon.on('click', function () {
        menuIcon.toggleClass('menu-visible');
        menuBlock.toggleClass('menu-visible');
        menuItems.toggleClass('menu-visible');
        reactToMenu.toggleClass('menu-visible');
        return false;
    });

    // Hide menu after a menu item clicked
    menuLinks.on('click', function () {
        menuIcon.removeClass('menu-visible');
        menuBlock.removeClass('menu-visible');
        menuItems.removeClass('menu-visible');
        reactToMenu.removeClass('menu-visible');
        return true;
    });

    // Carousel Slider
    new Swiper('.carousel-swiper-beta-demo .swiper-container', {
        pagination: '.carousel-swiper-beta-demo .items-pagination',
        paginationClickable: '.carousel-beta-alpha-demo .items-pagination',
        nextButton: '.carousel-swiper-beta-demo .items-button-next',
        prevButton: '.carousel-swiper-beta-demo .items-button-prev',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            1024: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            440: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

    // Slideshow slider
    var imageList = $('.slide-show .img');
    var imageSlides = [];
    for (var i = 0; i < imageList.length; i++) {
        var src = imageList[i].getAttribute('data-src');
        imageSlides.push({ src: src });
    }
    $('.slide-show').vegas({
        delay: 5000,
        shuffle: true,
        slides: imageSlides,
        animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
    });

    //Prepare content for animation
    $('.section .content .anim.anim-wrapped').wrap("<span class='anim-wrapper'></span>");

    // disable scroll overflow on small device
    if (windowVar.width() < 601) {
        scrollOverflow = false;
        css3 = false;
    }
    if (windowVar.height() < 480) {
        scrollOverflow = false;
        css3 = false;
    }

    // Get sections name
    for (var i = 0; i < pageSectionDivs.length; i++) {
        pageSections.push(pageSectionDivs[i]);
    }

    window.asyncEach(pageSections, function (pageSection, cb) {
        var anchor = pageSection.getAttribute('data-section');
        pageAnchors.push(anchor + "");
        cb();
    }, function (err) {
        if (mainPage.width()) {
            // config fullpage.js
            mainPage.fullpage({
                menu: '#qmenu',
                anchors: pageAnchors,
                verticalCentered: false,
                css3: css3,
                navigation: true,
                responsiveWidth: 601,
                responsiveHeight: 480,
                scrollOverflow: scrollOverflow,
                scrollOverflowOptions: {
                    click: true,
                    submit: true,
                },
                normalScrollElements: '.section .scrollable',
                afterRender: function () {
                    videoBg.maximage('maxcover');

                    // Fix for internet explorer
                    // Detect IE 6-11
                    var isIE = /*@cc_on!@*/false || !!document.documentMode;
                    if (isIE) {
                        var contentColumns = $('.section .content .c-columns');
                        contentColumns.height(windowVar.height())
                        for (var i = 0; i < contentColumns.length; i++) {
                            if (contentColumns[i].height <= windowVar.height()) {
                                contentColumns[i].style.height = "100vh";
                            }
                        }
                    }

                    // Init contact form (change backend.php file to your php file which will send email)
                    var newsletterServerUrl = './backend.php';
                    var messageServerUrl = './backend.php';

                    if (sendEmailForm.attr('action') && (sendEmailForm.attr('action')) != '') {
                        newsletterServerUrl = sendEmailForm.attr('action');
                    }
                    if (sendMessageForm.attr('action') && (sendMessageForm.attr('action') != '')) {
                        messageServerUrl = sendMessageForm.attr('action');
                    }

                    sendEmailForm.initForm({
                        serverUrl: newsletterServerUrl,
                    });
                    sendMessageForm.initForm({
                        serverUrl: messageServerUrl,
                    });

                },
                afterResize: function () {
                    var pluginContainer = $(this);
                    $.fn.fullpage.reBuild();
                },
                onLeave: function (index, nextIndex, direction) {
                    // Behavior when a full page is leaved
                    arrowElem.addClass('gone');
                    pageElem.addClass('transition');
                    slideElem.removeClass('transition');
                    pageElem.removeClass('transition');
                },
                afterLoad: function (anchorLink, index) {
                    // Behavior after a full page is loaded
                    // hide or show clock
                    if ($('.section.active').hasClass('hide-clock')) {
                        headerContainer.addClass('gone');
                    } else {
                        headerContainer.removeClass('gone');
                    }
                }
            });

        }
    });
    // Scroll to fullPage.js next/previous section
    $('.scrolldown a, .scroll.down').on('click', function () {
        try {
            // fullpage scroll
            $.fn.fullpage.moveSectionDown();
        } catch (error) {
            // normal scroll
            $main.animate({
                scrollTop: window.innerHeight
            }, 400, function () {
            });
        }

    });

    //Hide some ui on scroll
    windowVar.on('scroll', function () {
        var scrollpos = $(this).scrollTop();
        var siteHeaderFooter = $('.page-footer, .page-header');

        if (scrollpos > 100) {
            siteHeaderFooter.addClass("scrolled");
        }
        else {
            siteHeaderFooter.removeClass("scrolled");
        }
    });

});

// Custom Cursor

var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
//     updateCursor: function(e) {
//         var self = this;
        
//         console.log(e)
        
//         // Show the cursor
//         self.cursorVisible = true;
//         self.toggleCursorVisibility();

//         // Position the dot
//         self.endX = e.pageX;
//         self.endY = e.pageY;
//         self.$dot.style.top = self.endY + 'px';
//         self.$dot.style.left = self.endX + 'px';
//     },
    
    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();