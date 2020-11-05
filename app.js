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

$('.bloc').click(function () {
    // Récupèrer la position (top, left) du bloc cliqué
    var currentX = $(this).css('left'); // 0px
    var currentY = $(this).css('top'); // 100px

    // Récupèrer la position du bloc "vide"
    var emptyX = $('.bloc-empty').css('left');
    var emptyY = $('.bloc-empty').css('top');

    // Inverser la position des blocs
    $(this).css({top: emptyY, left: emptyX});
    $('.bloc-empty').css({top: currentY, left: currentX});
});
