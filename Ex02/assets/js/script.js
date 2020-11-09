// on récupére l'id de la div dans une variable
let multiDiv = document.getElementById('multi');

// on boucle tout les nombres de 0 à 100
for (i = 0; i <= 100; i++) {

  // on récupére le contenu de la précédente div
  let previousContent = multi.innerHTML;

  // on récupére les multiples de 15 avec le modulo de i par 15
  let multiple = i % 15;
  
  // si le modulo est différent de 0 on affiche le nombre
  if (multiple != 0) {
    multiDiv.innerHTML = previousContent + i;
    
    //sinon on affiche '...'
  }  else {
    multiDiv.innerHTML = previousContent + '<div>' + '...' + '</div>';
  }
}