window.addEventListener("DOMContentLoaded", () => {
  // Navigation active state
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
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
