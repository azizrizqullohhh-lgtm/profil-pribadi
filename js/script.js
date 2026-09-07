// script.js
// Interaksi kecil untuk website profil pribadi

document.addEventListener("DOMContentLoaded", function () {
  // Set tahun berjalan secara otomatis di footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Highlight menu navigasi sesuai section yang sedang dilihat
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-links a");

  function setActiveLink() {
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var bottom = top + section.offsetHeight;
      var id = section.getAttribute("id");
      var link = document.querySelector('.nav-links a[href="#' + id + '"]');

      if (link) {
        if (scrollPos >= top && scrollPos < bottom) {
          navLinks.forEach(function (l) { l.classList.remove("active"); });
          link.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
});
