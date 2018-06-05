//Função Arrow 3

let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)


// comparando com bind

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// comparando com arrow
let comparaComThisArrow = param => console.log(this === param) //função arrow não aponta para o global
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//Comparando Arrow passado Bind

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)