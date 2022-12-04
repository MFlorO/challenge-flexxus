// 1. Crear un algoritmo que muestre los números impares entre el 0 y el 100.

const impar = () => {

    let arrImpar = []

    for(let i=0; i<100; i++){
        if( i % 2 !== 0 ) arrImpar.push(i)
    }

    console.log(arrImpar)  
}

impar()