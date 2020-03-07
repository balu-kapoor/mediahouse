$(document).ready(function () {

    var slider = $('.c-layout-revo-slider .tp-banner');
    var cont = $('.c-layout-revo-slider .tp-banner-container');
    var height = (App.getViewPort().width < App.getBreakpoint('md') ? 400 : 620);

    var api = slider.show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        responsiveLevels: [2048, 1024, 778, 320],
        gridwidth: [1240, 1024, 778, 320],
        gridheight: [868, 768, 500, 500],
        delay: 15000,
        startwidth: 1170,
        startheight: App.getViewPort().height,
        autoHeight: 'on',
        touchenabled: "on",

        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "false",
            /*arrows: {
                style:"circle",
                enable:true,
                hide_onmobile:false,
                hide_onleave:false,
                tmp:'',
                left: {
                    h_align:"left",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                },
                right: {
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                }
            } */
            arrows: {
                enable: true
            }
        },

        shadow: 0,

        spinner: "spinner2",

        disableProgressBar: "on",


        hideThumbsOnMobile: "on",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "on",
        hideArrowsOnMobile: "on",
        hideThumbsUnderResolution: 0,

    });
    // slider.bind("revolution.slide.onvideostop", function (e, data) {
    //     var player = data.video;
    //     player.play();
    // });
    //move page down to after slider
    $(".afterSlider").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('.icon-services').offset().top - 55
        },
            'slow');
    });

}); //ready