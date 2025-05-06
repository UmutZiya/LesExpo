/*=============== Navbar js =============================== */
document.addEventListener('DOMContentLoaded', () => {
  const menuToggleButtons = document.querySelectorAll('.nav-toggle-button'); // Menüyü açan/kapatan tüm butonlar/linkler
  const closeMenuButton = document.querySelector('.close-menu-btn');
  const fullscreenMenu = document.querySelector('.fullscreen-menu');
  const body = document.body;
  // Menü içindeki başlıklar (bunlara tıklanınca da kapanması için) - İsteğe bağlı
  const menuTitleLinks = document.querySelectorAll('.fullscreen-menu .menu-column h3');

  // Menüyü Açma Fonksiyonu
  const openMenu = () => {
      if (!fullscreenMenu.classList.contains('active')) {
          fullscreenMenu.classList.add('active');
          body.classList.add('menu-open'); // Scroll engelleme için body'e class ekle
      }
  };

  // Menüyü Kapatma Fonksiyonu
  const closeMenu = () => {
      if (fullscreenMenu.classList.contains('active')) {
          fullscreenMenu.classList.remove('active');
          body.classList.remove('menu-open'); // Scroll engellemeyi kaldır
      }
  };

  // Menüyü Aç/Kapat Butonlarına Tıklama Olayı
  menuToggleButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault(); // Linklerin (#) sayfayı yukarı atmasını engelle

          // Eğer tıklanan buton mobil toggle ise veya menü kapalıysa, menünün durumunu değiştir.
          // Eğer menü zaten açıksa ve tıklanan normal bir menü linkiyse, sadece kapat.
          if (button.classList.contains('mobile-menu-toggle')) {
               if (fullscreenMenu.classList.contains('active')) {
                  closeMenu();
               } else {
                  openMenu();
               }
          } else if (button.closest('.fullscreen-menu') && fullscreenMenu.classList.contains('active')){
               // Eğer açık menü içindeki bir başlığa tıklandıysa kapat
               closeMenu();
          }
          else {
              // Diğer tüm durumlarda (ana navbardaki linkler, arama ikonu) menüyü aç
              openMenu();
          }
      });
  });

  // Kapatma (X) Butonuna Tıklama Olayı
  if (closeMenuButton) {
      closeMenuButton.addEventListener('click', () => {
          closeMenu();
      });
  }

  // İsteğe Bağlı: Esc tuşu ile menüyü kapatma
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && fullscreenMenu.classList.contains('active')) {
          closeMenu();
      }
  });
});

/*============= Card-slider 2 JS ================= */
document.addEventListener('DOMContentLoaded', function() {
  const cardsData = {
    gundem: [
      { image: "./images/card-2-slider-1.png", date: "2024-05-01", tag: "Gündem", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
      { image: "./images/card-2-slider-2.png", date: "2024-05-02", tag: "Gündem", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
      { image: "./images/card-2-slider-6.png", date: "2024-05-02", tag: "Gündem", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
      { image: "./images/card-2-slider-4.png", date: "2024-05-02", tag: "Gündem", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
      { image: "./images/card-2-slider-5.png", date: "2024-05-02", tag: "Gündem", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
      { image: "./images/card-2-slider-6.png", date: "2024-05-02", tag: "Gündem", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
      { image: "./images/card-2-slider-7.png", date: "2024-05-02", tag: "Gündem", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
    ],
    blog: [
      { image: "./images/card-2-slider-8.png", date: "2024-03-07", tag: "Blog", title: "Tekstil sektörünün kalbi Bursa Textile Show Fuarı'nda attı.", link: "blog-single-page.html" },
    ],
    duyurular: [
      { image: "./images/card-2-slider-10.jpg", date: "2024-05-04", tag: "Duyuru", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
      { image: "./images/card-2-slider-2.png", date: "2024-05-04", tag: "Duyuru", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
    ],
    haberler: [
      { image: "./images/card-2-slider-4.png", date: "2024-05-05", tag: "Haber", title: "Güneş Sektörünün Markalarını Dünya Liderleriyle Buluşturacak 17. SolarEX İstanbul İçin Geri Sayım Başladı!", link: "blog-single-page.html" },
    ]
  };

  let swiperInstance = null;
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const cardTemplate = document.getElementById('card-template-2');
  const categoryTabs = document.querySelectorAll('.category-tab-2');
  const cardSlider = document.querySelector('.card-slider-2');

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return {
      year: date.getFullYear(),
      day: date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })
    };
  }

  function createCards(category) {
    const fragment = document.createDocumentFragment();
    cardsData[category].forEach(data => {
      const clone = cardTemplate.content.cloneNode(true);
      const formattedDate = formatDate(data.date);
      
      clone.querySelector('img').src = data.image;
      clone.querySelector('.date-year-2').textContent = formattedDate.year;
      clone.querySelector('.date-day-2').textContent = formattedDate.day;
      clone.querySelector('.card-tag-2').textContent = data.tag;
      clone.querySelector('.card-title-2').textContent = data.title;
      clone.querySelector('.card-discover-link-2').href = data.link;
      
      fragment.appendChild(clone);
    });
    return fragment;
  }

  function initSwiper() {
    swiperInstance = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled',
      },
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      mousewheel: {
        forceToAxis: true,
      },
      touchEventsTarget: 'container',
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }
    });
  }

  function handleCategoryClick(e) {
    const category = e.target.dataset.category;
    
    categoryTabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');
    
    // Kartları gizle
    cardSlider.style.display = 'none';
    
    // Yeni kartları oluştur
    const newCards = createCards(category);
    
    // Eski kartları temizle ve yenilerini ekle
    swiperWrapper.innerHTML = '';
    swiperWrapper.appendChild(newCards);
    
    // Apply translations to the newly added cards
    if (typeof i18n_applyTranslations === 'function') {
        i18n_applyTranslations(i18n_currentLang); // Re-apply translations to the whole page
    } else {
        console.error("Translation function (i18n_applyTranslations) not accessible.");
        // As a fallback, you might manually translate items within swiperWrapper if needed
    }
    
    // Swiper'ı güncelle
    if (swiperInstance) {
      swiperInstance.update();
      swiperInstance.slideTo(0, 0);
    } else {
      initSwiper(); // Initialize if it wasn't (should be initialized on load)
    }
    
    // Kartları göster
    requestAnimationFrame(() => {
      cardSlider.style.display = 'block';
    });
  }

  // Event Listeners
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', handleCategoryClick);
  });

  // Initial Load
  const initialCards = createCards('gundem');
  swiperWrapper.appendChild(initialCards);
  initSwiper();
});
/*====== index.html js end =============*/

/*====== iletisim.html js start ====*/
// Wrap in DOMContentLoaded if this script might run before the form exists
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // CAPTCHA doğrulama
            const captchaTextEl = document.getElementById('captchaText');
            const captchaInputEl = document.getElementById('captchaInput');
            if (!captchaTextEl || !captchaInputEl) {
                console.error("Captcha elements not found");
                alert('CAPTCHA elements not found!');
                return;
            }
            const captchaText = captchaTextEl.textContent;
            const captchaInput = captchaInputEl.value;


            if (captchaText !== captchaInput) {
                alert('CAPTCHA kodu hatalı!');
                return;
            }

            // Form verilerini al
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Normalde burada bir AJAX isteği ile form verileri sunucuya gönderilir
            console.log('Form gönderildi:', { name, phone, email, message });
            alert('Mesajınız başarıyla gönderildi!');

            // Formu sıfırla
            this.reset();
             // Optionally refresh captcha after successful submission
             refreshCaptcha();
        });
    }

     // CAPTCHA yenileme
     const refreshButton = document.querySelector('.captcha-refresh');
     if (refreshButton) {
         refreshButton.addEventListener('click', refreshCaptcha);
         // Initial captcha generation
         refreshCaptcha();
     }

     function refreshCaptcha() {
        const captchaTextEl = document.getElementById('captchaText');
        if(!captchaTextEl) return;
        // Rastgele CAPTCHA kodu oluştur
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let captcha = '';
        for (let i = 0; i < 5; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        captchaTextEl.textContent = captcha;
        // Clear previous input
        const captchaInputEl = document.getElementById('captchaInput');
        if(captchaInputEl) captchaInputEl.value = '';
     }
});


