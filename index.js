/* Début du programme */

/* Initialisation des données */
function checkGetUserMedia() {// function de vérification de la disponivilée dans le navigateur
    let result = false;
    if (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia) {
        result = true;
        return result;
    }

}/* Fin de l'initialisation des données */




/* Procésus */

window.addEventListener("load", function () {/* Activation de la pop-up */
    document.querySelector("#activate").addEventListener('click', function () {
        if (checkGetUserMedia()) {
            document.querySelector("#notify").setAttribute("data", "detected");
        } else {
            document.querySelector("#notify").setAttribute("data", "failed");
        }
    });

});/* Fin du procésus */

/* Fin du programme */