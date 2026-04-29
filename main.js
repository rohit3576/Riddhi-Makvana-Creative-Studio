window.addEventListener("DOMContentLoaded", () => {
    // Register GSAP Plugins (Keep only for specialized animations)
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    // --- MOBILE MENU LOGIC ---
    const hamburger = document.querySelector('.hamburger');
    const navLinksList = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navLinksList.classList.toggle('active');
        document.body.classList.toggle('menu-open', navLinksList.classList.contains('active'));
    };

    hamburger.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksList.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // --- SMOOTH SCROLL & NAV ACTIVE STATE ---
    const sections = document.querySelectorAll('section');
    const navObserverOptions = {
        root: null,
        threshold: 0.3,
        rootMargin: "-10% 0px -70% 0px"
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => navObserver.observe(section));

    // --- OPTIMIZED SCROLL REVEAL (IntersectionObserver) ---
    const revealElements = document.querySelectorAll('.gsap-reveal, .hero-left, .hero-right');
    const revealObserverOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                revealObserver.unobserve(entry.target); // Animate ONLY once
                window.setTimeout(() => {
                    entry.target.style.willChange = "auto";
                }, 650);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- PROJECT MODAL LOGIC ---
    const projects = {
        astris: `
            <div class="project-header">
                <h2>ASTRIS SEAT COVERS</h2>
                <div class="logo-box">
                    <img src="assets/ELEMENTS/CEAT/logo transparant.png" alt="CEAT" loading="lazy" decoding="async">
                </div>
            </div>
            
            <div class="brand-intro-section">
                <p>Conceptualized a brand extension for CEAT - ASTRIS, focused on sustainable and budget-friendly automotive accessories, including seat covers and steering covers.</p>
                <img src="assets/ELEMENTS/CEAT/ASTRIS.png" alt="ASTRIS SEAT COVERS" loading="lazy" decoding="async">
            </div>

            <div class="introducing-section">
                <h3 style="color: var(--accent-pink); margin-bottom: 20px;">INTRODUCING</h3>
                <div class="product-showcase">
                    <div class="product-item">
                        <div class="img-frame"><img src="assets/ELEMENTS/CEAT/SPORTS .jpg" alt="SPORTS" loading="lazy" decoding="async"></div>
                        <p>SPORTS</p>
                    </div>
                    <div class="product-item">
                        <div class="img-frame"><img src="assets/ELEMENTS/CEAT/PET PROOF.jpg" alt="PET PROOF" loading="lazy" decoding="async"></div>
                        <p>PET PROOF</p>
                    </div>
                    <div class="product-item">
                        <div class="img-frame"><img src="assets/ELEMENTS/CEAT/LUXURY.jpg" alt="LUXURY" loading="lazy" decoding="async"></div>
                        <p>LUXURY</p>
                    </div>
                </div>
            </div>

            <div class="marketing-strategy-card">
                <h3 style="color: var(--accent-pink); margin-bottom: 20px;">MARKETING STRATEGY</h3>
                <div class="media-grid">
                    <div class="media-item">
                        <img src="assets/ELEMENTS/CEAT/BILLBOARD.png" alt="Billboard" loading="lazy" decoding="async">
                        <p>Billboard</p>
                    </div>
                    <div class="media-item">
                        <img src="assets/ELEMENTS/CEAT/NEWPAPER.png" alt="Newspaper" loading="lazy" decoding="async">
                        <p>Newspaper</p>
                    </div>
                    <div class="media-item">
                        <img src="assets/ELEMENTS/CEAT/SOCIAL M.png" alt="Social Media" loading="lazy" decoding="async">
                        <p>Social Media</p>
                    </div>
                </div>
            </div>

            <a href="assets/pdfs/CEAT report.pdf" download class="download-btn">Download Case Study</a>
        `,

        sinx: `
            <h2>S!NX by SNITCH</h2>
            <p>Brand Strategy & Design for Gen Z urban youth streetwear.</p>
            
            <img src="assets/ELEMENTS/SNITCH/SINXfinal.svg" alt="S!NX Banner" style="background: white; padding: 20px;" loading="lazy" decoding="async">

            <div class="stp-grid">
                <div class="stp-col">
                    <h4>SEGMENTATION</h4>
                    <p>Gen Z (18-25), urban youth, streetwear-focused.</p>
                </div>
                <div class="stp-col">
                    <h4>TARGETING</h4>
                    <p>Niche focus on affordable luxury-inspired sneakers.</p>
                </div>
                <div class="stp-col">
                    <h4>POSITIONING</h4>
                    <p>Bold self-expression for urban youth.</p>
                </div>
            </div>

            <div class="product-showcase">
                <div class="product-item">
                    <div class="img-frame"><img src="assets/ELEMENTS/SNITCH/THE OG.png" alt="The Originals" loading="lazy" decoding="async"></div>
                    <p>THE ORIGINALS</p>
                </div>
                <div class="product-item">
                    <div class="img-frame"><img src="assets/ELEMENTS/SNITCH/GLOW.png" alt="Glow" loading="lazy" decoding="async"></div>
                    <p>GLOW</p>
                </div>
                <div class="product-item">
                    <div class="img-frame"><img src="assets/ELEMENTS/SNITCH/SWTICH.jpg" alt="Switch" loading="lazy" decoding="async"></div>
                    <p>SWITCH</p>
                </div>
            </div>

            <div class="imc-flow">
                <div class="imc-step"><h4>PRE-LAUNCH</h4><p>Teasers & Buzz</p></div>
                <div class="imc-arrow">→</div>
                <div class="imc-step"><h4>LAUNCH</h4><p>Influencers & Events</p></div>
                <div class="imc-arrow">→</div>
                <div class="imc-step"><h4>POST-LAUNCH</h4><p>Community Building</p></div>
            </div>

            <div class="tvc-block">
                <video autoplay muted loop playsinline preload="metadata">
                    <source src="assets/ELEMENTS/VIDEOS/S!NX TVC.mp4" type="video/mp4">
                </video>
                <div class="tvc-text-container">
                    <h3 class="tvc-title">TVC</h3>
                </div>
            </div>

            <a href="assets/pdfs/S!NX rports.pdf" download class="download-btn">Download Case Study</a>
        `,

        dyansadhna: `
            <h2>DYANSADHNA</h2>
            <p>Holistic child development brand nurturing mental and physical growth beyond academics.</p>
            
            <img src="assets/ELEMENTS/DYANSADHNA/PRIMARY_LOGO.png" alt="Primary Logo" style="max-width: 300px; display: block; margin: 0 auto;" loading="lazy" decoding="async">

            <div class="inner-section">
                <h3 style="color: var(--accent-pink); margin-bottom: 20px;">LOGO EXPLANATION</h3>
                <div class="media-grid">
                    <img src="assets/ELEMENTS/DYANSADHNA/LOGO EXPLANATION Primary logo.png" alt="Logo Expl 1" loading="lazy" decoding="async">
                    <img src="assets/ELEMENTS/DYANSADHNA/LOGO EXPLANATION Secondary logo.png" alt="Logo Expl 2" loading="lazy" decoding="async">
                </div>
            </div>

            <div class="inner-section">
                <h3 style="color: var(--accent-pink); margin-bottom: 20px;">STATIONARY & MOCKUPS</h3>
                <div class="media-grid">
                    <img src="assets/ELEMENTS/DYANSADHNA/CORPORATE STATIONARY letterhead mockup.png" alt="Letterhead" loading="lazy" decoding="async">
                    <img src="assets/ELEMENTS/DYANSADHNA/outdoor mockup.png" alt="Outdoor" loading="lazy" decoding="async">
                    <img src="assets/ELEMENTS/DYANSADHNA/TRANSIT.png" alt="Transit" loading="lazy" decoding="async">
                </div>
            </div>

            <div class="inner-section">
                <h3 style="color: var(--accent-pink); margin-bottom: 20px;">TVC STORYBOARD</h3>
                <div class="storyboard-grid">
                    <img src="assets/ELEMENTS/DYANSADHNA/TVC STORYBOARD/O1.png" alt="S1" loading="lazy" decoding="async">
                    <img src="assets/ELEMENTS/DYANSADHNA/TVC STORYBOARD/02.png" alt="S2" loading="lazy" decoding="async">
                    <img src="assets/ELEMENTS/DYANSADHNA/TVC STORYBOARD/03.png" alt="S3" loading="lazy" decoding="async">
                    <img src="assets/ELEMENTS/DYANSADHNA/TVC STORYBOARD/04.png" alt="S4" loading="lazy" decoding="async">
                    <img src="assets/ELEMENTS/DYANSADHNA/TVC STORYBOARD/05.png" alt="S5" loading="lazy" decoding="async">
                    <img src="assets/ELEMENTS/DYANSADHNA/TVC STORYBOARD/06.png" alt="S6" loading="lazy" decoding="async">
                </div>
            </div>

            <a href="assets/pdfs/dyansadhna report.pdf" download class="download-btn">Download Case Study</a>
        `,

        creatives: `
            <h2>CREATIVES</h2>
            <p>Social Media Design & Content Handling for various brands.</p>

            <div class="modal-creatives-grid">
                <div class="modal-creative-card">
                    <div class="modal-image-grid">
                        <img src="assets/ELEMENTS/CREATIVES/SINGLE P 1.jpg" alt="P1" loading="lazy" decoding="async">
                        <img src="assets/ELEMENTS/CREATIVES/SINGLE P 2'.jpg" alt="P2" loading="lazy" decoding="async">
                        <img src="assets/ELEMENTS/CREATIVES/SINGLE P3.jpg" alt="P3" loading="lazy" decoding="async">
                    </div>
                    <p>✦ SINGLE POSTS</p>
                </div>
                <div class="modal-creative-card">
                    <div class="modal-image-grid">
                        <img src="assets/ELEMENTS/CREATIVES/CAROUSEL 1.png" alt="C1" loading="lazy" decoding="async">
                        <img src="assets/ELEMENTS/CREATIVES/CAROUSEL 2.png" alt="C2" loading="lazy" decoding="async">
                        <img src="assets/ELEMENTS/CREATIVES/CAROUSEL 3.png" alt="C3" loading="lazy" decoding="async">
                    </div>
                    <p>◉ CAROUSELS</p>
                </div>
                <div class="modal-creative-card">
                    <div class="modal-image-grid">
                        <img src="assets/ELEMENTS/CREATIVES/FESTIVES1.jpg" alt="F1" loading="lazy" decoding="async">
                        <img src="assets/ELEMENTS/CREATIVES/FESTIVES 2.png" alt="F2" loading="lazy" decoding="async">
                        <img src="assets/ELEMENTS/CREATIVES/FESTIVES 3.png" alt="F3" loading="lazy" decoding="async">
                    </div>
                    <p>✧ FESTIVES</p>
                </div>
                <div class="modal-creative-card">
                    <div class="modal-image-grid">
                        <img src="assets/ELEMENTS/CREATIVES/FREELANCE 01 .png" alt="FR1" loading="lazy" decoding="async">
                        <img src="assets/ELEMENTS/CREATIVES/FREE LANCE 02.png" alt="FR2" loading="lazy" decoding="async">
                        <img src="assets/ELEMENTS/CREATIVES/FREELANCE03.png" alt="FR3" loading="lazy" decoding="async">
                    </div>
                    <p>⚡ FREELANCE</p>
                </div>
            </div>

            <div style="margin-top: 40px; text-align: center;">
                <a href="https://drive.google.com/drive/folders/1kkrs1YpMqX01pC5r7ZYWDZRnlYoEN-di?usp=share_link" target="_blank" class="download-btn">View Reels Studio</a>
            </div>
        `,

        digital_painting: `
            <h2>DIGITAL PAINTING</h2>
            <p>Freelance digital art and commissions.</p>
            
            <div class="media-grid">
                <div class="product-item">
                    <div class="img-frame"><img src="assets/ELEMENTS/DIGITAL PAINTING/FAMILY P.jpg" alt="Family" loading="lazy" decoding="async"></div>
                    <p>FAMILY PHOTO</p>
                </div>
                <div class="product-item">
                    <div class="img-frame"><img src="assets/ELEMENTS/DIGITAL PAINTING/HORSE P.png" alt="Horses" loading="lazy" decoding="async"></div>
                    <p>7 HORSES PAINTING</p>
                </div>
            </div>
        `
    };

    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = modal.querySelector(".close-btn");
    const modalOverlay = modal.querySelector(".modal-overlay");
    const openButtons = document.querySelectorAll(".open-project");
    let modalCloseTimer;

    openButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const projectKey = btn.dataset.project;
            if (projects[projectKey]) {
                clearTimeout(modalCloseTimer);
                btn.classList.add("is-pressing");
                modalBody.innerHTML = projects[projectKey];
                modal.querySelector(".modal-content").scrollTop = 0;
                modal.classList.remove("closing");
                modal.classList.add("visible");
                document.body.classList.add("modal-open");

                requestAnimationFrame(() => {
                    btn.classList.remove("is-pressing");
                    modal.classList.add("active");
                });
            }
        });
    });

    const closeModal = () => {
        if (!modal.classList.contains("visible") || modal.classList.contains("closing")) return;
        modal.classList.remove("active");
        modal.classList.add("closing");
        document.body.classList.remove("modal-open");

        modalCloseTimer = setTimeout(() => {
            modal.classList.remove("visible", "closing");
            modalBody.innerHTML = "";
        }, 460);
    };

    closeBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // --- OTHER SPECIALIZED ANIMATIONS ---
    if (typeof gsap !== "undefined") {
        // Circular progress indicators: set once to avoid scroll-triggered paint work.
        document.querySelectorAll('.progress-circle').forEach(circle => {
            const progress = circle.getAttribute('data-progress');
            circle.style.background = `conic-gradient(var(--accent-pink) ${progress * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`;
        });

        // Floating animations for decorative elements
        gsap.to('.decorative-star, .decorative-triangle', {
            y: 15,
            rotation: 10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});
