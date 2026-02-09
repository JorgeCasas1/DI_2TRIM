console.log("Esto se lanza desde un fichero js");
// tipo let var const - nombre - valor
let nombre = "George"; // string
let edad = 23; // number - int / float
let altura = 1.78; // number - int / float
let asignaturas = []; // object - array
let experiencia = true; // boolean
let fechaNacimiento = new Date(); // object
let direccion; // undefined
let equipo = null; // object - null
// NaN -> Not a Number
console.log(`Mi nombre es ${nombre} y tengo ${edad} y mido ${altura}cm`);

alert(`Este es mi primer programa con JS, por cierto me llamo ${nombre}`);

/*f(confirm("Estás seguro que quieres continuar")){
  alert("Estás seguro de que quieres continuar")
}
else{
  alert("Has seleccionado no continuar")
}*/

let nombreInput = prompt("Introduce tu nombre");
if(nombreInput!=null && nombreInput.length){
  alert("Has contestado que sí")
}else{
  alert("Has contestado que no")
}


const dni = "1234A";
if (true) {
  console.log(nombre);
  var apellido = null;
}

console.log("El apellido es= " + apellido);
console.log("El dni es= " + dni);


