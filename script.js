function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Get all animated sections
const sections = document.querySelectorAll('.animated-section');

// Scroll handler
function handleScroll() {
  sections.forEach(section => {
    const children = section.querySelectorAll('.slide-left');
    if (isInViewport(section)) {
      children.forEach(child => child.classList.add('visible'));
    } else {
      children.forEach(child => child.classList.remove('visible'));
    }

     const son = section.querySelectorAll('.slide-right');
    if (isInViewport(section)) {
      son.forEach(child => child.classList.add('visible'));
    } else {
      son.forEach(child => child.classList.remove('visible'));
    }

  });
}

// Listen to scroll
window.addEventListener('scroll', handleScroll);

// Initial check
handleScroll();