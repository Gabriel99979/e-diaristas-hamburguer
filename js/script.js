var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');

        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    })
}


var menu = document.getElementsByClassName('menu-mobile');
var u;

for (u = 0; u < menu.length; u++) {
    menu[u].addEventListener('click', function() {
        this.classList.toggle('active-menu');

        var buttom = document.querySelector('.btn-header-mobile')
        if (buttom.style.display === 'flex') {
            buttom.style.display = 'none';
        } else {
            buttom.style.display = 'flex';
        }
    })
}


window.addEventListener('DOMContentLoaded', () => {
    var buttom = document.querySelector('.btn-header-mobile')
    var closer = document.querySelector('.close')
    var hamburger = document.querySelector('.twf-bars')
    function verificarTamanhoTela() {
      if (window.innerWidth > 600) {
        buttom.style.display = 'none';
        closer.style.display = 'none';
        hamburger.style.display = 'inline-block';

        
      } 
    }
    verificarTamanhoTela();
  
    window.addEventListener('resize', verificarTamanhoTela);

});