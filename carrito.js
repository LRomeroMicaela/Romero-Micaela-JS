
//saco del localStorage el item seleccionado por el usuario
let almacenados = JSON.parse(localStorage.getItem("lentes"));
//variable para borrar carrito, con close boton


extraerProdSeleccinado();

//funcion para extraer los item del array almacenados
function extraerProdSeleccinado() {
	for (let item of almacenados) {
		let { cardImg, cardPrecio, cardTitle } = item;
		console.log(item);
		console.log(cardImg, cardPrecio, cardTitle);
		mostrarImgDeProdSeleccionado();
	}
}
//armado seccion donde muestra producto elegido
function mostrarImgDeProdSeleccionado(){
    for (item of almacenados){
    let divConImg = document.createElement("div")
    divConImg.innerHTML += `
        <div class="seleccionado">
            <div class="seleccionado-img col-10"><img width="100%" src=${item.cardImg} alt="producto elegido"></div>
            <div class="seleccionado-description col-10"><p>Descripción del producto seleccionado: ${item.cardTitle}</p></div>
            <div class="seleccionado-material col-10"><p>Precio por unidad: ${item.cardPrecio}</p></div>
        </div>
    `
    document.getElementById("artElegido").append(divConImg);
    }
   multiplicarPorLaCantDeseada();
}

//me falta restar a la cantidad seleccionada al stock 
//y dar la opcion de la cantidad al usuario
// validar input
//crear un alert con los datos del comprador y lo elegido.

function multiplicarPorLaCantDeseada(){
  const canti = document.getElementById("cantidadAComprar")
    canti.addEventListener(`input`, multiplicarPorElPrecio)
    console.log (canti)
  
}


//boton para borrar lo del carrito
//funcion para vaciar carrito y localStorage
const clearCarrito = document.getElementById(`boton-close`);
    clearCarrito.addEventListener(`click`, clearHTML);
function clearHTML(){
    const eliminarloTodo = localStorage.removeItem(`lentes`);
    artElegido.innerHTML = "";
    almacenados = "";    
}

