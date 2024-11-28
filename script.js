//INSERIMENTO DATI DEL VIAGGIATORE
const tripLeng = Number(prompt("inserisci il numero di chilometri da percorrere"))
const userAge = Number(prompt("inserisci l'età del viaggiatore"))
console.log(tripLeng,userAge)

//CONTROLLO CHE I DATI INSERITI SIANO NUMERI
if (isNaN(tripLeng) || isNaN(userAge)){

    //SE I VALORI INSERITI SONO DIVERSI DA UN NUMERO STAMPA ERRORE
    alert("I valori inseriri NON SONO NUMERI! Per favore ricarica la pagina e inserisci dei numeri!")
    console.log("non sono numeri")
}

else{
    //SE I VALORI INSERITI SONO NUMERI PROCEDIAMO AL CALCOLO DEL PREZZO DEL BIGLIETTO

    //DICHIARAZIONE DELLA VARIABILE E CALCOLO DEL PREZZO SENZA SCONTO
    const price = tripLeng * 0.21 
    console.log("il prezzo non scontato è: ",price.toFixed(2),"€" )

    //CONTROLLO DELL'ETA' PER VERIFICARE LA POSSIBILITA' DI SCONTO
    //DICHIARAZIONE VARIABILI PER SCONTO E PREZZO SCONTATO
    const discountYng = price * 0.2
    const discountSnr = price * 0.4
    let discountPrice

    //CONTROLLO SE IL PASSEGGERO ABBIA COMPIUTO LA MAGGIOR ETA'
    if(userAge < 18){

        //CALCOLO DELLO SCONTO SU PASSEGGERO MINORENNE (-20%)
        console.log("lo sconto da applicare è di: ",discountYng.toFixed(2),"€" )
        discountPrice = price - discountYng
        console.log("il prezzo scontato è: ",discountPrice.toFixed(2),"€" )

        //COMUNICO AL PASSEGGERO IL SUO PREZZO FINALE SCONTATO
        alert(`Il tuo prezzo finale è ${discountPrice.toFixed(2)}€ con uno sconto del 20%, buon viaggio!`)
    } 
    //CONTROLLO SE IL PASSEGGERO FACCIA PARTE DELLA CATEGORIA OVER 
    else if (userAge > 64) {

        //CALCOLO DELLO SCONTO SU PASSEGGERO OVER (-40%)
        console.log("lo sconto da applicare è di: ",discountSnr.toFixed(2),"€" )
        discountPrice = price - discountSnr
        console.log("il prezzo scontato è: ",discountPrice.toFixed(2),"€" )

        //COMUNICO AL PASSEGGERO IL SUO PREZZO FINALE SCONTATO
        alert(`Il tuo prezzo finale è ${discountPrice.toFixed(2)}€ con uno sconto del 40%, buon viaggio!`)
    }
    else{
        //COMUNICO AL PASSEGGERO IL PREZZO BASE DEL BIGLIETTO
        console.log("nessuno sconto qui!")
        alert(`Il prezzo del tuo biglietto è ${price.toFixed(2)}€, buon viaggio!`)
    }
}