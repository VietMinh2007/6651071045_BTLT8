$(document).ready(function () {

    // Hiện tab đầu tiên (li.active) khi tải trang
    var firstTarget = $('.tab li.active a').attr('href');
    $('.tab-item').hide();
    $(firstTarget).show();

    $('.tab li a').on('click', function (e) {
        e.preventDefault();

        var target = $(this).attr('href');

        // Đổi trạng thái active của tiêu đề tab
        $('.tab li').removeClass('active');
        $(this).parent().addClass('active');

        // Ẩn tất cả nội dung, hiện nội dung của tab được chọn
        $('.tab-item').hide();
        $(target).fadeIn(250);
    });

});
