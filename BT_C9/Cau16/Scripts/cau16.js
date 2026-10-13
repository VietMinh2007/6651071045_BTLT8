$(document).ready(function () {

    // Datepicker (nếu tải được jQuery UI), định dạng dd/mm/yyyy
    if ($.fn.datepicker) {
        $('#datepicker').datepicker({
            dateFormat: 'dd/mm/yy',
            changeMonth: true,
            changeYear: true,
            yearRange: '1900:+0',
            maxDate: 0
        });
    }

    // Kiểm tra email: ten@domain.xx
    function isValidEmail(email) {
        var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;
        return pattern.test(email);
    }

    // Kiểm tra ngày dd/mm/yyyy (ngày có thật và không ở tương lai)
    function isValidDate(str) {
        var m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(str);
        if (!m) {
            return false;
        }

        var d = parseInt(m[1], 10);
        var mo = parseInt(m[2], 10);
        var y = parseInt(m[3], 10);
        var date = new Date(y, mo - 1, d);

        if (date.getFullYear() !== y) {
            return false;
        }
        if (date.getMonth() !== mo - 1) {
            return false;
        }
        if (date.getDate() !== d) {
            return false;
        }
        return date <= new Date();
    }

    function showError(msg) {
        $('#errorMsg').text(msg);
    }

    // ---- Add Row ----
    $('.add-row').on('click', function () {
        var name = $.trim($('#name').val());
        var email = $.trim($('#email').val());
        var birth = $.trim($('#datepicker').val());

        if (name === '') {
            showError('Vui lòng nhập Name.');
            $('#name').focus();
            return;
        }

        if (!isValidEmail(email)) {
            showError('Email không đúng định dạng (vd: abc@gmail.com).');
            $('#email').focus();
            return;
        }

        if (!isValidDate(birth)) {
            showError('Birthdate không hợp lệ. Nhập theo dạng dd/mm/yyyy và không lớn hơn ngày hiện tại.');
            $('#datepicker').focus();
            return;
        }

        showError('');

        // Tạo hàng bằng DOM + .text() để tránh chèn HTML từ dữ liệu người dùng
        var $tr = $('<tr>');
        var $tdCheck = $('<td>');
        var $tdName = $('<td>');
        var $tdEmail = $('<td>');
        var $tdBirth = $('<td>');
        var $checkbox = $('<input type="checkbox" name="record">');

        $tdCheck.append($checkbox);
        $tdName.text(name);
        $tdEmail.text(email);
        $tdBirth.text(birth);

        $tr.append($tdCheck);
        $tr.append($tdName);
        $tr.append($tdEmail);
        $tr.append($tdBirth);

        $('table tbody').append($tr);

        // Xóa dữ liệu trong form sau khi thêm
        $('#name').val('');
        $('#email').val('');
        $('#datepicker').val('');
        $('#name').focus();
    });

    // ---- Delete Row ----
    $('.delete-row').on('click', function () {
        var $checked = $('table tbody input[name="record"]:checked');

        if ($checked.length === 0) {
            showError('Hãy tích chọn ít nhất một hàng để xóa.');
            return;
        }

        showError('');
        var $rows = $checked.closest('tr');
        $rows.remove();
    });

});
