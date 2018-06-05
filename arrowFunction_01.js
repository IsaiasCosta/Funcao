//Função Arrow 

let dobro = function (a) {
    return 2 * a
}
console.log(dobro(6))

// A mesma função com arrow 

dobro = (a) => {
    return 2 * a
}

console.log(dobro(4))
//Função Arrow reduzda com retorno implicito

dobro = a => 2 * a
console.log(dobro(41))

// 2º exemplo 

let hello = function () {
    return 'Mundo !'
}

hello = () => 'Mundo !'
hello = _ => 'Mundo !' //possui parametro

console.log(hello())