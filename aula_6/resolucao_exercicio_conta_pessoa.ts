
// class Conta {
//     private _nomeTitular: string;
//     private _saldo: number;
//     private _contaAtiva: boolean;

//     constructor(nomeTitular: string) {

//         if (nomeTitular.length < 4)
//             throw new Error("nome do titular precisa ter pelo menos 4 caracteres")

//         this._nomeTitular = nomeTitular;
//         this._saldo = 0
//         this._contaAtiva = true
//     }

//     get nomeDoTitular(): string {
//         return this._nomeTitular;
//     }

//     get saldo(): number {
//         return this._saldo;
//     }

//     inativarConta(): boolean {
//         if (!this._contaAtiva)
//             return false

//         if (this._saldo > 0)
//             return false

//         this._contaAtiva = false
//         return true
//     }

//     depositar(valor: number): boolean {
//         if (!this._contaAtiva)
//             return false

//         if (valor < 0)
//             return false

//         this._saldo += valor;
//         return true
//     }

//     sacar(valor: number): boolean {
//         if (!this._contaAtiva)
//             return false

//         if (valor < 0)
//             return false

//         this._saldo -= valor;
//         return true
//     }
// }

// class Pessoa {
//     private _nome: string;
//     private _idade: number;
//     private _cpf: string;

//     constructor(nome: string, idade: number, cpf: string) {
//         if (nome.length < 4)
//             throw new Error("nome do titular precisa ter pelo menos 4 caracteres")

//         if (idade < 18)
//             throw new Error("para abrir uma conta, você precisa ter ao menos 18 anos")

//         const cpfTratado: string = this.tratarCPF(cpf)

//         if (cpfTratado.length != 11)
//             throw new Error("necessario passar um cpf com 11 dígitos")

//         this._nome = nome;
//         this._idade = idade;
//         this._cpf = cpfTratado;
//     }

//     private tratarCPF(cpf: string): string {
//         return cpf.replaceAll(".", "").replaceAll("-", "").trim()
//     }

//     get nome(): string {
//         return this._nome;
//     }

//     get cpf(): string {
//         return this._cpf;
//     }

//     get idade(): number {
//         return this._idade;
//     }

//     apresentarInformacoes(): string {
//         return `${this._nome} - ${this._idade} - ${this._cpf}`
//     }
// }


// class Conta {
//     private _titular: Pessoa;
//     private _saldo: number;
//     private _contaAtiva: boolean;

//     constructor(titular: Pessoa) {
//         this._titular = titular;
//         this._saldo = 0
//         this._contaAtiva = true
//     }

//     get nomeDoTitular(): string {
//         return this._titular.nome;
//     }

//     get saldo(): number {
//         return this._saldo;
//     }

//     inativarConta(): boolean {
//         if (!this._contaAtiva)
//             return false

//         if (this._saldo > 0)
//             return false

//         this._contaAtiva = false
//         return true
//     }

//     depositar(valor: number): boolean {
//         if (!this._contaAtiva)
//             return false

//         if (valor < 0)
//             return false

//         this._saldo += valor;
//         return true
//     }

//     sacar(valor: number): boolean {
//         if (!this._contaAtiva)
//             return false

//         if (valor < 0)
//             return false

//         this._saldo -= valor;
//         return true
//     }

//     transferirSaldo(contaDestino: Conta, valor: number): boolean {
//         if (this.sacar(valor)) {
//             contaDestino.depositar(valor)
//             return true
//         }
//         return false
//     }
// }

// const leonardo = new Pessoa("leonardo", 33, "044.234.546-65")
// const joazinho = new Pessoa("joazinho", 18, "555.234.546-65")

// const contaDoLeonardo = new Conta(leonardo)
// const contaDoJoaozinho = new Conta(joazinho)

// console.log(`saldo inicial do leonardo antes da transferencia: R$ ${contaDoLeonardo.saldo}`)
// console.log(`saldo inicial do joãozinho antes da transferencia: R$ ${contaDoJoaozinho.saldo}`)

// contaDoLeonardo.depositar(100)
// contaDoLeonardo.transferirSaldo(contaDoJoaozinho, 20)

// console.log(`saldo do leonardo depois da transferencia: R$ ${contaDoLeonardo.saldo}`)
// console.log(`saldo do joaozinho depois da transferencia: R$ ${contaDoJoaozinho.saldo}`)


// console.log(leonardo.apresentarInformacoes())
// console.log(joazinho.apresentarInformacoes())

class Conta {
    _nomeTitular: string;
    _saldo: number;

    constructor(nomeTitular: string) {
        if (nomeTitular.length < 4)
            throw new Error("nome do titular precisa ter pelo menos 4 caracteres")

        this._nomeTitular = nomeTitular;
        this._saldo = 0;
    }

    // apresentarInformacoes(): string {
    //     return `${this._nomeTitular} - ${this._saldo}`;
    // }
}

class ContaPJ extends Conta {
    cnpj: string;

    constructor(nomeTitular: string, cnpj: string) {
        // if(cnpj.length < 20){
        //     throw...
        // }
        super(nomeTitular)
        this.cnpj = cnpj;
    }
}

class ContaPF extends Conta {
    cpf: string;

    constructor(nomeTitular: string, cpf: string) {
        // if(cpf.length < 11){
        //     throw...
        // }
        super(nomeTitular)
        this.cpf = cpf;
    }
}

class ContaCorrente extends Conta {
    // _nomeTitular: string;
    // _saldo: number;

    // constructor(nomeTitular: string) {
    //     this._nomeTitular = nomeTitular;
    //     this._saldo = 0;
    // }

    // apresentarInformacoes(): string {
    //     return `${this._nomeTitular} - ${this._saldo}`;
    // }

    taxaJuros: number;

    constructor(nomeTitular: string, taxaJuros: number) {
        super(nomeTitular)
        this.taxaJuros = taxaJuros;
    }
}

class ContaPoupanca extends Conta {
    comRendimento: boolean;

    constructor(nomeTitular: string) {
        super(nomeTitular)
        this.comRendimento = true;
    }
}

class ContaTeste extends ContaPoupanca {
    constructor(nomeTitular: string) {
        super(nomeTitular)
    }
}

const contaCorrente = new ContaPoupanca("leo")
const contaTeste = new ContaTeste("teste")



// contaCorrente.taxaDeJuros()
// conta._saldo
// contaCorrente.taxaJuros

