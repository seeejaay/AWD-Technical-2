document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.button');
  const boxes = document.querySelector('.boxes');
  boxes.style.borderColor = 'transparent';

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const color = this.getAttribute('border-color');
          openBox(boxes); 
          setTimeout(function () {
              boxes.style.borderColor = color;
              closeBox(boxes); 
          }, 500); 

      });
  });

  function closeBox(element) {
      element.style.transition = 'height 0.5s ease';
      setTimeout(() => {
          element.style.height = '500px';
      }, 50);
  }

  function openBox(element) {
      element.style.transition = 'height 0.5s ease';
      element.style.height = '0';
  }
});
