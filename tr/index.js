 /* Gallery Section */

    document.addEventListener('DOMContentLoaded', function () {
      // Elementleri seç
      const galleryWrapper = document.getElementById('galleryWrapper');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      // Kaydırma miktarı - bir kart genişliği kadar
      const scrollAmount = 300; // Kart genişliği

      // İleri butonu tıklandığında
      nextBtn.addEventListener('click', function () {
        galleryWrapper.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });

      // Geri butonu tıklandığında
      prevBtn.addEventListener('click', function () {
        galleryWrapper.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      });
    });

    /*========================================================Gallery End====================================================================================================*/

    /* Countdown */
    const targetDate = new Date('2025-09-09T10:00:00');

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        document.querySelectorAll(".time-value").forEach(el => el.textContent = "00");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById("days").textContent = String(days).padStart(2, '0');
      document.getElementById("hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();







    /*  */
  