// on récupére l'id de la div dans une variable
let multiDiv = document.getElementById('multi');

// on boucle tout les nombres de 0 à 100
for (i = 0; i <= 100; i++) {

  // on récupére le contenu de la précédente div
  let previousContent = multi.innerHTML;

  // on récupére les multiples de 15 avec le modulo de i par 15
  let multiple = i % 15;
  
  // si le modulo est égale à 0 on affiche '...'
  if (multiple == 0 && i != 0) {
    multiDiv.innerHTML = previousContent + '<div>' + '...' + '</div>';
  
  //sinon on affiche le nombre
  }  else {
    multiDiv.innerHTML = previousContent + '<div>' + i + '</div>';
  }
}