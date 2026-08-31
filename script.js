

console.log("Mental Health");

const animatedElements = document.querySelectorAll(
    ".section, .quote-section, .instagram-section"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach((element) => {

    observer.observe(element);

});
