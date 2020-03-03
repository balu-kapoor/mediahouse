<% require css('silverstripe/blog: client/dist/styles/main.css') %>
<% include PostBanner %>
<div class="blog-entry content-container <% if $SideBarView %>unit size3of4<% end_if %>">
	<article>		
		<div class="content">$Content</div>

		<% include SilverStripe\\Blog\\EntryMeta %>
	</article>

	$Form
	$CommentsForm
</div>

<% include SilverStripe\\Blog\\BlogSideBar %>
