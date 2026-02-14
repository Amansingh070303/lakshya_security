// Initialize AOS
AOS.init({
    once: true,
    offset: 100,
    duration: 800,
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    document.body.classList.toggle('overflow-hidden');
}

mobileMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// Trigger counter animation when section is in view (Simple Intersection Observer)
const obsOptions = {
    root: null,
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect(); // Only run once
        }
    });
}, obsOptions);

// Observe the first counter
if (counters.length > 0) {
    observer.observe(counters[0].closest('div'));
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        navbar.classList.remove('bg-white/90');
        navbar.classList.add('bg-white');
    } else {
        navbar.classList.remove('shadow-md');
        navbar.classList.add('bg-white/90');
        navbar.classList.remove('bg-white');
    }

});

const POPUP_INTERVAL = 20 * 1000; // 50 minutes

function showPopup() {
    document.getElementById("infoPopup").classList.remove("hidden");
    document.getElementById("infoPopup").classList.add("flex");
}

function closePopup() {
    document.getElementById("infoPopup").classList.add("hidden");
}

// First load check
if (document.getElementById("infoPopup")) {
    if (!localStorage.getItem("lastPopupTime")) {
        showPopup();
        localStorage.setItem("lastPopupTime", Date.now());
    } else {
        const lastTime = localStorage.getItem("lastPopupTime");
        if (Date.now() - lastTime > POPUP_INTERVAL) {
            showPopup();
            localStorage.setItem("lastPopupTime", Date.now());
        }
    }
}

// Repeat every 50 min
setInterval(() => {
    if (document.getElementById("infoPopup")) {
        showPopup();
        localStorage.setItem("lastPopupTime", Date.now());
    }
}, POPUP_INTERVAL);

// Initialize Swiper for Clients
const clientSwiper = new Swiper(".clientSwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            spaceBetween: 30,
        },
        1024: {
            spaceBetween: 40,
        },
    },
});


