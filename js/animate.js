const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the animation classes when the element comes into view
        entry.target.classList.add('slide-left', 'opacity');
      } else {
        // Remove the animation classes when the element goes out of view
        entry.target.classList.remove('slide-left', 'opacity');
      }
    });
  }, {
    threshold: 0.5, // Adjust the threshold value to your liking
    root: null,
    rootMargin: '0px'
  });
  
  // Get all the elements you want to observe
  const elementsToObserve = document.querySelectorAll('.animate-me');
  
  // Observe each element only when the page is scrolled
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });