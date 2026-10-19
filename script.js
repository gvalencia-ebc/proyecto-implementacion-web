//Pantalla de bienvenida / carga
document.addEventListener("DOMContentLoaded", () =>{
    const loadScreen = document.querySelector('.load-screen');
    const displayTime = 6000;
    
    setTimeout(() =>{
        loadScreen.classList.add('slide-out');
        setTimeout(() =>{
            loadScreen.remove();
        },800);
    }, displayTime);
});