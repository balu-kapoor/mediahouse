<section class="c-layout-revo-slider c-layout-revo-slider-11">
    <!-- ONLY LOGO ON HEADER -->
    <div class="only-logo center customin customout">
        <img
            src="/images/logo.png"
            alt="experience engine"
            style="max-height:100px"
        />
    </div>
    <!-- /END ONLY LOGO ON HEADER -->
    <div class="tp-banner-container c-arrow-white" data-bullets-pos="center">
        <div
            class="tp-banner rev_slider"
            data-version="5.0"
            data-plugin-options='{"navigation": { "arrows": { "enable": false } }}'
        >
            <ul>
                <!--BEGIN: SLIDE #3 - VIDEO -->
                <li
                    data-transition="fade"
                    data-slotamount="1"
                    data-masterspeed="700"
                    data-delay="12000"
                    data-thumb=""
                >
                    <!-- THE MAIN IMAGE IN THE FIRST SLIDE -->
                    <img
                        alt=""
                        src="$BannerImage.URL"
                        data-bgposition="center center"
                        data-bgfit="cover"
                        data-bgrepeat="no-repeat"
                        class="visible-xs"
                    />
                    <div
                        class="rs-background-video-layer"
                        data-videoloop="loop"
                        data-forcerewind="on"
                        data-volume="mute"
                        data-videowidth="100%"
                        data-videoheight="100%"
                        data-videomp4="$BannerVideo.URL"
                        data-videowebm="/videos/Working-Space.webm"
                        data-videoogv="/videos/Working-Space.ogv"
                        data-videopreload="preload"
                        data-forceCover="1"
                        data-aspectratio="16:9"
                        data-autoplay="true"
                        data-autoplayonlyfirsttime="false"
                        data-nextslideatend="false"
                    ></div>

                    <div
                        style="display:flex;flex-direction: column;"
                        class="tp-caption tp-resizeme customin customout"
                        data-x="center"
                        data-y="center"
                        data-hoffset=""
                        data-voffset="-30"
                        data-speed="500"
                        data-start="1000"
                        data-transform_idle="o:1;"
                        data-transform_in="rX:0.5;scaleX:0.75;scaleY:0.75;o:0;s:500;e:Back.easeInOut;"
                        data-transform_out="rX:0.5;scaleX:0.75;scaleY:0.75;o:0;s:600;e:Back.easeInOut;"
                        data-splitin="none"
                        data-splitout="none"
                        data-elementdelay="0.1"
                        data-endelementdelay="0.1"
                        data-endspeed="600"
                    >
                        <h3
                            class="c-main-title c-font-48 c-font-bold c-font-center c-font-uppercase c-font-white c-block c-main-pink-title"
                        >
                            $BannerTitle
                        </h3>
                    </div>

                    <div
                        class="tp-caption tp-resizeme lft"
                        data-x="center"
                        data-y="center"
                        data-voffset="130"
                        data-speed="900"
                        data-start="1200"
                        data-transform_idle="o:1;"
                        data-transform_in="x:100;y:100;rX:120;scaleX:0.75;scaleY:0.75;o:0;s:900;e:Back.easeInOut;"
                        data-transform_out="x:100;y:100;rX:120;scaleX:0.75;scaleY:0.75;o:0;s:900;e:Back.easeInOut;"
                    >
                        <h4
                            class="c-main-title c-font-48 c-font-bold c-font-center c-font-white c-block"
                        >
                            $BannerSubTitle
                        </h4>
                        <div class="scroll-wrap">
                            <a id="scroll" href="#"></a>
                        </div>
                    </div>
                </li>
                <!--END -->
            </ul>
        </div>
    </div>
</section>
<!-- END: LAYOUT/SLIDERS/REVO-SLIDER-11 -->

<!-- ========================
	ICONS
============================= -->
<!-- strips -->
<% loop $Strips %> $me <% end_loop %>
