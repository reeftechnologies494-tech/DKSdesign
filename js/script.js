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
});

        (function () {
            const track = document.getElementById('sliderTrack');
            const dots = document.querySelectorAll('.dot-btn');
            const btnPrev = document.getElementById('slidePrev');
            const btnNext = document.getElementById('slideNext');
            const viewport = document.querySelector('.slider-viewport');

            const total = dots.length;
            let current = 0;
            let autoTimer;

            /* ---- core move ---- */
            function goTo(idx) {
                current = (idx + total) % total;          // wrap-around safe
                track.style.transform = `translateX(-${current * 100}%)`;
                dots.forEach((d, i) =>
                    d.classList.toggle('active', i === current));
            }

            /* ---- controls ---- */
            btnPrev.addEventListener('click', () => { resetAuto(); goTo(current - 1); });
            btnNext.addEventListener('click', () => { resetAuto(); goTo(current + 1); });
            dots.forEach(d =>
                d.addEventListener('click', () => { resetAuto(); goTo(+d.dataset.index); }));

            /* ---- auto-play (pause on hover) ---- */
            function startAuto() {
                autoTimer = setInterval(() => goTo(current + 1), 5000);
            }
            function resetAuto() {
                clearInterval(autoTimer);
                startAuto();
            }
            viewport.addEventListener('mouseenter', () => clearInterval(autoTimer));
            viewport.addEventListener('mouseleave', startAuto);
            startAuto();

            /* ---- touch / swipe support ---- */
            let touchStartX = 0;
            viewport.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
            viewport.addEventListener('touchend', e => {
                const dx = e.changedTouches[0].clientX - touchStartX;
                if (Math.abs(dx) > 40) { resetAuto(); goTo(dx < 0 ? current + 1 : current - 1); }
            }, { passive: true });
        })();