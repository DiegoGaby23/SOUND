/* Début du programme */

/* Initialisation des données */
let btn = document.querySelector('#activate');
btn.addEventListener('click', microphoneOn);
let para = document.querySelector('p');
/* Fin de l'initialisation des données */




/* Procésus */
function microphoneOn() {
    if (btn.textContent === 'Activer le microphone') {
        btn.textContent = 'Activer le microphone';
        para.textContent = 'Activé';

    } else {
        'Votre navigateur ne prends pas en charge le michrophone';
    }
}



function checkGetUserMedia() {// function de vérification de la disponivilée dans le navigateur
    let result = false;
    if (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia) {
        result = true;
        return result;
    }
}
/* Fin du procésus */

/* Fin du programme */
