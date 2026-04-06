document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  function openMenu() {
    mobileMenu.classList.remove('translate-x-full');
  }

  function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
  }

  mobileMenuBtn?.addEventListener('click', openMenu);
  mobileMenuClose?.addEventListener('click', closeMenu);
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-[#111111]/95', 'backdrop-blur-md', 'shadow-lg');
      header.classList.remove('bg-transparent', 'py-6');
      header.classList.add('py-4');
    } else {
      header.classList.remove('bg-[#111111]/95', 'backdrop-blur-md', 'shadow-lg', 'py-4');
      header.classList.add('bg-transparent', 'py-6');
    }
  });
});
