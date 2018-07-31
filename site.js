    $(document).ready(function () {

        $('[data-toggle="tooltip"]').tooltip();

        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            
        });

        $('#dismiss').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('#content').toggleClass('active');

            $('.menuText').toggleClass('hide-Menu-Text');
            if ($('.dismiss-arrow').hasClass('fa-arrow-left')) {
                //fa-arrow-left
                $('.dismiss-arrow').removeClass('fa-arrow-left');
                $('.dismiss-arrow').addClass('fa-arrow-right');
                
            }else{
                $('.dismiss-arrow').addClass('fa-arrow-left');
                $('.dismiss-arrow').removeClass('fa-arrow-right');
            }
        });

    });