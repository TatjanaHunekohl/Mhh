let speisekarte = [ 
    {
        "name": "Pizza Magherita",
        "preis": 7.50,
        "beschreibung": "Tomatensuace & Käse",
        "amount": 0
    },
    {
        "name": "Pizza Napoli",
        "preis": 8,
        "beschreibung": "Tomatensauce, Käse, Sardellen",
        "amount": 0
    },
    {
        "name": "Pizza Al Salame",
        "preis": 8.50,
        "beschreibung": "Tomatensauce, Käse, Salami",
        "amount": 0
    },
    {
        "name": "Pizza Al Diavolo",
        "preis": 8.50,
        "beschreibung": "Tomatensauce, Pilze, Käse, Peperoni & Chilli ",
        "amount": 0
    },
    {
        "name": "Pizza Quattro Staggione",
        "preis": 11.1,
        "beschreibung": "Tomatensauce, Käse, Salami, Pilze, Artischocken, Hinterkochschinken, schwarze Oliven",
        "amount": 0
    } 
];

function render() {
    let menue = document.getElementById('menue-sctn');
    
    for (let i = 0 ; i < speisekarte.length ; i++) {
        const karte = speisekarte[i];

        menue.innerHTML += `
        <div class="dish">
            <div>
                <h3 id="dish-name">${karte['name']}</h3>
                <p id="dish-description">${karte['beschreibung']}</p>
                <p id="preis">${karte['preis']} €</p>
             </div>
         <img src="img/plus-line-icon.png" alt="add-btn" id="add-btn" onclick="increaseAmount(${i})">
        </div>
        `;
    }
}


function increaseAmount(i) {
    speisekarte[i]['amount'] += 1;
    renderCart();
}

function decreaseAmount(i) {
    speisekarte[i]['amount'] -= 1;
    renderCart();
}

function deleteItem(i) {
    speisekarte[i]['amount'] = 0; 
    renderCart();
}

function renderCart() {
    document.getElementById('warenkorb-sctn').innerHTML = ``;
    document.getElementById('warenkorb-sctn').innerHTML += `
        <h3 id="headline-warenkorb">Warenkorb</h3>
        <img src="img/close.png" alt="close-icon" id="close-icon" onclick="closePayWindow()">
    `;

    for (let i = 0 ; i < speisekarte.length ; i++ ) {

        if ( speisekarte[i]['amount'] >= 1) {
            document.getElementById('warenkorb-sctn').innerHTML += `
            
            <div id="warenkorb" class="warenkorb">
                <span id="amount">${speisekarte[i]['amount']}</span>
                <span>${speisekarte[i]['name']}</span>
                <img src="img/plus-line-icon.png" alt="plus" class="small-icon" onclick="increaseAmount(${i})">
                <img src="img/minus.png" alt="minus" class="small-icon" onclick="decreaseAmount(${i})">
                <span>${speisekarte[i]['preis']} € </span>
                <img src="img/bin.png" alt="trash-icon" class="icon-o" onclick=deleteItem(${i})>
            </div>
            
            `;
        }
    }
    renderPay();

}

function calcBill() {
    let zwischensumme = 0;
    for ( let i = 0 ; i < speisekarte.length ; i++) {
        zwischensumme += (speisekarte[i]['amount'] * speisekarte[i]['preis']);
    } 
    return zwischensumme;  
}

function renderPay() {
    document.getElementById('button-mobil').innerHTML = ``; 
    document.getElementById('button-mobil').innerHTML += `Bezahlen`; 

    let warenkorb = document.getElementById('warenkorb-sctn');
    var Zwisu = calcBill();   

    if ( Zwisu > 0 ) {


        warenkorb.innerHTML += `
        <div class="pay"> 
            <div class="flex" >
                <span>Zwischensumme</span>
                <span id="zwischensumme">${Zwisu}€</span>
            </div>
            <div class="flex">
                <span>Lieferkosten</span>
                <span>1,99 € </span>
            </div>
            <div class="flex" >
                <span><b>Gesamt €</b></span>
                <span id="gesamt">${Zwisu+1.99}€</span>
            </div>
         </div> 
         <button onclick="paymentPopUp()" >Bezahlen (${Zwisu+1.99}) € </button>
    `;

    document.getElementById('button-mobil').innerHTML += `
      ${Zwisu} € 
             
        `;

    }

};


/** Mobile */


function renderMobilePay() {

   document.getElementById('warenkorb-sctn').classList.remove('d-none');
   document.getElementById('warenkorb-sctn').classList.add('d-flex');
   document.getElementById('button-mobil').classList.add('d-none');
   document.getElementById('menue-sctn').classList.add('d-none');
} 

function paymentPopUp() {
    window.alert('Sorry, this app has no payment integration.');
}

function closePayWindow() {
    document.getElementById('warenkorb-sctn').classList.add('d-none');
   document.getElementById('warenkorb-sctn').classList.remove('d-flex');
   document.getElementById('button-mobil').classList.remove('d-none');
   document.getElementById('menue-sctn').classList.remove('d-none');
}


/* Navigation   ------------------------ */

function openNav() {
    document.getElementById('nav-li').classList.remove('d-none');  
}

function closeNav() {
    document.getElementById('nav-li').classList.add('d-none'); 
}



