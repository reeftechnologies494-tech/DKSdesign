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
    const images = [
      "../assets/3dVis.jpeg",
      "../assets/3dVis2.jpg", 
      "../assets/3dvVis3.jpg"
    ];

    let i = 0;
    const imgEl = document.getElementById('hero-image');

    // 2. The function that swaps the source
    function swap() {
      i = (i + 1) % images.length; // Cycles: 0, 1, 2, 0, 1...
      imgEl.src = images[i];
    }

    // 3. Start the timer (2000ms = 2 seconds)
    setInterval(swap, 2000);
  }()
)
    document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "../assets/3dVis.jpeg",
    "../assets/3dVis2.jpeg",
    "../assets/3dVis3.jpeg" // fixed typo
  ];

  let i = 0;
  const imgEl = document.getElementById("hero-image");

  if (!imgEl) return; // safety check

  // set initial image
  imgEl.src = images[i];

  function swap() {
    i = (i + 1) % images.length;
    imgEl.src = images[i];
  }

  setInterval(swap, 2000);
});
(function () {
    const images = [
      "../img/expertise_card/constructionDocMain.png",
      "../img/expertise_card/constructionDoc.png",
    ];

    let i = 0;
    const imgEl = document.getElementById('hero-Image1');

    // 2. The function that swaps the source
    function swap() {
      i = (i + 1) % images.length; // Cycles: 0, 1, 2, 0, 1...
      imgEl.src = images[i];
    }

    // 3. Start the timer (2000ms = 2 seconds)
    setInterval(swap, 2000);
  }()
)
    document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "../assets/3dVis.jpeg",
    "../assets/3dVis2.jpeg",
    "../assets/3dVis3.jpeg" // fixed typo
  ];

  let i = 0;
  const imgEl = document.getElementById("hero-image");

  if (!imgEl) return; // safety check

  // set initial image
  imgEl.src = images[i];

  function swap() {
    i = (i + 1) % images.length;
    imgEl.src = images[i];
  }

  setInterval(swap, 2000);
});
(function () {
    const images = [
      "../img/expertise_card/shopDrawMain.png",
      "../img/expertise_card/shopDraw1.png",
      "../img/expertise_card/shopDraw2.png",
      "../img/expertise_card/shopDraw3.png",
    ];

    let i = 0;
    const imgEl = document.getElementById('hero-Image2');

    // 2. The function that swaps the source
    function swap() {
      i = (i + 1) % images.length; // Cycles: 0, 1, 2, 0, 1...
      imgEl.src = images[i];
    }

    // 3. Start the timer (2000ms = 2 seconds)
    setInterval(swap, 2000);
  }()
)
    document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "../assets/3dVis.jpeg",
    "../assets/3dVis2.jpeg",
    "../assets/3dVis3.jpeg" // fixed typo
  ];

  let i = 0;
  const imgEl = document.getElementById("hero-image");

  if (!imgEl) return; // safety check

  // set initial image
  imgEl.src = images[i];

  function swap() {
    i = (i + 1) % images.length;
    imgEl.src = images[i];
  }

  setInterval(swap, 2000);
});
