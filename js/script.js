// alert();
//1. Chiedere all’utente il cognome
//2. inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’.
//3. stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
//4. Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova

//scrivo le variabili
var listaCognomi, inputCognome, toUp, toLow;
// arrey con la lista dei cognomi
listaCognomi = ['Bianchi','Rossi','Duzioni','Balsano','Verdi'];
// inserisco voce ad array con push attraverso inserimento dato con prompt
inputCognome = prompt("inserire cognome")
// ordino alfabeticamente la lista e correggo le maiuscole e minuscole
toUp = inputCognome.charAt(0).toUpperCase();
toLow = inputCognome.substring(1).toLowerCase();
inputCognome = toUp + toLow;
listaCognomi.push(inputCognome);
listaCognomi.sort();
console.log(listaCognomi);
// la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array)
//indexOf(inputCognome) + 1)
// stampo
document.getElementById('lista').innerHTML = listaCognomi;
