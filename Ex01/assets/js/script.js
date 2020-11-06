for (let year = 2020; year <= 2030; year++){
  let newDiv = document.createElement('div');
  let newContent = document.createTextNode(year);
  newDiv.appendChild(newContent);
  var currentDiv = document.getElementById('para');
  document.body.insertBefore(newDiv, currentDiv);
}
