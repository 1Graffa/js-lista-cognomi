// alert();
//1. Chiedere all’utente il cognome
//2. inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’.
//3. stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
//4. Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova

//scrivo l'arrey con la lista dei cognomi
var listaCognomi = ['Bianchi','Rossi','Duzioni','Balsano','Verdi'];
// inserisco voce ad array con push attraverso inserimento dato con prompt
listaCognomi.push(prompt("inserire cognome"));
// ordino alfabeticamente la lista
listaCognomi.sort();
console.log(listaCognomi);
// aggiungo la var position
