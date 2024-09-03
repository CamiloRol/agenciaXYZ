//Clase constructora viaje

//Variables
let travels = [];
/* let quotesArray = []; */
let valueKid;
let quanAdult;
let quanKidos;
let subTotal;
let clientSelec;
let inputGuajira;
let inputCanon;
let inputLlanos;
let destiOptions;
let total;
let printQuote;

let discount = 0;
let nameCli;
/* let listTravel;
let nnumT; */
//Constantes

const destinationsSpace = document.getElementById("destinationsSpace")
const botonOptions = document.getElementById("botonOptions")
const optionsSpace = document.getElementById("optionsSpace")
const formSpace = document.getElementById("formSpace")
const cotiCli = document.getElementById("cotiCli")
const destinySelection = document.getElementById("destinySelection")
const quoteSpace = document.getElementById("quoteSpace")
/* const botonTravel = document.getElementById("botonTravel") */
const restart = document.getElementById("restart")

//Clase que me guarda los destinos que tiene mi agencia
class Travel {
    constructor(name, valueAdul, photo, id) {
        this.name = name
        this.valueAdul = valueAdul
        this.photo = photo
        this.id = id
    }
}

//Creacion de los destinos
let guajira = new Travel("Guajira", 1980000, 'sources/guajiraPic.jpg', "guajira")
let canonDelChicamocha = new Travel("Cañon Del Chicamocha", 1600000, 'sources/cañonPic.jpg', "canonDelChicamocha")
let llanosOrientales = new Travel("Llanos Orientales", 1500000, 'sources/llanosPic.jpg', "llanosOrientales")

//Guardar la informacion en la array
travels.push(guajira,canonDelChicamocha,llanosOrientales)

//Forma de precargar la informacion de la ventana
window.addEventListener("load", pageHome)

//Funciones
function pageHome(){
    //funcion que recorre el array y crea la tarjeta de cado mon
    travels.forEach((Travel) => {
        destiOptions = `
        <input type="radio" name="mascota" id=${Travel.id} class="radio">
        <label for=${Travel.id} >
            <p>${Travel.name}</p>
            <img src=${Travel.photo} alt=${Travel.photo}>
        </label>
        `
        destinationsSpace.innerHTML += destiOptions

        inputGuajira = document.getElementById('guajira')
        inputCanon = document.getElementById('canonDelChicamocha')
        inputLlanos = document.getElementById('llanosOrientales')
    })
    botonOptions.addEventListener('click', optionsSelection)
    cotiCli.addEventListener('click', quotes)
    /* botonTravel.addEventListener('click',recolectionProc) */
    restart.addEventListener('click',recargar)
    formSpace.style.display = "none"
    restart.style.display = "none"
}

function optionsSelection() {
    optionsSpace.style.display = "none"
    formSpace.style.display = "flex"
    if (inputGuajira.checked) {
        destinySelection.innerHTML = guajira.name
        clientSelec = inputGuajira.id
    }else if(inputCanon.checked) {
        destinySelection.innerHTML = canonDelChicamocha.name
        clientSelec = inputCanon.id
    }else if(inputLlanos.checked) {
        destinySelection.innerHTML = llanosOrientales.name
        clientSelec = inputLlanos.id
    }else {
        alert('No has seleccionado un mon')
    }
}

/* function recolectionProc() {
    listTravel = document.getElementById("listTravel");
    nnumT = listTravel.value
    let i = 0
    do {
        pageHome()
        optionsSelection()
        quotes()
        i++
    } while (i != nnumT);
   console.log(nnumT)
} */

function quotes() {
    subTotalProc()
    discountProc()

    total = subTotal - discount
    formSpace.style.display = "none"
    printQuotes()
    restart.style.display = "block"
}

function printQuotes() {
    nameCli = document.getElementById("nameCli").value
    if (clientSelec == "guajira") {
        printQuote = `<div class="quote"><img src=${guajira.photo} alt=${guajira.photo}>
        <pre>

Nombre del destino: ${guajira.name}
Nombre del cliente: ${nameCli}
Valor por adulto: $ ${guajira.valueAdul}
Valor por niño: $ ${valueKid}
Nro Adultos: ${quanAdult}
Nro Niños: ${quanKidos}
Subtotal: $ ${subTotal}
Vlr descuento: $ ${discount}
Neto a pagar: $ ${total}
            </pre></div>`
        
        quoteSpace.innerHTML = printQuote
    }else if (clientSelec == "canonDelChicamocha") {
        printQuote = `<div class="quote"><img src=${canonDelChicamocha.photo} alt=${canonDelChicamocha.photo}>
        <pre>

Nombre del destino: ${canonDelChicamocha.name}
Nombre del cliente: ${nameCli}
Valor por adulto: $ ${canonDelChicamocha.valueAdul}
Valor por niño: $ ${valueKid}
Nro Adultos: ${quanAdult}
Nro Niños: ${quanKidos}
Subtotal: $ ${subTotal}
Vlr descuento: $ ${discount}
Neto a pagar: $ ${total}
            </pre></div>`

        quoteSpace.innerHTML = printQuote
    }else if (clientSelec == "llanosOrientales") {
        printQuote = `<div class="quote"><img src=${llanosOrientales.photo} alt=${llanosOrientales.photo}>
        <pre>

Nombre del destino: ${llanosOrientales.name}
Nombre del cliente: ${nameCli}
Valor por adulto: $ ${llanosOrientales.valueAdul}
Valor por niño: $ ${valueKid}
Nro Adultos: ${quanAdult}
Nro Niños: ${quanKidos}
Subtotal: $ ${subTotal}
Vlr descuento: $ ${discount}
Neto a pagar: $ ${total}
            </pre></div>`

        quoteSpace.innerHTML = printQuote
    }
}
    
function subTotalProc() {
    quanAdult = document.getElementById("numAdul").value
    quanKidos = document.getElementById("numKid").value

    if (clientSelec == "guajira") {
        valueKid = guajira.valueAdul * 0.6;
        subTotal = (guajira.valueAdul * quanAdult) + (valueKid * quanKidos)
    }else if (clientSelec == "canonDelChicamocha") {
        valueKid = canonDelChicamocha.valueAdul * 0.6;
        subTotal = (canonDelChicamocha.valueAdul * quanAdult) + (valueKid * quanKidos)
    }else if (clientSelec == "llanosOrientales") {
        valueKid = llanosOrientales.valueAdul * 0.6;
        subTotal = (llanosOrientales.valueAdul * quanAdult) + (valueKid * quanKidos)
    }

}

function discountProc() {

    if (quanAdult > 4 && quanKidos > 2) {
        discount = subTotal * 0.2
    }
}

function recargar() {
    location.reload()
}

