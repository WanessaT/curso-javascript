let num = [5, 8, 2, 9, 3]

num.push(1) // adiciona número após o último número
num.sort() //ordena do menor ao maior
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // length = conta até o final do índice
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9) // indexOf = Procura o valor dentro do vetor
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}