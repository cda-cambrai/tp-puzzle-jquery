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
