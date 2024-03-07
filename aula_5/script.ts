class Conta {
    private _nomeDoTitular: string;
    private _saldo: number;

    // constructor(nomeDoTitular: string, saldo: number) {
    //     this._nomeDoTitular = nomeDoTitular;
    //     this._saldo = saldo;
    // }

    constructor(conta: IConta) {
        this._nomeDoTitular = conta.nomeTitular;
        this._saldo = conta.saldo;
    }

    get nomeDoTitular(): string {
        return this._nomeDoTitular;
    }

    set nomeDoTitular(novoNomeDoTitular: string) {
        this._nomeDoTitular = novoNomeDoTitular
    }

    get saldo(): number {
        return this._saldo;
    }

    set saldo(novoSaldo: number) {
        if (novoSaldo > 0) {
            this._saldo = novoSaldo
        }
    }
}

// interface IConta {
//     nomeTitular: string;
//     saldo: number;
// }

// const novaConta: IConta = {
//     nomeTitular: "john",
//     saldo: 100
// }

type IConta = {
    nomeTitular: string;
    saldo: number;
}

const novaConta: IConta = {
    nomeTitular: "john",
    saldo: 100
}

const novaConta2: IConta = {
    nomeTitular: "jane",
    saldo: 200
}

const novaConta3 = {
    nomeTitular: "joão",
    saldo: 200,
    ativo: true,

}

// const conta = new Conta(novaConta.nomeTitular, novaConta.saldo)
const conta = new Conta(novaConta);

// const conta = new Conta("leonardo")
// console.log(conta.nomeDoTitular);

// conta.nomeDoTitular = "joão"
// console.log(conta.nomeDoTitular);

