document.addEventListener("DOMContentLoaded", () => {
  // Navigation menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn?.querySelector("i");

  if (menuBtn && navLinks && menuBtnIcon) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
      // The 'scroll-behavior: smooth' in CSS handles the scrolling.
      // We just need to close the mobile menu if it's open.
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        menuBtnIcon?.setAttribute("class", "ri-menu-line");
      }
    });
  });

  // ScrollReveal animations
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption });
  ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".header__container form", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".feature__card", { duration: 1000, interval: 500 });
  ScrollReveal().reveal(".destination__card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".package__card", { ...scrollRevealOption, interval: 500 });

  // Swiper slider initialization
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // Booking modal logic
  const bookBtn = document.querySelector(".book-now-btn");
  const bookingModal = document.getElementById("booking-modal");
  const closeModal = document.querySelector(".close-btn");
  const form = document.getElementById("booking-form");

  if (bookBtn && bookingModal && closeModal && form) {
    bookBtn.addEventListener("click", (e) => {
      e.preventDefault();
      bookingModal.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
      bookingModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === bookingModal) {
        bookingModal.style.display = "none";
      }
    });

    form.addEventListener("submit", () => {
      setTimeout(() => {
        bookingModal.style.display = "none";
      }, 300);
    });
  }
});
