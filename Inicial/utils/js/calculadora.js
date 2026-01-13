/* 
1 Pide nombre
2. Pide operando 1
"Comprobar que es correcto -> numero"
3. Pide operando 2
" Comprobar que es correcto el numero
4. Muestra alert con nombre y todas las operaciones."
*/
// is NaN es algo que no es un numero

let nombre= prompt("Introduce tu nombre");

let primerOperando = prompt("Introduce un numero");

if(!isNaN(primerOperando) ) {
    let segundoOperando = prompt("Introduce otro numero");
    if(!isNaN(segundoOperando) ) {
        
        Swal.fire({
            title: "Operaciones realizadas",
            text: `El resultado de la suma es: ${Number(primerOperando) + Number(segundoOperando)}
              \nEl resultado de la resta es: ${Number(primerOperando) - Number(segundoOperando)}
              \nEl resultado de la multiplicacion es: ${Number(primerOperando) * Number(segundoOperando)}
              \nEl resultado de la division es: ${Number(primerOperando) / Number(segundoOperando)}`,
            icon: "success",
        });   
        /* alert(`El resultado de la suma es: ${Number(primerOperando) + Number(segundoOperando)}
        \nEl resultado de la resta es: ${Number(primerOperando) - Number(segundoOperando)}
        \nEl resultado de la multiplicacion es: ${Number(primerOperando) * Number(segundoOperando)}
        \nEl resultado de la division es: ${Number(primerOperando) / Number(segundoOperando)}`); */
            
    } else{
        alert("No has introducido un numero valido");
    }
}else{
    alert("No has introducido un numero valido");
}




