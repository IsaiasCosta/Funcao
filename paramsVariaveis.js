// Parametros Variaveis - arguments é um arrays interno de uma função

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma(3, 8))
console.log(soma(3, 8, 9, 5, 8, 4))
console.log(soma(8))



