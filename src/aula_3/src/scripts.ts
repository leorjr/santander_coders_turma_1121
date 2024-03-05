
// // COMO TRABALHAR COM OS TIPOS PRIMITIVOS NO TYPESCRIPT?
// // const nome = "leonardo";
// const nome: string = "leonardo";
// const idade: number = 22;
// const programador: boolean = true;
// // const temPets: any = true;
// // const temPets: boolean | number = true;
// // let temPets: null | undefined = undefined;

// // COMO TRABALHAR COM ARRAYS?
// const nomes: string[] = [];
// nomes.push("teste", "teste2");

// const nomesEIdades: Array<string | number> = [];
// nomesEIdades.push(1, "teste");

// const qualquerCoisa: any[] = [];
// qualquerCoisa.push(1, "", true, {})

// console.log(nome)

// // COMO TRABALHAR CRIAR OS TIPOS PERSONALIZADOS INTERFACE E TYPE?
// interface IPessoa {
//     nome?: string
//     idade: number
// }

// const pessoas: IPessoa[] = [];
// // pessoas.push("teste")

// const pessoa: IPessoa = {
//     idade: 23,
//     nome: "teste"
// }

// pessoas.push(pessoa);

// type Conta = {
//     pessoa: IPessoa;
// }

// const conta: Conta = {
//     pessoa
// }

// console.log(conta)


// type Token = string;

// const token: Token = "asdaskldaksl"

// type VerificaToken = (token: Token) => boolean;

// const validarToken: VerificaToken = () => true;


// type Pessoa = {
//     name: string
// }

// type Jovem = {
//     faminto: boolean
// }

// type Usuario = Pessoa & { endereco: string }

// const usuario: Usuario = {
//     name: "asdasd",
//     endereco: ""
// }

// interface IBasePessoaUsuario {
//     Name: string
//     Email: string
//     Apresentar: () => string
// }

// class Pessoa implements IBasePessoaUsuario {
//     Name: string;
//     Email: string;
//     Idade: number;

//     constructor(name: string, email: string) {
//         this.Name = name;
//         this.Email = email;
//         this.Idade = 0
//     }

//     Apresentar() {

//         return ""
//     };

//     FazerAniversario(){

//     }
// }

// class Usuario implements IBasePessoaUsuario {
//     Name: string = "";
//     Email: string = "";

//     constructor(name: string, email: string) {
//         this.Name = name;
//         this.Email = email;
//     }
// }

// const imprimirPessoa = (pessoaOuUsuario: IBasePessoaUsuario) => {
//     console.log(`nome: ${pessoaOuUsuario.Name} - email: ${pessoaOuUsuario.Email}`)
// }

// const pessoa = new Pessoa("leo", "xxxxx");
// imprimirPessoa(pessoa);

// const usuario = new Usuario("user", "yyyy");
// imprimirPessoa(usuario);

// interface Pessoa {
//     nome: string
// }

// interface Usuario extends Pessoa {
//     idade: number
// }

// const pessoa: Pessoa = {
//     nome: "teste"
// }

// const usuario: Usuario = {
//     nome: "teste",
//     idade: 12
// }

// const pessoa: Pessoa = {

// }

// interface ICachorro {
//     idade: number | string
//     // pelugem: string
// }

// type ICachorro = {
//     nome: string
//     pelugem: string
// }

// const cachorro: ICachorro = {
//     // nome: "snoop",
//     // pelugem: "branco e preto"
//     idade: "1"
// }



// if (cachorro.idade === 1) {
//     console.log('é o snoop');
// }

// type Token = string;

// const validaToken = (token: string) => token.length >= 30;





