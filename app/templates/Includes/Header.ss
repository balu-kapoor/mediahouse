    <!-- =========================
     HEADER   
============================== -->
    <header class="header" id="home">

        <!-- STICKY NAVIGATION -->
        <div class="navbar navbar-inverse bs-docs-nav navbar-fixed-top sticky-navigation">
            <div class="container">
                <div class="navbar-header">

                    <!-- LOGO ON STICKY NAV BAR -->
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#kane-navigation">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <a class="navbar-brand" href="$AbsoluteBaseURL"><img src="/images/logo.png" alt="$title"></a>

                </div>

                <!-- NAVIGATION LINKS -->
                <div class="navbar-collapse collapse" id="kane-navigation">
                    <ul class="nav navbar-nav navbar-right main-navigation">

                        <% loop $Menu(1) %>
                        <li class="$LinkingMode"><a href="$Link" title="Go to the $Title page">$MenuTitle</a></li>
                        <% end_loop %>
                    </ul>
                </div>
            </div> <!-- /END CONTAINER -->
        </div> <!-- /END STICKY NAVIGATION -->

    </header>
    <!-- /END HEADER -->