document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.faq-button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const collapse = this.nextElementSibling;
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
        // Collapse all other sections
        document.querySelectorAll('.faq-collapse').forEach(collapse => {
          collapse.classList.remove('show');
        });
  
        // Toggle the clicked section
        if (!isExpanded) {
          collapse.classList.add('show');
        }
  
        // Update aria-expanded attribute
        buttons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
        this.setAttribute('aria-expanded', !isExpanded);
      });
    });
  });