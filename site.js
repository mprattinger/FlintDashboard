$(document).ready(function(){

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
   });

    $('#sidebarCollapse').on('click', function(){

        $('#sidebar').toggleClass('active');
        $('.list-unstyled.collapse.show').toggleClass('show');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');

    });
});