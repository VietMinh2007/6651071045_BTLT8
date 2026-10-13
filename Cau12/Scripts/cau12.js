$(document).ready(function () {

    // Hiện textbox khi chọn "Yes"; ngược lại ẩn textbox và hiện link "Apply For ..."
    function toggleCard($checkbox, animate) {
        var $card = $checkbox.closest('.checkbox-card');
        var $box = $card.find('.passport-box');
        var $input = $box.find('input');
        var $apply = $card.find('.apply-box');
        var speed = 0;

        if (animate) {
            speed = 200;
        }

        if ($checkbox.is(':checked')) {
            $apply.hide();
            $box.slideDown(speed);
            $input.focus();
        } else {
            $box.slideUp(speed);
            $input.val('');
            $apply.show();
        }
    }

    // Khi người dùng click chọn / bỏ chọn "Yes"
    $('.checkme').on('change', function () {
        toggleCard($(this), true);
    });

    // Trạng thái ban đầu khi tải trang
    $('.checkme').each(function () {
        toggleCard($(this), false);
    });

    // Link "Apply For ..." trong bài mẫu có href="" -> chặn để trang không bị tải lại
    $('.apply-box a').on('click', function (e) {
        e.preventDefault();
    });

});
