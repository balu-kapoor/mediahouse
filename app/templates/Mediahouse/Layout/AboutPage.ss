<% include Banner %>
<% if $Content %>
<div class="c-content-box c-size-sm">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-push-2 wow  fadeInLeft animated center"
                style="visibility: visible; animation-name: fadeInLeft;">
                <p>$Content</p>
            </div>
        </div>      
    </div>
</div>
<% end_if %>
<!-- strips -->
<%  loop $Strips %>
$me
<% end_loop %>