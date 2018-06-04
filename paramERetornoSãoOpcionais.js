// Parametros e Retorno São opcionais


function area(largura, altura) {
    const area = largura * altura
    if (area >= 20) {
        console.log(`Valor da area = ${area} m²`)
    } else {
        return area
    }
}
console.log(area(2, 2))
console.log(area(2, 2, 3, 6))
console.log(area())
console.log(area(6))
console.log(area())
console.log(area(4, 6))