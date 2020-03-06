<div class="post-summary col-md-6">
	<div class="post-image card-img-top">
		<div class="image-cover">
			<div class="img-thumb" style="background: url($FeaturedImage.URL);">
			</div>
			<h2 class="card-title">
				<a href="$Link"
					title="<%t SilverStripe\\Blog\\Model\\Blog.ReadMoreAbout "Read more about '{title}'..." title=$Title %>">
					<% if $MenuTitle %>$MenuTitle
					<% else %>$Title<% end_if %>
				</a>
			</h2>
		</div>
	</div>
	<div class="card-body">
		<div class="card-text">
			<% if $Summary %>
			$Summary
			<% else %>
			<p>$Excerpt</p>
			<% end_if %>
			<p>
		</div>
		<a class="c-action-btn btn btn-lg c-btn-border-2x c-btn-square c-theme-btn c-btn-bold c-btn-uppercase afterSlider"
			href="$Link">
			Read More
		</a>
	</div>

	<% include SilverStripe\\Blog\\EntryMeta %>
</div>