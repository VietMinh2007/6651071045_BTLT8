$(document).ready(function () {

    $('.password-show').on('click', function () {
        var $icon = $(this);
        var $input = $icon.siblings('.input-control');

        if ($input.attr('type') === 'password') {
            // Đang ẩn -> hiện nguyên văn, đổi icon thành mắt gạch chéo
            $input.attr('type', 'text');
            $icon.removeClass('fa-eye');
            $icon.addClass('fa-eye-slash');
        } else {
            // Đang hiện -> ẩn lại
            $input.attr('type', 'password');
            $icon.removeClass('fa-eye-slash');
            $icon.addClass('fa-eye');
        }
    });

});
