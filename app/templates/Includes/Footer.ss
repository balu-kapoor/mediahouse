<!-- BEGIN: LAYOUT/FOOTERS/FOOTER-7 -->
<a name="footer"></a>
<footer class="c-layout-footer c-layout-footer-7">
    <div class="c-postfooter c-bg-dark-2">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 c-col">
                    <p class="c-copyright c-font-grey c-font-lowercase">&copy; $Year $SiteConfig.Title
                        <span class="c-font-grey-3">All Rights Reserved.</span>
                        <% loop $Menu(1) %>
                        <% if $ClassName.ShortName == 'Page' && $URLSegment != 'get-started' || $ClassName.ShortName == 'HomePage' %>
                            <a href="$Link">$MenuTitle</a> <% if not $last %> / <% end_if %> 
                        <% end_if %>
                        <% end_loop %>
                    </p>
                </div>
                <div class="col-md-4 col-sm-6 c-col">

                    <div class="socicon">
                        <% with $SiteConfig %>
                        <a href="$FacebookLink"
                            class="socicon-btn socicon-btn-circle socicon-solid c-font-dark-1 c-theme-on-hover"
                            data-original-title="Facebook" data-container="body" target="_blank"><i
                                class="icon-social-facebook"></i></a>
                        <a href="$TwitterLink"
                            class="socicon-btn socicon-btn-circle socicon-solid c-font-dark-1 c-theme-on-hover"
                            data-original-title="Twitter" data-container="body" target="_blank"><i class="icon-social-twitter"></i></a>
                        <a href="$LinkeinLink"
                            class="socicon-btn socicon-btn-circle socicon-solid c-font-dark-1 c-theme-on-hover"
                            data-original-title="LinkedIn" data-container="body" target="_blank"><i
                                class="icon-social-linkedin"></i></a>
                        <% end_with %>
                    </div>

                </div>
            </div>
        </div>
    </div>
</footer>
<!-- END: LAYOUT/FOOTERS/FOOTER-7 -->