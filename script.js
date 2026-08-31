/* =================================
   AURORA - JAVASCRIPT
================================= */

// Mensaje en consola
console.log("Mental Health");

// Animación sencilla al aparecer las secciones

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {

    observer.observe(section);

});
