// fonction qui trouve les années bissextiles et les affiches en rouge
function isBissextile() {
  
  // déclaration de la variable pour les nouveaux id des nouvelles div
  let newDivId = 1;


  // boucle de 2020 à 2030
  for (let year = 2020; year <= 2030; year + 1) {
    
    // on crée une nouvelle div
    let newDiv = document.createElement('div');

    // on lui attribue un nouvel id
    newDiv.id = String('' + newDivId);
    let content = document.createTextNode(year);
    newDiv.appendChild(content);

    // on ajoute le nouvel élément sur la page
    let currentDiv = document.getElementById('div');
    document.body.insertBefore(newDiv, currentDiv);

    // on récupère l'id du nouvel élément pour lui assigner un couleur
    let yearId = document.getElementById(String('' + newDivId));
    
    // on teste si l'année est bissectile ou non
    if ((year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)) {
      yearId.style.color = 'red';
    } else {
      yearId.style.color = 'black';
    };

    // on ajoute un nouvel id et une nouvelle année, sinon la boucle ne finie jamais
    year = year + 1;
    newDivId = newDivId + 1;
  }
}