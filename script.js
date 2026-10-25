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
                <h3 class="dev-title">// DEV</h3>
                <div>
                    <h4 class="dev-subtitle">// Lenguajes:</h4>
                    <p>Python</p>
                    <p>HTML5 / CSS3</p>
                    <p>JavaScript</p>
                </div>
                <div>
                    <h4 class="dev-subtitle">// Frameworks:</h4>
                    <p>Django / Django REST Framework</p>
                    <p>Bootstrap</p>
                </div>
                <div>
                    <h4 class="dev-subtitle">// Diseño y Sistemas UI/UX:</h4>
                    <p>Figma</p>
                </div>
                <div>
                    <h4 class="dev-subtitle">// Proyectos Actuales:</h4>
                    <div class="proyectosDev">
                        <div>
                            <a href ="https://elmundodelamortiguador.com.mx" target="_blank"><img class="proyectoDev" src="/img/containers/dev/logoEMA.jpg" alt="El Mundo del Amortiguador - Logo"></a>
                            <p class="proyectoDesc">Sitio web para formalizar la presencia en internet de un taller mecánico tradicional.</p>
                        </div>
                        <div>
                            <a><img class="proyectoDev" src="/img/containers/dev/logoShashin.jpg" alt="Shashin - Logo"></a>
                            <p>Sitio web personal enfocado en fotografía y un blog personal.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="dev-subtitle">// Cursos actuales:</h4>
                    <p class="devText">Fundamentos de Análisis de Datos CISCO Academy</p>
                </div>
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

// Contenedor GAMER
document.addEventListener("DOMContentLoaded", () => {
    const gaming = document.querySelector('.gaming');
    const gamingScreen = document.getElementById('gaming-Screen');

    if (gaming && gamingScreen) {
        const screenContent = gamingScreen.querySelector('.screen-content');

        gaming.addEventListener('click', () => {
            screenContent.innerHTML = `
            <div class = "gameContainer">
                <h3 class="gaming-title">// Gaming</h3>
                    <div class="fav-titles">
                        <h4 class="gaming-subtitle">//  Juegos Favoritos</h4>
                        <div class="fav-container">
                            <div class="fav">
                                <img class="game-img" src="/img/containers/gaming/battlefield.jpg" alt="Battlefield 6">
                                <p class="game-title">Battlefield 6</p>
                            </div>
                            <div class="fav">
                                <img class="game-img" src="/img/containers/gaming/halo.png" alt="Halo Master Chief Collection">
                                <p class="game-title">Halo Master Chief Collection</p>
                            </div>
                            <div class="fav">
                                <img class="game-img" src="/img/containers/gaming/hollow.jpg" alt="Hollow Knight">
                                <p class="game-title">Hollow Knight</p>
                            </div>
                            <div class="fav">
                                <img class="game-img" src="/img/containers/gaming/silksong.jpg" alt="Hollow Knight: Silksong">
                                <p class="game-title">Hollow Knight: Silksong</p>
                            </div>
                            <div class="fav">
                                <img class="game-img" src="/img/containers/gaming/rocket.png" alt="Rocket League">
                                <p class="game-title">Rocket League</p>
                            </div>
                        </div>
                    </div>
                        <div class="creators">
                                <h4 class="gaming-subtitle">// Creadores de Contenido Favoritos</h4>
                            <div class="creators-content">
                                <div class="creator">
                                    <a href="https://www.youtube.com/@JuggerWicho115" target="_blank"><img class ="creator-img" src="/img/containers/gaming/juggerwicho.jpg" alt="Juggerwicho - Logo"></a>
                                    <p class="game-title">Juggerwicho</p>
                                </div>
                                <div class="creator">
                                    <a href="https://www.youtube.com/@Teosgame" target="_blank"><img class ="creator-img" src="/img/containers/gaming/teogames.jpg" alt="Juggerwicho - Logo"></a>
                                    <p class="game-title">Teo</p>
                                </div>
                            </div>
                        </div>
            </div>

            `;

            gamingScreen.classList.add('active');
        });

        // Cerrar haciendo clic fuera del modal
        gamingScreen.addEventListener('click', (e) => {
            if (e.target === gamingScreen) {
                gamingScreen.classList.remove('active');
            }
        });
    }
});


// Contenedor photo
document.addEventListener("DOMContentLoaded", () => {
    const photo = document.querySelector('.photo');
    const photoScreen = document.getElementById('photo-Screen');

    if (photo && photoScreen) {
        const screenContent = photoScreen.querySelector('.screen-content');

        photo.addEventListener('click', () => {

            const misFotos = [
                "IMG_8877.jpg",
                "IMG_6947-Mejorado-NR.jpg",
                "DJI_0251-Editar.jpg",
                "DJI_0236.jpg",
                "DJI_0230-Editar.jpg",
                "DJI_0193.jpg",
                "IMG_7389-Editar.jpg",
                "IMG_7305-Editar.jpg",
                "IMG_5437-Editar.jpg",
                "IMG_5460-Editar.jpg",
                "IMG_5175-Editar.jpg",
                "IMG_5411-Editar.jpg",
                "IMG_5371-Editar.jpg",
                "IMG_2519-Editar.jpg",
                "IMG_2499.jpg",
                "IMG_2400.jpg",
                "IMG_2439.jpg",
                "IMG_2220.jpg",
                "IMG_9431.jpg",
                "IMG_9354-Editar.jpg",
                "IMG_9338-Editar.jpg",
                "IMG_9315-Editar.jpg",
                "IMG_9301-Editar.jpg",
                "IMG_9212-Mejorado-NR-Editar.jpg",
                "IMG_9203-Mejorado-NR-Editar.jpg",
                "IMG_7848.jpg",
                "IMG_7528.jpg",
                "IMG_7267-Editar.jpg",
                "IMG_7259-Editar.jpg",
                "IMG_1078-Editar.jpg",
                "IMG_1730.jpg",
                "IMG_4112-Editar-Editar-Editar-Editar.jpg",
                "IMG_9433.jpg",
                "IMG_0945.jpg",
                "IMG_0905.jpg",
                "IMG_0900.jpg",
                "IMG_0795-Editar.jpg",
                "IMG_0776.jpg",
                "Death-wish.jpg",
                "20230304_164314 (2).jpg",
                "20230326_204830.jpg",
                "IMG_0157.jpg",
                "IMG_0171.jpg",
                "IMG_0255.jpg",
                "IMG_0463.jpg",
                "IMG_0533.jpg",
                "IMG_0558.jpg",
                "IMG_0634.jpg",
                "IMG_0683.jpg",
                "IMG_0780.jpg",
                "IMG_0968.jpg",
                "IMG_1869.jpg",
                "IMG_3365.jpg",
                "IMG_3468.jpg",
                "IMG_3708.jpg",
                "IMG_3846.jpg",
                "IMG_3917.jpg",
                "IMG_4350-Mejorado-NR.jpg",
                "IMG_5540.jpg",
                "IMG_5546.jpg",
                "IMG_6798.jpg",
                "IMG_7265.jpg",
                "IMG_7299.jpg",
                "IMG_8031.jpg",
                "IMG_8509.jpg",
                "IMG_9262.jpg",
                "IMG_9491.jpg",
                "IMG_9524.jpg",
                "IMG_9680.jpg",
                "IMG_9995.jpg",
                "IMG_2652.jpg",
                "IMG_7747.jpg",
                "IMG_7118.jpg",
                "IMG_2494.jpg",
                "IMG_8535.jpg"
            ];

            screenContent.innerHTML = `
            <div class="fullscreen-gallery">
                <div class="gallery-header">
                    <h3 class="photo-title">// </h3>
                    <button class="close-gallery-btn" id="closeGallery"><i class="bi bi-x-lg"></i></button>
                </div>

                <!-- Contenedor Principal-->
                <div class="fullscreen-stage">
                    <img id="stagePhoto" class="stage-photo" src="/img/containers/photo/${misFotos[0]}" alt="Foto Activa">
                </div>

                <!-- Barra Inferior de Miniaturas -->
                <div class="fullscreen-thumbnails" id="fsThumbnails"></div>
            </div>
            `;

            const stagePhoto = screenContent.querySelector('#stagePhoto');
            const fsThumbnails = screenContent.querySelector('#fsThumbnails');
            const closeBtn = screenContent.querySelector('#closeGallery');

            misFotos.forEach((nombreFoto, index) => {
                const thumb = document.createElement('img');
                thumb.src = `/img/containers/photo/${nombreFoto}`;
                thumb.className = "fs-thumb";

                if (index === 0) thumb.classList.add('active-fs-thumb');

                thumb.addEventListener('click', () => {
                    stagePhoto.src = `/img/containers/photo/${nombreFoto}`;
                    fsThumbnails.querySelectorAll('.fs-thumb').forEach(t => t.classList.remove('active-fs-thumb'));
                    thumb.classList.add('active-fs-thumb');
                });

                fsThumbnails.appendChild(thumb);
            });

            // Activar modal de pantalla completa
            photoScreen.classList.add('active');

            // Botón de cierre 
            closeBtn.addEventListener('click', () => {
                photoScreen.classList.remove('active');
            });
        });

        // Cerrar haciendo clic fuera del contenido principal
        photoScreen.addEventListener('click', (e) => {
            if (e.target === photoScreen) {
                photoScreen.classList.remove('active');
            }
        });
    }
});