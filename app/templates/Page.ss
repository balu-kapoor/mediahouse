<!DOCTYPE html>

<head>
    <base>
    <!--[if lte IE 6]></base><![endif]-->
    <title>$title - $SiteConfig.Title</title>
    $MetaTags
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">



    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
    <link rel="shortcut icon" href="/favicon.png" />
    <link rel="manifest" href="manifest.json">
    <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <!-- WEB FONTS -->
    <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,100italic,400,300italic' rel='stylesheet'
        type='text/css'>
    <link
        href='https://fonts.googleapis.com/css?family=Roboto+Condensed:300italic,400italic,700italic,400,300,700&amp;subset=all'
        rel='stylesheet' type='text/css'>

    <!--[if lt IE 9]>
                <script src="/js/html5shiv.js"></script>
                <script src="/js/respond.min.js"></script>
    <![endif]-->

    <% base_tag %>
</head>

<body class="HomePage $ClassName.ShortName page-1">

    <!-- =========================
       PRE LOADER       
  ============================== -->
    <div class="preloader">
        <div class="status">&nbsp;</div>
    </div>
    <% include Header %>
    <div class="c-layout-page">
        <% if $ClassName.ShortName == 'Blog' %>
        <% include Blog  %>
        <% else_if $ClassName.ShortName == 'BlogPost' %>
        <% include BlogPost %>
        <% else %>
        $Layout
        <% end_if %>
    </div>
    <% include Footer %>
</body>

</html>