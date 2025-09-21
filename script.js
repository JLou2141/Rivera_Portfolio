//  Navbar logic
const navLinks = document.querySelectorAll("[data-nav-link]");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => {
        link.addEventListener("click", () => {
                navLinks.forEach(btn => btn.classList.remove("active"));
                sections.forEach(sec => sec.classList.remove("active"));

                const target = link.getAttribute("data-nav-link");
                link.classList.add("active");
                document.getElementById(target).classList.add("active");

                if (target === "about") {
                        document
                                .querySelector('.navbar-link[data-nav-link="about"]')
                                .classList.add("active");
                }
        });
});

//  Picture slides
function initSlideshow(container) {
        const slides = container.querySelectorAll(".slides img");
        const prevBtn = container.querySelector(".prev");
        const nextBtn = container.querySelector(".next");

        let index = 0;

        function showSlide(i) {
                slides.forEach(slide => slide.classList.remove("active"));
                slides[i].classList.add("active");
        }

        function nextSlide() {
                index = (index + 1) % slides.length;
                showSlide(index);
        }

        function prevSlide() {
                index = (index - 1 + slides.length) % slides.length;
                showSlide(index);
        }

        // auto-play every 3 seconds
        setInterval(nextSlide, 3000);

        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);

        showSlide(index);
}

//  Initialize all project slideshows
document.querySelectorAll(".project-slideshow").forEach(slideshow => {
        initSlideshow(slideshow);
});
