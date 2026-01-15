let palos = ["C","T","P","R"]
let baraja = []

for (let index = 0; index < palos.length; index++) {
    const palo = palo[index];
    for(let index1 = 1;index1 <14;index1++){
        switch(index1){
            case 11:
            break;
            case 12:
            break;
            case 13:
            default:
            baraja.push(`${index1}${palos[palo]}`)
            break;
        }
    }
}


