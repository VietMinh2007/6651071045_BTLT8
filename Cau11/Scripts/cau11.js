$(document).ready(function () {

    $('#fileupload').on('change', function () {
        var file = this.files[0];
        var $filename = $('#filename');
        var $fileinfo = $('#fileinfo');

        // Người dùng bấm Cancel -> trả về trạng thái ban đầu
        if (!file) {
            $filename.text('Ex:sample.jpg');
            $filename.removeClass('has-file');
            $fileinfo.empty();
            return;
        }

        var fullName = file.name;
        var dot = fullName.lastIndexOf('.');

        // dot <= 0: không có phần mở rộng (hoặc file ẩn như ".gitignore")
        var baseName = fullName;
        var ext = '';
        if (dot > 0) {
            baseName = fullName.substring(0, dot);
            ext = fullName.substring(dot + 1).toLowerCase();
        }

        $filename.text(fullName);
        $filename.addClass('has-file');

        $fileinfo.html('Tên file: <b id="baseName"></b><br>Phần mở rộng: <b id="extName"></b>');

        $('#baseName').text(baseName);

        if (ext !== '') {
            $('#extName').text('.' + ext);
        } else {
            $('#extName').text('(không có)');
        }
    });

});
