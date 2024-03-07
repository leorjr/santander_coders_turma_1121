class Pessoa {
    public Nome: string
    private IsAlive: boolean;
    // static NumeroPessoas: number = 10;
    static Idade: number = 33;

    constructor(nome: string) {
        this.Nome = nome;
        this.IsAlive = true;
    }

    apresentar(): string {
        return `meu nome é ${this.Nome} e minha idade ${Pessoa.Idade}`;
    }

    conteAteONumeroRecebido(numero: number) {
        for (let i = 0; i <= numero; i++) {
            console.log(i);
        }
    }

    get isAlive(): boolean {
        return this.IsAlive;
    }

    set isAlive(alive: boolean) {
        this.IsAlive = alive;
    }

}


// const pessoa = new Pessoa("larissa")

let pessoa: Pessoa;
pessoa = new Pessoa("batatinha")

console.log(pessoa.apresentar())
pessoa.conteAteONumeroRecebido(10);
console.log(Pessoa.Idade)
