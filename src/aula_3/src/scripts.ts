
// COMO TRABALHAR COM OS TIPOS PRIMITIVOS NO TYPESCRIPT?
// const nome = "leonardo";
const nome: string = "leonardo";
const idade: number = 22;
const programador: boolean = true;
// const temPets: any = true;
// const temPets: boolean | number = true;
// const temPets: null | undefined = undefined;

// COMO TRABALHAR COM ARRAYS?
const nomes: string[] = [];
nomes.push("teste", "teste2");

const nomesEIdades: Array<string | number> = [];
nomesEIdades.push(1, "teste");

const qualquerCoisa: any[] = [];
qualquerCoisa.push(1, "", true, {})

console.log(nome)

// COMO TRABALHAR CRIAR OS TIPOS PERSONALIZADOS INTERFACE E TYPE?
interface IPessoa {
    nome: string
    idade: number
}

const pessoas: IPessoa[] = [];
// pessoas.push("teste")

const pessoa: IPessoa = {
    nome: "teste",
    idade: 2
}

pessoas.push(pessoa);

type Conta = {
    pessoa: IPessoa;
}

const conta: Conta = {
    pessoa
}

console.log(conta)