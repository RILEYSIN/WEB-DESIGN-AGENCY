document.addEventListener("DOMContentLoaded", () => {
  // 1. Portfolio Slider Logic
  const items = document.querySelectorAll(".portfolio-item");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  let currentIndex = 0;

  if (items.length > 0) {
    function showSlide(index) {
      items.forEach((item) => {
        item.classList.remove("active");
      });
      items[index].classList.add("active");
    }

    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
    });

    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(currentIndex);
    });
  }

  // 2. Hamburger Mobile Menu Logic
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // Hamburger Animation to X
      const spans = hamburger.querySelectorAll("span");
      if (navLinks.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });
  }

  // 3. Close menu when clicking any nav link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      // Reset hamburger spans
      const spans = hamburger.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    });
  });
});
