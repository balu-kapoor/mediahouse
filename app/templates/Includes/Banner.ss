<div id="banner"
    class="c-layout-breadcrumbs-1 c-bgimage c-subtitle c-fonts-uppercase c-fonts-bold c-bg-img-center c-bg-parallax"
    style="width: 100%; height: auto;"
    <% if $BannerVideo || $BannerImage %>data-vide-bg="mp4: <% if $BannerVideo %>$BannerVideo.URL<% else %>default.mp4<% end_if %>, webm: themes/ee-16/videos/Spacious.webm, ogv: themes/ee-16/videos/Spacious.ogv, poster: $BannerImage.URL"
    data-vide-options="posterType: jpg, loop: true, muted: false, position: 50% 75%" <% end_if %>>


    <div class="container">
        <div class="c-page-title c-pull-left">
            <h1 class="c-font-uppercase c-font-bold c-font-white">$BannerTitle</h1>
            <% if $BannerSubTitle %>
            <a href="index.html#"
                class="c-action-btn btn btn-lg c-btn-border-2x c-btn-square c-theme-btn c-btn-bold c-btn-uppercase afterSlider">$BannerSubTitle</a>
            <% end_if %>
            <div class="c-line-center"></div>
        </div>
    </div>
    <div class="overlay-after"></div>
</div>