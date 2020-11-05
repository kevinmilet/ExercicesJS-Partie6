// let year = 2020;
for (let year = 2020; year <= 2030; year++){
//   console.log(document.getElementById('para').innerHTML);
  x = document.getElementById('para').innerHTML;
  result = (x + ' ' + year);
  document.getElementById('para').innerHTML = result;
}
