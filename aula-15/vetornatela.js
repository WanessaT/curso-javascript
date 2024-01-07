let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*

Forma tradicional:

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// Forma simplificada:

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}