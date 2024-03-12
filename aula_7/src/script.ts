interface IObjetoPessoa {
    nome: string;
    idade: number;
    apresentarInformacoes(): void;
}

const objetoPessoa: IObjetoPessoa = {
    nome: "teste",
    idade: 23,
    apresentarInformacoes() {
        console.log("testando...")
    },
}

objetoPessoa.apresentarInformacoes();

abstract class Pessoa {
    private _nome: string;
    private _idade: number;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    get nome(): string {
        return this._nome;
    }

    get idade(): number {
        return this._idade;
    }

    abstract apresentarInformacoes(): void;

    fazerAniversario(): void {
        this._idade += 1;
    }
}

class Aluno extends Pessoa {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    apresentarInformacoes(): void {
        console.log(`o nome do aluno: ${this.nome} - a idade do aluno: ${this.idade}`)
    }
}

class Professor extends Pessoa {

    constructor(nome: string, idade: number) {
        super(nome, idade);
    }

    apresentarInformacoes(): void {
        console.log(`o nome do professor: ${this.nome} - a idade do professor: ${this.idade}`)
    }
}

interface INovaPessoa {
    nome: string
    idade: number
}

const novoAluno: INovaPessoa = {
    nome: "jose",
    idade: 40
}

// const pessoa = new Pessoa("teste", 20);
const aluno = new Aluno("jose", 40);
const professor = new Professor("ivirson", 30);

// pessoa.apresentarInformacoes()
aluno.apresentarInformacoes()
professor.apresentarInformacoes()

abstract class Conta {
    _saldo: number;

    constructor() {
        this._saldo = 0
    }

    abstract calcularTaxaJuros(taxaMercado: number): number;
}

class ContaCorrente extends Conta {

    constructor() {
        super()
    }

    calcularTaxaJuros(taxaMercado: number): number {
        const taxaBanco: number = 10;
        return taxaBanco * taxaMercado;
    }
}

class ContaPoupanca extends Conta {

    constructor() {
        super()
    }

    calcularTaxaJuros(taxaMercado: number): number {
        const taxaBanco: number = 5;
        return taxaBanco * taxaMercado;
    }
}

