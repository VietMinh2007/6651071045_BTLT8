$(document).ready(function () {

    $('.accordion-title').on('click', function () {
        var $title = $(this);
        var $content = $title.next('.accordion-content');

        // Đóng tất cả các mục khác (mỗi lần chỉ mở một nội dung)
        var $otherTitles = $title.siblings('.accordion-title');
        var $otherContents = $otherTitles.next('.accordion-content');

        $otherTitles.removeClass('active');
        $otherContents.slideUp(250);

        // Mở mục vừa click (nếu đang mở thì đóng lại)
        $title.toggleClass('active');
        $content.slideToggle(250);
    });

});
