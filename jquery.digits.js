(function ($) {
    $.fn.checkDigits = function (options) {
        var defaults = {
            length: -1,
            remain: 0
        }
             
        var options =  $.extend(defaults, options);
        if (options.length < 0) options.length = 10000;
        $(this).keydown(function (e) {
            if (e.keyCode == 8 && options.remain > 0) {
                if ( $(this).val().length == options.remain ) {
                    e.preventDefault();
                    return;
                }
            }
            if (e.keyCode == 13 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 36 || e.keyCode == 35) return;
            if ( $(this).val().length >= options.length ) e.preventDefault();
            if ( !(e.keyCode >= 48 && e.keyCode <= 57) && !(e.keyCode >= 96 && e.keyCode <= 105) ) {
                e.preventDefault();
            }
        });
    };
}) (jQuery) ;
