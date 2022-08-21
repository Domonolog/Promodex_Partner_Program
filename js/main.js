const element = document.getElementById('menu-open');

element.addEventListener('click', function() {
    this.classList.toggle('active');
});