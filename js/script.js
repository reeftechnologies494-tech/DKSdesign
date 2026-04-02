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
            if(icon) {
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
                if(icon) {
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
                if(icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Image Swappers with Smooth Transition
    function setupImageSwapper(elementId, images, intervalDelay = 2000) {
        const imgEl = document.getElementById(elementId);
        if (!imgEl) return;

        let currentIndex = 0;
        
        // Add smooth transition for opacity
        imgEl.style.transition = "opacity 0.4s ease-in-out";

        function swap() {
            // fade out
            imgEl.style.opacity = 0;
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                imgEl.src = images[currentIndex];
                
                // fade in
                imgEl.style.opacity = 1;
            }, 400); // Wait for fade out to complete before swapping src
        }

        setInterval(swap, intervalDelay);
    }

    // Initialize the swappers for different locations
    setupImageSwapper('hero-image', [
        "../assets/3dVis.jpeg",
        "../assets/3dVis2.jpeg",
        "../assets/3dVis3.jpeg" 
    ], 3000); 

    setupImageSwapper('hero-Image1', [
        "../img/expertise_card/constructionDocMain.png",
        "../img/expertise_card/constructionDoc.png",
    ], 2500);

    setupImageSwapper('hero-Image2', [
        "../img/expertise_card/shopDrawMain.png",
        "../img/expertise_card/shopDraw1.png",
        "../img/expertise_card/shopDraw2.png",
        "../img/expertise_card/shopDraw3.png",
    ], 2800);

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
            // Calculate translation percentage based on the number of slides shown (usually 1, but depends on layout)
            // Assuming each slide is 100% / number of visible slides. We'll translate by 100% of a slide.
            // In the simplest case, track moves left by currentIndex * 100%. Wait, what is the css for slider?
            // Usually, track is display flex, slides are flex: 0 0 100% or similar. 
            // In index.html it uses transform: translateX(-X%) or similar. 
            // But we can check styling if needed, standard is often 100% of viewport width per slide or 100% container
            
            // Assuming slides are full width of the viewport/container:
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            track.style.transition = 'transform 0.5s ease-in-out';
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        };

        if(prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateCarousel();
            });
        }

        if(nextBtn) {
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
        }, 5000);
    };

    initCarousel();
});
