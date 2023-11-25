function iniciarPartida() {
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

  var g = setMinas(filas, columnas);

  for (var a = 1; a < g.length; a++) {
    localStorage.setItem(`${filas}${columnas}`, g[a]);
  }

  console.log(g);
}

function crear_tabla(filas, columnas) {
  var table = document.getElementById("taulell");
  var tTable = "";
  tTable = tTable + `<table `;
  for (var l = 1; l <= filas; l++) {
    tTable = tTable + `<tr>`;
    for (var t = 1; t <= columnas; t++) {
      tTable =
        tTable +
        `<td    data-mina="false" >  <img  data-id="${l}${t}" onclick="abrir_casilla(this, '${l}', '${t}')" src="/imagenes/fons20px.jpg"> </td>`;
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

function abrir_casilla(mina, filas, columnas) {
  let mina1 = mina.getAttribute("data-id");
  console.log(`Esta es la fila ${filas} y la ${columnas}`);
  console.log(
    `Esto es la casilla que se cliqueo ${mina1} esto es el localStorage ${localStorage.getItem(
      `${filas}${columnas}+""`
    )}`
  );
}

function setMinas(filas, columnas) {
  var totalCasillas = filas * columnas;
  var porcentaje_minas = (totalCasillas * 17) / 100;
  var contador_minas = 0;
  var posicion_minas = [];

  while (contador_minas < porcentaje_minas) {
    posicion_minas.push(
      Math.floor(Math.random() * filas) +
        "" +
        (Math.floor(Math.random() * columnas) + "")
    );
    contador_minas++;
  }

  return posicion_minas;
}
