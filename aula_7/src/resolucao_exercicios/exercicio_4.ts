/**
 * Estamos criando um sistema para uma biblioteca para gerenciar os 
 * livros aos quais temos registrados na mesma. 
 * Crie uma classe Livro com os atributos título, autor e ano_publicacao. 
 * Crie uma classe Biblioteca que armazena uma lista de livros.
 *  Agora, você deverá criar os métodos para adicionar livros à biblioteca, 
 * remover livros da biblioteca e, por fim, pesquisar livros por título ou autor;
 */

interface INovoLivro {
    titulo: string
    autor: string
    anoPublicacao: number
}

class Livro {
    private _titulo: string;
    private _autor: string;
    private _anoPublicacao: number;

    constructor(novoLivro: INovoLivro) {
        this._titulo = novoLivro.titulo;
        this._autor = novoLivro.autor;
        this._anoPublicacao = novoLivro.anoPublicacao;
    }

    get titulo(): string {
        return this._titulo;
    }

    get autor(): string {
        return this._autor;
    }

    get anoPublicacao(): number {
        return this._anoPublicacao;
    }
}

class Biblioteca {
    static livrosDisponiveis: Livro[] = []

    adicionar(livro: Livro) {
        Biblioteca.livrosDisponiveis.push(livro);
    }

    listar(): Livro[] {
        return Biblioteca.livrosDisponiveis;
    }

    buscarPorAutor(autor: string): Livro | undefined {
        return Biblioteca.livrosDisponiveis.find(
            livro => livro.autor.toLocaleLowerCase() == autor.toLocaleLowerCase()
        )
    }

    buscarPorTitulo(titulo: string): Livro | undefined {
        return Biblioteca.livrosDisponiveis.find(
            livro => livro.autor.toLocaleLowerCase() == titulo.toLocaleLowerCase()
        )
    }

    removerLivro(titulo: string) {
        const indexLivro = Biblioteca.livrosDisponiveis.findIndex(
            livro => livro.titulo.toLocaleLowerCase() == titulo.toLocaleLowerCase()
        )

        if (indexLivro == -1) {
            console.log("livro não encontrado")
            return;
        }

        Biblioteca.livrosDisponiveis.splice(indexLivro, 1)
        console.log("livro removido com sucesso!")
    }
}

const biblioteca = new Biblioteca();

const dadosHarryPotter1: INovoLivro = {
    titulo: "Harry Potter e a Pedra filosofal",
    autor: "JK ROWLING",
    anoPublicacao: 1997
}


const livroHarryPotter1: Livro = new Livro(dadosHarryPotter1);
biblioteca.adicionar(livroHarryPotter1)
console.log(biblioteca.listar());
biblioteca.removerLivro("Harry Potter e a Pedra filosofal")
console.log(biblioteca.listar());