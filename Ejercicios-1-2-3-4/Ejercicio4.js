// Dados los siguientes array, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando para tal fin una única línea de código. 

const x = ["n", "bro", "c", "|"]; 

const y = ["d", "n", "l", "bro", "g"];

// ResultadoEsperado = "d", "l", "g"

//Primero tengo que mapear "y". Comparar si esa "y" mapeada existe en "x". devolver si no existe


y.map( yy => x.includes(yy) === false? console.log(yy) : null )

