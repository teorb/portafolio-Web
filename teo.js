window.addEventListener('DOMContentLoaded', () => {
    // Selecciona el icono del menú y el navbar
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
  
    // Selecciona todos los enlaces de navegación
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');
  
    // Función para cambiar las clases al hacer clic en el icono del menú
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };
  
    // Función para cerrar el menú al hacer clic en un enlace de navegación
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      });
    });
  
    // Función para verificar si un elemento está en la vista
    function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    }
  
    // Función para actualizar la clase 'active' en los enlaces de navegación
    function updateNavLinks() {
      sections.forEach((section, index) => {
        if (isElementInViewport(section)) {
          navLinks.forEach((link) => link.classList.remove('active'));
          navLinks[index].classList.add('active');
        }
      });
    }
  
    // Sticky header
    function toggleStickyHeader() {
      const header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);
    }
  
    // Activa las funciones cuando se desplaza o carga la página
    window.addEventListener('scroll', updateNavLinks);
    window.addEventListener('scroll', toggleStickyHeader);
    window.addEventListener('load', updateNavLinks);
    window.addEventListener('load', toggleStickyHeader);
  });
  