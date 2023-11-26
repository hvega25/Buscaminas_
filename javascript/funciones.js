//Función enlazada al botón que inicia el juego e invoca a las funciones necesarias
function iniciarPartida() {
  localStorage.clear();
  let filas = parseInt(prompt("Ingresa cuantas filas deseas: "));
  let columnas = parseInt(prompt("Ingresa cuantas colunmas deseas: "));

  if (filas < 10 && columnas < 10) {
    filas = 10;
    columnas = 10;
  }
  if (filas > 30 && columnas > 30) {
    filas = 30;
    columnas = 30;
  }

  crear_tabla(filas, columnas);
  setMinas(filas, columnas);
 


}

//Función que crea la tabla 
function crear_tabla(filas, columnas) {
 
  var table = document.getElementById("taulell");
  var tTable = "";
  tTable = tTable + `<table `;
  for (var l = 1; l <= filas; l++) {
    tTable = tTable + `<tr>`;
    for (var t = 1; t <= columnas; t++) {
      tTable =
        tTable +
        `<td   id="td-${l}${t}" data-mina="false" >  <img id="ima-${l}${t}" data-id="${l}${t}" onclick="abrir_casilla(this, '${l}', '${t}')" src="/imagenes/fons20px.jpg"> </td>`;
    }
    tTable = tTable + `</tr>`;
  }
  
  tTable = tTable + `</table> `;
  tTable =
    tTable +
    `<style>
  table, th, td {
    border:1px solid black;
  }
  </style>`;

  tTable = tTable + ``;
  table.innerHTML = tTable;
}

//Función que abre cada casilla y muestra sus datos
function abrir_casilla(mina, filas, columnas) {
  let mina1 = mina.getAttribute("data-id"); 
  console.log(mina1);
 let existe_mina = document.getElementById(`td-${filas}${columnas}`);
 let g = existe_mina.getAttribute("data-mina");
 //Para recuperar una imagen
 let imagen = document.getElementById(`ima-${filas}${columnas}`);
  
  console.log(`Esta es la fila ${filas} y la ${columnas}`);
  //console.log(    `Esto es la casilla que se cliqueo ${mina1} esto es el localStorage ${localStorage.getItem(`${filas}${columnas}`)} y existe mina ${g}`);

  if(`${mina1}` ==  `${localStorage.getItem(`${filas}${columnas}`)}`){
    imagen.src = "/imagenes/mina20px.jpg";
    console.log("Hay mina");
  }else{
    console.log("No hay");
  }

}

function setMinas(filas, columnas) {
  var totalCasillas = filas * columnas;
  var porcentaje_minas = (totalCasillas * 17) / 100;
  var contador_minas = 0;
  var posicion_minas = [];

  while (contador_minas < porcentaje_minas) {
    var pos = Math.floor(Math.random() * totalCasillas) ;
    var anterior = pos;
   if(pos != 0 ){
    console.log(pos);
    localStorage.setItem(pos, pos);
    contador_minas++;
   }
    
    /*posicion_minas.push(
      Math.floor(Math.random() * filas) +"" + (Math.floor(Math.random() * columnas) + "")
    ); */
    
  }

  console.log(pos);
  //return posicion_minas;
}

//Función para pruebas
/** function pruebas() {
  var filas = 20;
  var columnas = 20;

  for (var g = 1; g <= filas; g++) {
    for (var y = 1; y <= columnas; y++) {
      localStorage.setItem(`${g}${y}`, `Se ingreso esto ${g} con ${y}`);
    }
  }
  for (var g = 1; g <= filas; g++) {
    for (var y = 1; y <= columnas; y++) {
      console.log(localStorage.getItem(`${g}${y}`));
    }
  }
}
*/

