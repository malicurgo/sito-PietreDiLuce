// PIETRE DI LUCE — script condiviso

document.addEventListener('DOMContentLoaded', function () {

  /* Menu mobile */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-principale');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('aperto');
      toggle.classList.toggle('attivo');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('aperto');
        toggle.classList.remove('attivo');
      });
    });
  }

  /* Tab cartelle (foto / video) */
  var tabBtns = document.querySelectorAll('.tab-cartelle button');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-target');

      tabBtns.forEach(function (b) { b.classList.remove('attivo'); });
      btn.classList.add('attivo');

      document.querySelectorAll('.cartella-foto, .cartella-video').forEach(function (c) {
        c.classList.remove('attiva');
      });
      var el = document.getElementById(target);
      if (el) el.classList.add('attiva');
    });
  });

  /* Lightbox foto */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    var closeBtn = lightbox.querySelector('.lightbox-chiudi');

    document.querySelectorAll('.griglia-foto figure img, .galleria-thumb img, .galleria-principale img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.getAttribute('src');
        lightboxImg.alt = img.getAttribute('alt') || '';
        lightbox.classList.add('aperta');
      });
    });

    function chiudiLightbox() { lightbox.classList.remove('aperta'); }

    closeBtn.addEventListener('click', chiudiLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) chiudiLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') chiudiLightbox();
    });
  }

  /* Galleria principale scheda appartamento: click su miniatura cambia immagine grande */
  var immaginePrincipale = document.querySelector('.galleria-principale img');
  var miniature = document.querySelectorAll('.galleria-thumb img');
  if (immaginePrincipale && miniature.length) {
    miniature.forEach(function (thumb) {
      thumb.addEventListener('click', function (e) {
        immaginePrincipale.src = thumb.getAttribute('src');
      });
    });
  }

  /* Header: ombra dopo lo scroll */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(43,39,35,.08)' : 'none';
    });
  }
});
