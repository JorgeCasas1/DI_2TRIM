saludar("Borja")
console.log(`La suma de los dos numero es ${sumar(4,10)}`)

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

// No puede haber un valor por defecto si es el primero
function sumar(paraUno,paraDos){
    return p1+p2
}

function sumaFantasma(){
    let suma;
    for (let index = 0; index < arguments.length; index++) {
        suma += arguments[index];  
    }
    console.log(`La suma es ${suma}`)
}

// El resultado debe devolverse con un return para tener el resultado.
let sumaFlecha = (p1,p2) =>{
    console.log(`La suma de los elementos ${p1} y ${p2} es  ${p1+p2}`)
}
// El resultado nos lo da del tirón el resultado
let sumaFlechaRetorno = (p1,p2) => p1+p2;

sumaFlcha(1,4)