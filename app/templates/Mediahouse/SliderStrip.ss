<div class="c-content-box c-size-md">
    <div class="container">
        <div class="row">
            <div class="col-md-7 wow animate fadeInLeft">
                <div class="c-content-media-2-slider" data-slider="owl">
                    <div class="owl-carousel owl-theme c-theme owl-single" data-single-item="true"
                        data-desktop-items="1" data-desktop-small-items="1" data-tablet-items="1" data-auto-play="6000">
                        <% loop $SliderImages %>
                        <div class="item">
                            <div class="c-content-media-2 c-bg-img-center"
                                style="background-image: url($SliderImage.URL); min-height: 360px;">
                            </div>
                        </div>
                        <% end_loop %>
                    </div>
                </div>

            </div>
            <div class="col-md-5 wow animate fadeInRight">
                <div class="c-content-testimonial-2-slider" data-slider="owl">
                    <div class="c-title c-font-uppercase c-theme-bg">$ButtonTitle</div>
                    <div class="owl-theme c-theme owl-single" data-single-item="true" data-desktop-items="1"
                        data-desktop-small-items="1" data-tablet-items="1" data-auto-play-speed="8000">
                        <div class="item">
                            <div class="c-content-testimonial-2">
                                <p class="c-position c-theme testimonials">$Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>