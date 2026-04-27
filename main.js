window.addEventListener("DOMContentLoaded", () => {
  // Page Transition: Smooth navigation logic
  const overlay = document.querySelector(".page-transition");
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    // Only apply to internal links that aren't anchors or target="_blank"
    const isInternal = link.hostname === window.location.hostname || !link.hostname;
    const isAnchor = link.getAttribute("href")?.startsWith("#");
    const isBlank = link.getAttribute("target") === "_blank";
    
    if (isInternal && !isAnchor && !isBlank) {
      link.addEventListener("click", function(e) {
        const href = this.href;
        if (!href || href.includes("javascript:void(0)")) return;

        e.preventDefault();
        
        // Add exit animation to body
        document.body.classList.add("page-exit");
        
        // Show transition overlay
        if (overlay) {
          overlay.classList.add("active");
        }

        setTimeout(() => {
          window.location.href = href;
        }, 600);
      });
    }
  });

  // Handle browser back button (pageshow)
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      document.body.classList.remove("page-exit");
      if (overlay) {
        overlay.classList.remove("active");
      }
    }
  });

  // Navigation active state
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '#') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Handle browser back button (pageshow)
  window.addEventListener("pageshow", (event) => {
    if (event.persisted && pageTransition) {
      pageTransition.classList.remove("fade-out");
      pageTransition.classList.add("show");
    }
  });

  if (typeof gsap === "undefined") return;

  // Background animations
  const blobs = document.querySelectorAll(".bg-blob");
  blobs.forEach((blob, index) => {
    gsap.to(blob, {
      y: index % 2 === 0 ? -24 : 24,
      x: index === 1 ? -14 : 12,
      duration: 10 + index * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  // Entrance animations for content boxes
  gsap.from(".content-box", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  });

  // Hover effects for cards
  const cards = document.querySelectorAll(".image-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.3 });
    });
  });

  // Entrance animations for sections
  const sections = document.querySelectorAll("section");
  if (sections.length > 0) {
    gsap.from(sections, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".content-box",
        start: "top 80%",
      }
    });
  }
});
