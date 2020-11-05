# TP Puzzle / Taquin

On va essayer de créer un Puzzle (numéros) en JavaScript / jQuery.
http://www.artbylogic.com/puzzles/numSlider/numberShuffle.htm

On devra utiliser Github. Voici la liste des fonctionnalités à implémenter :

- Créer l'apparence du jeu avec des cases. On va commencer par un 4 par 4. Il faut donc avoir 15 carrés avec une zone vide.
- Pouvoir cliquer sur un carré et le positionner à la place de la zone vide.
  Chaque carré doit être positionné (relative ou absolute) par rapport à la zone complète du jeu
  - Récupérer la position (top, left) du bloc cliqué
  - Récupérer la position du bloc "vide"
  - Intervertir les positions de ces blocs
- Mélanger le jeu aléatoirement à chaque rafraichissement
- Autoriser uniquement le déplacement d'un carré s'il est à côté de la zone vide
- BONUS: Compter les déplacements (en temps réel)
- BONUS: Ajouter un chronomètre et détecter la fin de la partie
- BIG BONUS: Adapter le jeu pour que cela fonctionne avec une image (On peut découper une image avec un background image et un background position)
- BONUS: On arrive sur le jeu, on voit l'image complète, on clique sur jouer, elle se mélange, le chrono se déclenche. On pourra également recommencer la partie.
