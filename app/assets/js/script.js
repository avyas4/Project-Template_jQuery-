(function($) {
    "use strict";

    $(document).ready(function() {
        // Show window modal
        $("#myImg").click(function() {
            $('#myModal').addClass('show-modal');
        })
        // Hide window modal
        $('.close').click(function() {
            $('#myModal').removeClass('show-modal');
        })
    });
})(jQuery);