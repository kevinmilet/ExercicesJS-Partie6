let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

for (i = 0; i < days.length; i++) {
  if (days[i] == 'Samedi' || days[i] == 'Dimanche') {
    document.write('<div style="font-weight: bold">' + days[i] + '</div>');
  } else {
    document.write('<div>' + days[i] + '</div>');
  }
}
