
// Creazione array lista spesa
let listaSpesa = ['Frutta','Verdura','Detersivo','Pasta','Shampoo','Bagnoschiuma','Sapone'];
// Inizializzazione contatore
let i = 0;
// Creo unordered list
let ulElem = document.querySelector('ul');

while (i < listaSpesa.length) {

    // Estraggo l'i-esimo elemento della lista
    let voceSpesa = listaSpesa[i];

    // Creo list item
    let liElem = document.createElement('li');
    let node = document.createTextNode(voceSpesa);
    liElem.appendChild(node);
    // Stampa di verifica del list item
    console.log(liElem);
    
    // Inserisco list item nella unordered list
    ulElem.appendChild(liElem);

    // Aggiorno contatore
    i++

}


