/**
 * Implemente uma classe chamada “Produto” que possua atributos para armazenar o nome, 
 * o preço e a quantidade em estoque. Adicione métodos para calcular o valor total em 
 * estoque e verificar se o produto está disponível (caso esteja zerado, o mesmo deverá 
 * estar setado como indisponível no atributo específico);
 */

interface INovoProduto {
    nome: string
    preco: number
    quantidade?: number;
}

class Produto {
    private _nome: string;
    private _preco: number;
    private _quantidade: number;
    private _produtoDisponivel: boolean;

    constructor(novoProduto: INovoProduto) {
        this._nome = novoProduto.nome;
        this._preco = novoProduto.preco;
        this._quantidade = novoProduto.quantidade ?? 0;
        this._produtoDisponivel = this._quantidade > 0 ? true : false;
    }

    get nome(): string {
        return this._nome;
    }

    get preco(): number {
        return this._preco;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    set quantidade(novoEstoque: number) {
        this._quantidade += novoEstoque;

        if (!this._produtoDisponivel)
            this._produtoDisponivel = true
    }

    calculaValorTotalEstoque(): string {
        if (!this._produtoDisponivel)
            return "produto indisponível no estoque"

        return (this._quantidade * this._preco).toFixed(2);
    }

    reajusteValorProduto(novoValor: number) {
        if (!this._produtoDisponivel)
            return "produto indisponível no estoque"

        this._preco = novoValor;
    }

    apresentarInformacoesProduto(): string {
        return `produto: ${this._nome} - R$ ${this._preco} - produto disponível em estoque? ${this._produtoDisponivel ? "sim" : "não"} - quantidade em estoque: ${this._quantidade} unidades`
    }

}

const novoProduto: INovoProduto = {
    nome: "sabao",
    preco: 2.99,
    quantidade: 0
}

const produto = new Produto(novoProduto);
console.log(produto.calculaValorTotalEstoque())
console.log(produto.apresentarInformacoesProduto())

console.log("######")

produto.quantidade = 10
produto.reajusteValorProduto(10.99)
console.log(produto.calculaValorTotalEstoque())
console.log(produto.apresentarInformacoesProduto())