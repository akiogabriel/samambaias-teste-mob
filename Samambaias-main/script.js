let contador = 1;

setInterval( function(){

    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if(contador > 4){
        contador = 1;
    }
}, 2500);


document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar_toggle');
    const menu = document.querySelector('.navbar_menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});