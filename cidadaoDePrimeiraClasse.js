// Função em JS Firts-Class Object (Citizens)
// High-=orden function

// Criar funçaõ em forma literal
function fun1() {

}

//Armazenar função em uma varial, função anonima

const fun2 = function () {

}

//Armazenar em um Array 

const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](12, 6))

//Armazenar em um atributi objeto 

const objeto = {}
objeto.eu = function () { return ' Fui' }
console.log(objeto.eu())

//Passando Função como Parametro 

function func3(func4) {
    func4()
}
func3(function () { console.log("Executando um função dentro da outra !!!") })

// Uma função pode retornar e contem um função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(5, 6)(8)
