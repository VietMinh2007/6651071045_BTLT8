// =====================================================================
// app.js - Ứng dụng Vue 3 (CDN) cho shop phụ kiện điện thoại Tech Gear
// Vue được nhúng TRƯỚC file này nên có thể gọi Vue.createApp().
//
// GHI CHÚ SO SÁNH VỚI VANILLA JS:
// Nếu dùng Vanilla JS, mỗi lần thêm/xoá giỏ hàng phải tự querySelector
// + cập nhật DOM thủ công (đổi số ở header, dựng lại danh sách, tính lại
// tổng tiền...). Vue tự động làm điều này nhờ reactivity: ta chỉ thay đổi
// dữ liệu (cart), giao diện tự cập nhật theo ("UI = function của data").
// =====================================================================

// Ảnh dự phòng (SVG) khi file ảnh trong thư mục images/ chưa được chèn
const ANH_DU_PHONG = (ten) => {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">' +
    '<rect width="100%" height="100%" fill="#e8eef7"/>' +
    '<text x="50%" y="46%" text-anchor="middle" font-family="Arial" font-size="40" fill="#94a3b8">&#128247;</text>' +
    '<text x="50%" y="62%" text-anchor="middle" font-family="Arial" font-size="15" fill="#64748b">' +
    ten.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</text></svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
};

const app = Vue.createApp({
  // data(): dữ liệu reactive của ứng dụng
  data() {
    const products = [
      { id: 1, ten: 'Ốp lưng iPhone 15 Pro Max', gia: 250000, anh: '../images/anh1.png',
        moTa: 'Silicone MagSafe, chống sốc, viền camera nổi.' },
      { id: 2, ten: 'Ốp lưng Samsung Galaxy S24 Ultra', gia: 220000, anh: '../images/anh2.png',
        moTa: 'Nhựa trong suốt chống ố vàng, chống va đập.' },
      { id: 3, ten: 'Đế sạc không dây Anker 15W', gia: 450000, anh: '../images/anh3.png',
        moTa: 'Sạc nhanh Qi 15W, tương thích iPhone & Android.' },
      { id: 4, ten: 'Tai nghe Apple AirPods Pro 2', gia: 5490000, anh: '../images/anh4.png',
        moTa: 'Chống ồn chủ động, cổng sạc USB-C.' },
      { id: 5, ten: 'Tai nghe Samsung Galaxy Buds2 Pro', gia: 3290000, anh: '../images/anh5.png',
        moTa: 'Âm thanh Hi-Fi 24-bit, chống nước IPX7.' },
      { id: 6, ten: 'Củ sạc nhanh Anker Nano 30W', gia: 390000, anh: '../images/anh6.png',
        moTa: 'Nhỏ gọn, 1 cổng USB-C, công nghệ PD 3.0.' },
      { id: 7, ten: 'Cáp USB-C to Lightning Baseus 1m', gia: 180000, anh: '../images/anh7.png',
        moTa: 'Dây dù bện chống đứt, sạc nhanh 20W.' },
      { id: 8, ten: 'Pin dự phòng Xiaomi 20000mAh', gia: 650000, anh: '../images/anh8.png',
        moTa: 'Sạc nhanh 22.5W, 2 cổng ra, 1 cổng vào.' }
    ];

    return {
      tuKhoa: '', // liên kết 2 chiều với ô tìm kiếm (v-model)
      cart: [products[0], products[3], products[6]],
      // Danh sách sản phẩm (>= 8). Tự chèn ảnh: đặt file đúng tên vào thư mục images/
      products
    };
  },

  // computed: giá trị tính toán, tự cập nhật khi dữ liệu nguồn thay đổi
  computed: {
    // Số lượng sản phẩm trong giỏ - hiển thị ở header bằng {{ cartCount }}
    cartCount() {
      return this.cart.length;
    },
    // Tổng tiền của giỏ hàng = cộng giá của mọi phần tử trong cart
    tongTien() {
      return this.cart.reduce((tong, sp) => tong + sp.gia, 0);
    },
    // Lọc sản phẩm theo từ khoá (không phân biệt hoa thường) - render thay cho toàn bộ products
    danhSachLoc() {
      const kw = this.tuKhoa.trim().toLowerCase();
      if (!kw) return this.products;
      return this.products.filter(sp =>
        sp.ten.toLowerCase().includes(kw) || sp.moTa.toLowerCase().includes(kw)
      );
    }
  },

  methods: {
    // Thêm 1 sản phẩm vào mảng cart. Chỉ cần push dữ liệu,
    // Vue tự cập nhật số lượng ở header, danh sách và tổng tiền ở aside.
    themVaoGio(sanPham) {
      this.cart.push(sanPham);
    },
    // Xoá sản phẩm tại vị trí index khỏi giỏ hàng; UI tự cập nhật.
    xoaKhoiGio(index) {
      this.cart.splice(index, 1);
    },
    // Định dạng số thành tiền Việt Nam, ví dụ 250000 -> "250.000 VND"
    dinhDangGia(so) {
      return so.toLocaleString('vi-VN') + ' VND';
    },
    // Khi ảnh sản phẩm chưa có/ lỗi, thay bằng ảnh dự phòng (tránh icon ảnh vỡ)
    anhLoi(event, ten) {
      event.target.onerror = null;
      event.target.src = ANH_DU_PHONG(ten);
    }
  }
});

// Gắn ứng dụng vào <div id="app"> trong index.html
app.mount('#app');
