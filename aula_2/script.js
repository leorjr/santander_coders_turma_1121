//  DEMONSTRAÇÃO DE COMO FUNCIONA A PALAVRA RESERVADA THIS

// const texto = "Este texto será impresso";

// class Mensagem {
//     texto = "Não teste";
//     exibir() {
//         // console.log(texto);
//         console.log(this.texto);
//     }
// }

// let mensagem = new Mensagem();

// mensagem.exibir();

//  DEMONSTRAÇÃO DE COMO FUNCIONA O MÉTODO CONSTRUTOR

// class Pessoa {
//     Nome;
//     Idade;

//     constructor(nome, idade) {
//         if (nome == "") {
//             throw new Error("você precisa passar um nome")
//         }

//         this.Nome = nome;
//         this.Idade = idade;
//     }
// }

// const pessoa = new Pessoa("leo", 22)
// console.log(pessoa.Nome)


//  DEMONSTRAÇÃO DE COMO FUNCIONAM AS PROPRIEDADES PRIVADAS E SEUS MÉTODOS ACESSORES
class Conta {
    #Titular
    #Saldo = 0
    #Ativa

    constructor(titular) {
        this.#Titular = titular;
        this.#Ativa = true;
    }

    get titular() {
        return this.#Titular
    }

    set titular(novoTitular) {
        this.#Titular = novoTitular;
    }

    #imprimirTitular() {
        console.log(`titular: ${this.#Titular}`)
    }

    imprimirInformacoes() {
        console.log(`conta{titular=${this.#Titular}, saldo=${this.#Saldo}, contaAtiva=${this.#Ativa}}`)
        this.#imprimirTitular()
    }
}

const conta = new Conta("leonardo")

conta.imprimirInformacoes()
// conta.#Ativa = "teste"

console.log(conta.titular)
conta.titular = "novo titular"
console.log(conta.titular)

