//Pantalla de bienvenida / carga
document.addEventListener("DOMContentLoaded", () =>{
    const loadScreen = document.querySelector('.load-screen');
    const displayTime = 6000;       //Tiempo de "carga" de la pantalla
    
    setTimeout(() =>{
        loadScreen.classList.add('slide-out');  // slide-out es la animación 
        setTimeout(() =>{
            loadScreen.remove();
        },800);     //800 milisegundos para que desaparezca la pantalla
    }, displayTime);
});

// Contenedor Sugerencias
const suggestionCont = document.querySelector('.suggestions');

if (suggestionCont) {
    suggestionCont.addEventListener('mouseenter', () => {   //mouseenter detecta cuando el cursor entra al contendero
        
        // Obtenemos el tamaño de la pantalla 
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const boxWidth = suggestionCont.offsetWidth;
        const boxHeight = suggestionCont.offsetHeight;

        // Margen de seguridad para evitar que quede en las orillas de la pantalla. 
        const margin = 30;

        // Calculamos el espacio dentro de la pantalla 
        const maxX = windowWidth - boxWidth - margin;
        const maxY = windowHeight - boxHeight - margin;

        // Genera pisiciones aleatorias para el contenedor
        const randomX = Math.max(margin, Math.random() * maxX);
        const randomY = Math.max(margin, Math.random() * maxY);

        
        suggestionCont.style.position = 'fixed';        //usamos fixed para que flote a lo largo de la pantalla 
        suggestionCont.style.left = `${randomX}px`;
        suggestionCont.style.top = `${randomY}px`;
        suggestionCont.style.transform = 'none';        //reseteamos los transalte previos 
    });
}

//Contenedor principal
document.addEventListener("DOMContentLoaded", () => {
    const aboutMe = document.querySelector('.about-me');
    const aboutMeScreen = document.getElementById('aboutMe-Screen');

    if (aboutMe && aboutMeScreen) {
        const screenContent = aboutMeScreen.querySelector('.screen-content');

        aboutMe.addEventListener('click', () => {
            screenContent.innerHTML = `
            <div class = "aboutMe-container">
                <h2 class="aboutMe-title">// NOT AUTHORIZED</h2>
                <div>
                    <p><span class = "boldText">// NOMBRE DEL SUJETO: </span>GERARDO VALENCIA</p>
                    <p>Sujeto de 28 años. Presenta un cuadro de resistencia existencial severa. Se recomienda no hacer preguntas optimistas.</p>
                </div>
                <p><span class = "boldText">//   [ PATRONES DE COMPORTAMIENTO ]  //</span></p>
                <div>
                    <p>Su mecanismo de aislamiento es la necesidad imperiosa de estar a solas como método de supervivencia emocional; hiper-vigilancia social y un rechazo generalizado hacia la interacción humana innecesaria (Misantropía generalizada)</p>
                    <p>Diagnóstico de distimia e historial de prescripción farmacológica antidepresiva (Sertralina). Se observa baja tolerancia crónica a la frustración combinada con una profunda herida de injusticia no resuelta</p>
                    <p>Lucha cognitiva constante por hallar lógica y orden en un entorno caótico y carente de sentido. Canaliza sus frustraciones existenciales a través de la programación, la fotografía y los videojuegos.</p>
                    <p>Dependencia emocional segura pero asimétrica con gatos (seres independientes). Identificación profunda con la estructura, disciplina y estética de la cultura japonesa como refugio ante el caos occidental.</p>
                </div>
                <p><span class ="boldText">// AUTOPERCEPCIÓN DEL SUJETO: </span>"INTENTANDO SER OPTIMISTA EN UN MUNDO CON PANORAMA CATASTRÓFICO"</p>
            </div>
            `;

            aboutMeScreen.classList.add('active');
        });

        // Cerrar haciendo clic fuera del modal
        aboutMeScreen.addEventListener('click', (e) => {
            if (e.target === aboutMeScreen) {
                aboutMeScreen.classList.remove('active');
            }
        });
    }
});

// Contenedor DEV
document.addEventListener("DOMContentLoaded", () => {
    const dev = document.querySelector('.dev');
    const devScreen = document.getElementById('dev-Screen');

    if (dev && devScreen) {
        const screenContent = devScreen.querySelector('.screen-content');

        dev.addEventListener('click', () => {
            screenContent.innerHTML = `
            <div class = "devContainer">
            
            </div>
            `;

            devScreen.classList.add('active');
        });

        // Cerrar haciendo clic fuera del modal
        devScreen.addEventListener('click', (e) => {
            if (e.target === devScreen) {
                devScreen.classList.remove('active');
            }
        });
    }
});