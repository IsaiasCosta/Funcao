// Função bind uso do This

const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar()//conflito entre paradigmas: funcional e OO

const falarDePessoa =pessoa.falar.bind(pessoa) // Bind é o metodo responsavel por amarrar o objeto para ser o dono da execução 
falarDePessoa()