$(document).ready(function () {

    function applyTheme(isOn) {
        var $body = $('body');
        var $imgOn = $('#img-on');
        var $imgOff = $('#img-off');
        var $label = $('#themeLabel');

        if (isOn) {
            // ON -> nền sáng
            $body.removeClass('dark');
            $body.addClass('light');
            $imgOff.removeClass('fadeEffect');
            $imgOn.addClass('fadeEffect');
            $label.text('Theme sáng');
        } else {
            // OFF -> nền tối
            $body.removeClass('light');
            $body.addClass('dark');
            $imgOn.removeClass('fadeEffect');
            $imgOff.addClass('fadeEffect');
            $label.text('Theme tối');
        }
    }

    $('#myonoffswitch').on('change', function () {
        var isOn = $(this).is(':checked');
        applyTheme(isOn);
    });

    // Trạng thái ban đầu theo nút (mặc định đang On)
    var isOnAtStart = $('#myonoffswitch').is(':checked');
    applyTheme(isOnAtStart);

});
