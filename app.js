/*var positions = [200, 0, 300, 100];

for (var i = 0; i < positions.length; i++) {
    for (var j = 0; j < positions.length; j++) {
        console.log('X: '+positions[i]+' -- Y: '+positions[j]);
    }
}*/

// Permet de déplacer un bloc
function moveBloc(bloc) {
    // Récupèrer la position (top, left) du bloc cliqué
    var currentX = $(bloc).css('left'); // 0px
    var currentY = $(bloc).css('top'); // 100px

    // Récupèrer la position du bloc "vide"
    var emptyX = $('.bloc-empty').css('left');
    var emptyY = $('.bloc-empty').css('top');

    // Inverser la position des blocs
    $(bloc).css({top: emptyY, left: emptyX});
    $('.bloc-empty').css({top: currentY, left: currentX});

    // Intervertir les ids pour connaitre la position d'un bloc
    // et vérifier si on a gagné la partie
    var currentId = $(bloc).attr('id');
    var emptyId = $('.bloc-empty').attr('id');
    $(bloc).attr('id', emptyId);
    $('.bloc-empty').attr('id', currentId);
} // Fin de la fonction moveBloc

var stopwatch;
var shots = 0; // Représente le nombre de coups

$('.start, .restart').click(function () {
    // On mélange le jeu avant de commencer
    for (var i = 1; i < 100; i++) {
        var random = Math.floor(Math.random() * (16 - 1));
        moveBloc('.bloc-'+random);
    }
    
    // On change le texte du bouton
    $('.start').text('Rejouer');

    // Reset du compteur
    shots = 0;
    $('#shots strong').text(shots);
    $('#win').hide();

    // Mettre le chronomètre ici...
    // Chronomètre
    var seconds = 0;

    clearInterval(stopwatch); // On arrête le chronomètre d'avant
    // s'il existe
    stopwatch = setInterval(function () {
        console.log('stopwatch');
        // On multiplie pour éviter le calcul des floats
        // 0.01 secondes
        seconds += 0.01 * 100;
        // On divise ensuite pour l'affichage
        $('#stopwatch strong').text(seconds / 100);
    }, 10);

    // Sélectionne toutes les classes .bloc
    // sauf celles qui ont la classe .bloc-empty
    $('.bloc').not('.bloc-empty').click(function () {
        // this représente bien le bloc qui est cliqué
        // Récupèrer la position (top, left) du bloc cliqué
        var currentX = $(this).css('left'); // 0px
        var currentY = $(this).css('top'); // 100px

        // Récupèrer la position du bloc "vide"
        var emptyX = $('.bloc-empty').css('left');
        var emptyY = $('.bloc-empty').css('top');

        // Calculer la différence de position entre les blocs
        var diffX = Math.abs(parseInt(currentX) - parseInt(emptyX));
        var diffY = Math.abs(parseInt(currentY) - parseInt(emptyY))

        // On empêche le déplacement de plus de 2 bloc d'écarts
        // Et aussi le déplacement en diagonale
        if (diffX > 100 || diffY > 100 || diffX >= 100 && diffY >= 100) {
            // Commenter le return pour "tricher"
            // return;
        }

        // Inverser la position des blocs
        $(this).css({top: emptyY, left: emptyX});
        $('.bloc-empty').css({top: currentY, left: currentX});

        // Incrémenteur le compteur du jeu
        shots = shots + 1;
        $('#shots strong').text(shots);

        // Intervertir les ids pour connaitre la position d'un bloc
        // et vérifier si on a gagné la partie
        var currentId = $(this).attr('id');
        var emptyId = $('.bloc-empty').attr('id');
        $(this).attr('id', emptyId);
        $('.bloc-empty').attr('id', currentId);

        // Vérifier si on a gagné
        var win = true;
        for (var i = 1; i < 16; i++) {
            // class="bloc-i" id="i"
            var blocId = $('.bloc-'+i).attr('id');

            // Attention, blocId renvoie une chaine
            // "15" et 15
            if (blocId != i) {
                // On perd si l'id ne correspond pas au bloc
                win = false;
            }
        }

        if (win) {
            $('#win').show(); // On affiche une div quand on gagne
            clearInterval(stopwatch); // Arrêt du chronomètre
        }
    });
});
