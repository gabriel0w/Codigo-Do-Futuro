const filmes = require('./database')

//deseja buscar um filme?
const readline = require('readline-sync')
const firstInput = readline.question('Deseja buscar um filme? S/N')

if (firstInput.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis')
    console.log('Drama | Ficção científica | Musical | Mistério')

    const genderInput = readline.question('Qual gênero deseja escolher?')

    const retorno = filmes.filter(filme => filme.genero === genderInput)

    console.table(retorno)
} else {
    const filmesOrdenados = filmes.sort((a,b) => a.tempo - b.tempo)
    console.log('Tem certeza? Veja nosso catálogo com todos filmes disponíveis no momento!')
    console.table(filmesOrdenados)
}