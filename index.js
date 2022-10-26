//construyo una clase creadora de objetos
class Lentes{
    constructor(id, img, nombre, marca, modelo, color, precio, stock){
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
    restaStock(){
        this.stock = this.stock - 1; //acá tengo que poner la cantidad que seleccione el cliente
    }
}

//creacion de objetos de la clase Lentes
const armazon1 = new Lentes(100,"./img/aviadorBless.jpg","Armazón de receta", "Bless", "Aviador", "Negro", 7500, 100);
const armazon2 = new Lentes(101, "./img/davorHSol.jpg", "Lentes de Sol", "Davor", "Envolvente", "Negro", 7500, 100);
const armazon3 = new Lentes(102, "./img/hexagonalBless.jpg", "Armazón de receta", "Bless", "Hexagonal", "Dos colores", 6500, 100);
const armazon4 = new Lentes(103, "./img/pinUp.jpg", "Armazón de receta", "Bless", "Pin Up", "Dorado y Negro", 9000, 100);
const armazon5 = new Lentes(104, "./img/solMildura.jpg", "Lentes de Sol","Mildura", "Pin Up", "Dorado y Rosa", 10500, 100);
const armazon6 = new Lentes(105, "./img/solMuzik.jpg", "Lentes de Sol", "Muzik", "Wayfarer", "Negro", 8500, 100);

let lentesDisponibles = [armazon1, armazon2, armazon3, armazon4, armazon5, armazon6];
const arrayProductos = [];
function armadoCard(){
    for (let armazon of lentesDisponibles){
        let card = document.createElement("div")
        card.innerHTML += `
            
            <div class="card-body">
            <img src = ${armazon.img} class="card-img-top" alt = ${armazon.nombre}>
              <h5 class="card-title txt-login">${armazon.nombre}, ${armazon.marca}</h5>
              <p class="card-text txt-login">$${armazon.precio}</p>
              <a id="btn-add" onclick ="armazon.restaStock()" href="#" class="btn btn-primary subm1">Agregar al carrito</a>  
        </div>`; //ver onclick
        document.getElementById("container-productos").append(card); 
        card.className ="card col-10 col-md-3 img-cat main-img";   
    }
}
armadoCard();

//variables
const addButtons = document.querySelectorAll(`#btn-add`);

//funcion creo el evento del click del boton y llamo a la funcion traer la card seleccionada por el usuario
addButtons.forEach(button =>{
    button.addEventListener(`click`,addToCartClicked);
});
// funcion que trae la card y extraigo los items de la card que me sirven. Llamo a otra funcion para armar el carrito

function addToCartClicked(event){
    const boton = event.target;
    const traerCardEntera = boton.closest(`.card`);

    const cardTitle = traerCardEntera.querySelector(`.card-title`).textContent;
    const cardPrecio = traerCardEntera.querySelector(`.card-text`).textContent;
    const cardImg = traerCardEntera.querySelector(`.card-img-top`).src;

    arrayProductos.push({cardTitle, cardPrecio, cardImg})
    console.log(arrayProductos)

    localStorage.setItem('lentes', JSON.stringify(arrayProductos))
};

/*
function addToCartClicked(event){
    const boton = event.target;
    const traerCardEntera = boton.closest(`.card`);

    const cardTitle = traerCardEntera.querySelector(`.card-title`).textContent;
    const cardPrecio = traerCardEntera.querySelector(`.card-text`).textContent;
    const cardImg = traerCardEntera.querySelector(`.card-img-top`).src;

    //addProdToCart(cardTitle, cardPrecio, cardImg); 
};
const setCarrito = objeto => {
    //console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {
        ...producto //aplicado spred
    }

    pintarCarrito()
}


//no darle importancia  a esto, estaba probando algo 
const seleccionadoDelCatalogo = document.querySelector(`#seleccionado-del-catalogo`);

function addProdToCart(titulo, precio, img){
    let carritoShowAdd = document.createElement("tr")

    carritoShowAdd.innerHTML += `
        <th scope="row">1</th>
        <td>${img}</td>
        <td>${titulo}</td>
        <td>${precio}</td>

    `; 
    document.getElementById("seleccionado-del-catalogo").append(carritoShowAdd);
    
}
*/