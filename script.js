window.onscroll = function() {
    let header = document.querySelector('header');
    if (window.scrollY > 100) { 
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
};