document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navRight = document.getElementById('navRight');

    if (menuToggle && navRight) {
        menuToggle.addEventListener('click', () => {
            navRight.classList.toggle('active');
            menuToggle.classList.toggle('active');
            // Toggle FontAwesome icon between bars and times
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navRight.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navRight.contains(e.target) && navRight.classList.contains('active')) {
                navRight.classList.remove('active');
                menuToggle.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking a link
        const navLinks = navRight.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navRight.classList.remove('active');
                menuToggle.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Advanced Lazy Loading Implementation (Intersection Observer)
    const lazyImages = document.querySelectorAll("img[data-src]");
    if ("IntersectionObserver" in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.onload = () => img.classList.add("loaded");
                    img.removeAttribute("data-src");
                    lazyImageObserver.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => {
            lazyImageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
        });
    }

    // Image Swappers with Smooth Transition (Delayed until images are loaded)
    function setupImageSwapper(elementId, images, intervalDelay = 2000) {
        const imgEl = document.getElementById(elementId);
        if (!imgEl) return;

        let currentIndex = 0;
        imgEl.style.transition = "opacity 0.4s ease-in-out";

        // Preload first two images to ensure smooth start
        const preloadImgs = [];
        let loadedCount = 0;
        const toLoad = images.slice(0, 2); 

        toLoad.forEach(src => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === toLoad.length) {
                    startSwapping();
                }
            };
            preloadImgs.push(img);
        });

        // Fallback if load hangs
        setTimeout(() => { if (loadedCount < toLoad.length) startSwapping(); }, 3000);

        let started = false;
        function startSwapping() {
            if (started) return;
            started = true;
            setInterval(() => {
                imgEl.style.opacity = 0;
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % images.length;
                    imgEl.src = images[currentIndex];
                    imgEl.style.opacity = 1;
                }, 400);
            }, intervalDelay);
        }
    }

    // Initialize the swappers for different locations
    setupImageSwapper('hero-image', [
        "./assets/3dVis.webp",
        "./assets/3dVis2.webp",
        "./assets/3dVis3.webp"
    ], 3000);

    setupImageSwapper('hero-Image1', [
        "./img/expertise_card/constructionDocMain.webp",
        "./img/expertise_card/constructionDoc.webp",
    ], 2500);
    setupImageSwapper('hero-Image3', [
        "./img/interiorDesign/intDes14.webp",
        "./img/interiorDesign/intDes15.webp",
        "./img/interiorDesign/intDes16.webp",
        "./img/interiorDesign/intDes9.webp",
    ], 2000);

    // Carousel Logic for Signature Projects
    const initCarousel = () => {
        const track = document.getElementById('sliderTrack');
        const prevBtn = document.getElementById('slidePrev');
        const nextBtn = document.getElementById('slideNext');
        const dots = document.querySelectorAll('.dot-btn');
        if (!track) return;

        let currentIndex = 0;
        const totalSlides = dots.length || track.children.length;
        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            track.style.transition = 'transform 1s ease-in-out';
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            });
        }

        dots.forEach((dot, index) => {
            if (dot) {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                });
            }
        });

        // Auto slide
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }, 3500);
    };

    initCarousel();
});
