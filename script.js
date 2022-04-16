window.onload = function() {
  
  const nav = document.querySelector('.navbar');
  
  function navbarScrolling() {
    window.onscroll = function() {
      nav.classList.toggle('active', this.scrollY > 0);
    }
  }
  
  function activeClass(target, classname) {
    const string = (typeof target == 'string') ? document.querySelectorAll(target) : target;
    string.forEach(str => {
      str.addEventListener('click', function() {
        string.forEach(str => str.classList.remove(classname));
        this.classList.add(classname);
      });
    });
  }
  
  function navbar() {
    const toggle = nav.querySelector('.toggle');
    toggle.addEventListener('click', function() {
      this.nextElementSibling.classList.toggle('active');
    });
  }
  
  navbarScrolling();
  activeClass('.navbar .list li', 'active');
  navbar();
  
}