/**
 * Precisamos criar um sistema de gerenciamento de alunos para uma escola. 
 * Crie uma classe pessoa com os atributos nome, cpf, data de nascimento. 
 * A partir disso, crie uma classe Aluno, que herde os atributos de pessoa e, 
 * ainda, que implemente os atributos numero de matrícula, matricula ativa. 
 * Crie métodos na classe aluno para ativar ou desativar uma matrícula do aluno;
*/

import { v4 as uuidv4 } from 'uuid';

interface INovaPessoa {
    nome: string
    cpf: string
    dataNascimento: string
}

class Pessoa {
    private _nome: string;
    private _cpf: string;
    private _dataNascimento: string;

    constructor(novaPessoa: INovaPessoa) {
        this._nome = novaPessoa.nome
        this._cpf = novaPessoa.cpf
        this._dataNascimento = novaPessoa.dataNascimento
    }

    get nome(): string {
        return this._nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    get dataNascimento(): string {
        return this._dataNascimento;
    }
}

class Aluno extends Pessoa {
    private _numeroMatricula: string;
    private _matriculaAtiva: boolean;

    constructor(novaPessoa: INovaPessoa) {
        super(novaPessoa)
        this._matriculaAtiva = true;
        this._numeroMatricula = uuidv4()
    }

    get numeroMatricula(): string {
        return this._numeroMatricula;
    }

    get matriculaAtiva(): boolean {
        return this._matriculaAtiva;
    }

    alterarEstadoAluno() {
        if (!this._matriculaAtiva) {
            console.log(`não foi possível inativar uma matricula já inativa anteriormente`)
            return
        }

        this._matriculaAtiva = false
    }
}

const pessoa: INovaPessoa = {
    nome: "Leo",
    cpf: "000.000.000.00",
    dataNascimento: "02-02-1997"
}

const aluno = new Aluno(pessoa)
console.log(aluno)