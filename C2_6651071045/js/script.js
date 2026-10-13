// Toggle menu di động: Tailwind không có sẵn hành vi JS nên cần tự viết.
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu(forceClose = false) {
  // Đổi qua lại hidden <-> flex để đóng/mở menu
  const open = !forceClose && mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', !open);
  mobileMenu.classList.toggle('flex', open);
  menuBtn.setAttribute('aria-expanded', open);
}

menuBtn.addEventListener('click', () => toggleMenu());
// Bấm vào một mục menu thì tự đóng menu
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(true)));
// Phóng to màn hình lên desktop thì reset menu mobile
window.addEventListener('resize', () => { if (window.innerWidth >= 768) toggleMenu(true); });
