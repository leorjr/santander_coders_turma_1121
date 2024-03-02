class Conta {
    titular;
    static totalContas = 0;

    constructor(nomeTitular) {
        this.titular = nomeTitular;
        Conta.totalContas++;
        Conta.darBoaNoite();
    }

    static darBoaNoite() {
        console.log("boa noite, povo")
    }
}

console.log(Conta.totalContas)

const conta = new Conta("teste")
console.log(Conta.totalContas)

// Conta.totalContas = 1
// console.log(Conta.totalContas)

Conta.darBoaNoite()

