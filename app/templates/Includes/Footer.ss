<!-- BEGIN: LAYOUT/FOOTERS/FOOTER-7 -->
<a name="footer"></a>
<footer class="c-layout-footer c-layout-footer-7">
    <div class="c-postfooter c-bg-dark-2">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 c-col">
                    <p class="c-copyright c-font-grey c-font-lowercase">&copy; $Year $SiteConfig.Title
                        <span class="c-font-grey-3">All Rights Reserved.</span> <a href="#">Privacy Policy</a> / <a
                            href="#">Terms & Conditions</a>
                    </p>
                </div>
                <div class="col-md-4 col-sm-6 c-col">

                    <div class="socicon">
                        <% with $SiteConfig %>
                        <a href="$FacebookLink"
                            class="socicon-btn socicon-btn-circle socicon-solid c-font-dark-1 c-theme-on-hover"
                            data-original-title="Facebook" data-container="body"><i
                                class="icon-social-facebook" target="_blank"></i></a>
                        <a href="$TwitterLink"
                            class="socicon-btn socicon-btn-circle socicon-solid c-font-dark-1 c-theme-on-hover"
                            data-original-title="Twitter" data-container="body"><i class="icon-social-twitter target="_blank""></i></a>
                        <a href="$LinkeinLink"
                            class="socicon-btn socicon-btn-circle socicon-solid c-font-dark-1 c-theme-on-hover"
                            data-original-title="LinkedIn" data-container="body"><i
                                class="icon-social-linkedin" target="_blank"></i></a>
                        <% end_with %>
                    </div>

                </div>
            </div>
        </div>
    </div>
</footer>
<!-- END: LAYOUT/FOOTERS/FOOTER-7 -->