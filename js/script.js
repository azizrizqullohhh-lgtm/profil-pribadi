/**
 * script.js
 * Interaksi untuk website profil pribadi:
 *  1. Menampilkan tahun berjalan otomatis di footer
 *  2. Menandai menu navigasi sesuai section yang sedang dilihat
 *  3. Menu navigasi versi mobile (buka/tutup)
 *  4. Tombol "kembali ke atas" yang muncul saat halaman di-scroll
 */

document.addEventListener("DOMContentLoaded", function () {
  tampilkanTahunBerjalan();
  aktifkanMenuMobile();
  aktifkanPenandaMenu();
  aktifkanTombolKeAtas();
});

/** 1. Isi tahun berjalan pada elemen #year di footer. */
function tampilkanTahunBerjalan() {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/** 3. Buka/tutup menu navigasi pada layar kecil. */
function aktifkanMenuMobile() {
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    var terbuka = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", terbuka ? "true" : "false");
  });

  // Tutup menu setelah salah satu link diklik (khusus tampilan mobile)
  links.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/** 2. Tandai link navigasi sesuai posisi scroll saat ini. */
function aktifkanPenandaMenu() {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-links a");
  if (sections.length === 0 || navLinks.length === 0) return;

  function setActiveLink() {
    var scrollPos = window.scrollY + 140;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute("id");
      var link = document.querySelector('.nav-links a[href="#' + id + '"]');

      if (link && scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(function (l) {
          l.classList.remove("active");
        });
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
}

/** 4. Tampilkan tombol kembali ke atas setelah scroll cukup jauh. */
function aktifkanTombolKeAtas() {
  var tombol = document.getElementById("toTop");
  if (!tombol) return;

  function perbaruiTampilan() {
    if (window.scrollY > 400) {
      tombol.classList.add("show");
    } else {
      tombol.classList.remove("show");
    }
  }

  window.addEventListener("scroll", perbaruiTampilan);
  perbaruiTampilan();
}
