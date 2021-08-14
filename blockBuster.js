let plataforma = {
   nombre : "",
   costo : 0
}

const valorPelicula = 3000;

let checkNetflix = document.getElementById("netflix");
let checkDisney = document.getElementById("disney");
let checkAmazon = document.getElementById("amazon");
let checkPlex = document.getElementById("plex");
let resultValorPelicula = document.getElementById("resultValorPelicula");
let resulValorSuscripcion = document.getElementById("resultValorSuscripcion");
let listcheck = []
function calcularValor(){
    const numeroPelicula = document.getElementById("numerosPeliculas");
    const value = numeroPelicula.value
    const valor = valorPelicula * value;
    resultValorPelicula.innerHTML = "El valor de las peliculas es: $" + valor
    let valorSuscripcion = 0;
    valorSuscripcion = listcheck.reduce((a, b) => a + b, 0);   
    resulValorSuscripcion.innerHTML = "El valor de las suscripciones es: $" + valorSuscripcion;
}
checkNetflix.addEventListener('click', function costoN() {
    let objNetflix = plataforma;
    if (checkNetflix.checked) {
        objNetflix.nombre = "Netflix";
        objNetflix.costo = 16900;
        listcheck.push(objNetflix.costo)
        console.log(listcheck);             
    }else{
        let index =listcheck.indexOf(16900);
        listcheck.splice(index, 1);
        console.log(listcheck); 
    }
});
checkDisney.addEventListener('click', function() {
    let objDisney = plataforma;   
    if (checkDisney.checked) {
        objDisney.nombre = "Disney";
        objDisney.costo = 23900;
        listcheck.push(objDisney.costo) 
        console.log(listcheck);  
    }else{
        let index =listcheck.indexOf(23900);
        listcheck.splice(index, 1);
        console.log(listcheck); 
    }  
});
checkAmazon.addEventListener('click', function() {
    let objAmazon = plataforma;
    if (checkAmazon.checked) {
        objAmazon.nombre = "Amazon";
        objAmazon.costo = 14900; 
        listcheck.push(objAmazon.costo);
        console.log(listcheck); 
    }else{
        let index =listcheck.indexOf(14900);
        listcheck.splice(index, 1);
        console.log(listcheck); 
    }
});
checkPlex.addEventListener('click', function() {
    let objPlex = plataforma;
    if (checkPlex.checked) {
        objPlex.nombre = "Plex";
        objPlex.costo = 9000; 
        listcheck.push(objPlex.costo)
        console.log(listcheck); 
    }else{
        let index =listcheck.indexOf(9000);
        listcheck.splice(index, 1);
        console.log(listcheck); 
    }
});
//Función para evitar el boton enter en el input
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=number]').forEach( node => node.addEventListener('keypress', e => {
      if(e.keyCode == 13) {
        e.preventDefault();
      }
    }))
  });

