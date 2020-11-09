// on récupére l'id de la div
let yearDiv = document.getElementById('year');

// on boucle de 2020 à 2030
for (let year = 2020; year <= 2030; year++) {

  // on récupère le contenu de la div précédente pour le réafficher avec le contenu mis à jour
  let previousContent = yearDiv.innerHTML;

  // on teste si l'année est bissectile ou non
  if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
    // si l'année est bissextile on l'affiche en rouge
    yearDiv.innerHTML = previousContent + '<div style="color: red">' + year + '</div>';
  } else {
    // sinon on l'affiche en noir
    yearDiv.innerHTML = previousContent + '<div style="color: black">' + year + '</div>';
  };
}