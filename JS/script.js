document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.button');
    const boxes = document.querySelector('.boxes');
    boxes.style.borderColor = 'transparent';
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const color = this.getAttribute('border-color');
        boxes.style.borderColor = color;
        setTimeout(function() {
            boxes.style.borderColor = color;
          }, 1000);
      });
    });
  });
