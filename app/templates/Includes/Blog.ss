<% require css('silverstripe/blog: client/dist/styles/main.css') %>
<% include Banner %>
<div class="content-container archive-page <% if $SideBarView %>unit size3of4<% end_if %>">
    <article>
        <div class="content">$Content</div>
        <h1>
            <% if $ArchiveYear %>
            <%t SilverStripe\\Blog\\Model\\Blog.Archive 'Archive' %>:
            <% if $ArchiveDay %>
            $ArchiveDate.Nice
            <% else_if $ArchiveMonth %>
            $ArchiveDate.format('MMMM, y')
            <% else %>
            $ArchiveDate.format('y')
            <% end_if %>
            <% else_if $CurrentTag %>
            <%t SilverStripe\\Blog\\Model\\Blog.Tag 'Tag' %>: $CurrentTag.Title
            <% else_if $CurrentCategory %>
            <%t SilverStripe\\Blog\\Model\\Blog.Category 'Category' %>: $CurrentCategory.Title
            <% else %>
            $Title
            <% end_if %>
        </h1>
        <% if $PaginatedList.Exists %>
        <% loop $PaginatedList %>
        <% include Blog\\PostSummary %>
        <% end_loop %>
        <% else %>
        <p><%t SilverStripe\\Blog\\Model\\Blog.NoPosts 'There are no posts' %></p>
        <% end_if %>
    </article>

    $Form
    $CommentsForm

    <% with $PaginatedList %>
    <% include SilverStripe\\Blog\\Pagination %>
    <% end_with %>
</div>

<% include SilverStripe\\Blog\\BlogSideBar %>