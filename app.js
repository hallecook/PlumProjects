document.addEventListener('DOMContentLoaded', (event) => {
    const dropBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.getElementById('dropdownContent');
  
    dropBtn.onclick = function() {
      dropdownContent.classList.toggle('show');
    }
  
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        if (dropdownContent.classList.contains('show')) {
          dropdownContent.classList.remove('show');
        }
      }
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav'); // Adjust the selector as needed
    const fixNavPosition = () => {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '100%';
        nav.style.zIndex = '1000';
    };

    // Apply the fixed positioning as soon as the page is loaded
    fixNavPosition();

    // Re-apply the fixed positioning whenever the page is scrolled or resized
    window.addEventListener('scroll', fixNavPosition);
    window.addEventListener('resize', fixNavPosition);
});
