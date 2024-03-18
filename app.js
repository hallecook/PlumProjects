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
  
  