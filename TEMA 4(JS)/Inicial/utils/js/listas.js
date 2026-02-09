let alumnos = ["Borja","Maria","Pepe"]
console.log(alumnos)

// insertar elementos
alumnos.push("Juan","Marta","Pepa") // añade los elementos que queramos a la lista al final y retorna el nuevo numero de elementos de la lista
alumnos.unshift("Hola","Adios") // cuantos elementos quieres agregar al principio de la lista
alumnos[9] = "Pepi"

// eliminar elmentos
alumnos.pop() // elimina el ultimo elemento de la lista y lo retorna
alumnos.shift() // elimina el ultimo de la lista y lo retorna

console.log(alumnos)

// consultar elementos
// forEach tiene tres parametros-> item, index, lista
// Primero será el elemento, luego el indice y por ultimo el objeto recorrido
alumnos.forEach((item, index) => {
    console.log(`${index} - ${item}`)
})

// find-> devuelve el elmento si no lo encuentra o undefined sino lo encuentra
let alumnoEncontrado = alumnos.find((item) =>{
    // lógica por tanto el return se ha de poner siempre que sea más de una línea de coódigo
    return item == "JORGE"
})
let alumnoEncontradoVersionCorta = alumnos.find((item) =>
    // lógica por tanto el return se ha de poner siempre que sea más de una línea de código
item == "Pepa")

console.log(alumnoEncontradoVersionCorta)

// filter -> devuelve lista vacia
let alumnosEncontrados = alumnos.filter((item) => item.length == 4)
alumnosEncontrados.forEach((item) => console.log(item))

// shuffle
alumnos = _.shuffle(alumnos)
console.log(alumnos)

// split
let palabra = "jorge@gmail.com"
// palabra.charAt()
palabra.substring()