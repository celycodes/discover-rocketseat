/* 
    - Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/


const booksByCategory = [
  {
      category: "Riqueza",
      books: [
          {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
          },
          {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason",
          },
          {
              title: "Pai rico, pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechter",
          },
      ],
  },
  {
      category: "Inteligência Emocional",
      books: [
          {
              title: "Você é Insubstituível",
              author: "Augusto Cury",
          },
          {
              title: "Ansiedade – Como enfrentar o mal do século",
              author: "Augusto Cury",
          },
          {
              title: "Os 7 hábitos das pessoas altamente eficazes",
              author: "Stephen R. Covey",
          },
      ],
  },
]; 

const totalCategorias = booksByCategory.length
console.log('Total de categorias:', totalCategorias)

for (let categoria of booksByCategory) {
    console.log('Total de livros da categoria "' + categoria.category + '" é ' + categoria.books.length)
}

contAutores = () => {
    let autores = [];

    for (let categoria of booksByCategory) {
        for (let livro of categoria.books) {
            if (autores.indexOf(livro.author) == -1) {
                autores.push(livro.author)
            }
        }
    }
    console.log('Total de autores: ' + autores.length)
}

contAutores()

livrosdoAutor = (autor) => {
    let livros = [];

    for (let categoria of booksByCategory) {
        for (let livro of categoria.books) {
            if (livro.author == autor) {
                livros.push(livro.title)
            }
        }
    }
    console.log(`Livros do autor ${autor}: ${livros.join(', ')}`)
}


livrosdoAutor('Augusto Cury')