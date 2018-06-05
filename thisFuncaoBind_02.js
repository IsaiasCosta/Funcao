// Função bind- usa bind 
function Pessoa() {
    this.idade = 0
    const self = this //Guardando o valor do thisd em uma constante
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*bind(this)*/, 1000)
}
new Pessoa