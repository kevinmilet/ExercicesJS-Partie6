// on récupére l'id de la div dans une variable
let multiDiv = document.getElementById('multi');

// on boucle tout les nombres de 0 à 100
for (i = 0; i <= 100; i++) {

  // on récupére le contenu de la précédente div
  let previousContent = multi.innerHTML;

    // si le modulo est égale à 0 on affiche '...'
  if (i % 15 == 0 && i != 0) {
    multiDiv.innerHTML = previousContent + '<div>' + '...' + '</div>';
  
  //sinon on affiche le nombre
  }  else {
    multiDiv.innerHTML = previousContent + '<div>' + i + '</div>';
  }
}