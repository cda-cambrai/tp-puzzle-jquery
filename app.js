/*var positions = [200, 0, 300, 100];

for (var i = 0; i < positions.length; i++) {
    for (var j = 0; j < positions.length; j++) {
        console.log('X: '+positions[i]+' -- Y: '+positions[j]);
    }
}*/

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
}

// On mélange le jeu avant de commencer
for (var i = 1; i < 100; i++) {
    var random = Math.floor(Math.random() * (16 - 1))
    moveBloc('.bloc-'+random);
}

var shots = 0; // Représente le nombre de coups

// Sélectionne toutes les classes .bloc
// sauf celles qui ont la classe .bloc-empty
$('.bloc').not('.bloc-empty').click(function () {
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
        return;
    }

    // Inverser la position des blocs
    $(this).css({top: emptyY, left: emptyX});
    $('.bloc-empty').css({top: currentY, left: currentX});

    // Incrémenteur le compteur du jeu
    shots = shots + 1;
    $('#shots strong').text(shots);
});

// Chronomètre
var seconds = 0;

setInterval(function () {
    seconds += 0.01 * 100;
    $('#stopwatch strong').text(seconds / 100);
}, 10);
