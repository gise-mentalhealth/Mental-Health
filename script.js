document.getElementById("year").textContent = new Date().getFullYear();

const animated = document.querySelectorAll(".section, .quote-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

animated.forEach((element) => observer.observe(element));
