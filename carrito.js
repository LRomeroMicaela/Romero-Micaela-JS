
//saco del localStorage el item seleccionado por el usuario
let almacenados = [];
let item = localStorage.getItem("lentes");
   if (item){
    almacenados = JSON.parse(localStorage.getItem("lentes"));
};
console.log(item);
const {cardImg} = almacenados;
console.log (cardImg);

/*
function mostrarImgDeProdSeleccionado(){
    let divConImg = document.createElement("div")
    divConImg.innerHTML += 
    <img width="100%" src= alt="producto elegido"></img>

document.getElementById("artElegido")
}
*/
