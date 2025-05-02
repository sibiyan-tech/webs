function addToCart(bookName) {
    alert(bookName + " has been added to your cart!");
    // Here you could implement actual cart functionality, e.g., storing items in local storage or redirecting to a cart page.
}
// Add to your existing JS
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.category-header');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.8s ease-out';
        }
      });
    }, { threshold: 0.1 });
  
    headers.forEach(header => {
      header.style.opacity = '0';
      observer.observe(header);
    });
  });
  