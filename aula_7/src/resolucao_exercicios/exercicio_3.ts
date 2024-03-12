/**
 * Implemente uma classe chamada “JogoAdivinhacao” que representa um jogo de adivinhação.
 *  Essa classe deve gerar um número aleatório entre 0 e 10, permitir que o jogador faça 
 * palpites e informar se o palpite está correto, ou informando se é maior ou menor que 
 * o número gerado (utilizar métodos e atributos estáticos, aqui); 
 */

import * as readlineSync from 'readline-sync';

interface IPlacar {
    maquina: number
    jogador: number
}

class JogoAdivinhacao {

    jogoEmExecucao: boolean = true;
    private palpiteJogador: number = 0
    private numeroSorteado: number = 0
    private placar: IPlacar = {
        maquina: 0,
        jogador: 0
    }

    apresentarOpcoes() {
        console.log(`###################################\n`)
        console.log(`Bem vindo ao jogo da adivinhação!\n`)
        console.log(`###################################\n`)
        console.log(`Escolha a opção desejada: \n`)
        console.log(`1 - jogar uma rodada;`)
        console.log(`2 - placar atual;`)
        console.log(`3 - sair do jogo;\n`)
    }

    selecionarOpcao(inputUsuario: number) {
        switch (inputUsuario) {
            case 1:
                this.jogarUmaRodada()
                break;
            case 2:
                this.apresentarPlacarAtual()
                break;
            case 3:
                this.finalizarJogo()
                break;
            default:
                console.log("opção inválida")
        }
    }

    sortearNumero(): number {
        const randomDecimal: number = Math.random();
        return Math.floor(randomDecimal * 11);
    }

    solicitarPalpiteJogador(): number {
        const inputUsuario: number = Number(readlineSync.question("Informe seu palpite: "))
        return inputUsuario;
    }

    jogarUmaRodada() {
        this.numeroSorteado = this.sortearNumero();
        this.palpiteJogador = this.solicitarPalpiteJogador();

        console.log("")
        console.log(`número sorteado: ${this.numeroSorteado}`)
        console.log(`seu palpite: ${this.palpiteJogador}`)

        if (this.numeroSorteado == this.palpiteJogador) {
            console.log(`Parabéns, você ganhou!`)
            this.placar.jogador += 1
            return;
        }

        console.log(`Não foi desta vez. Tente novamente... :(`)
        this.placar.maquina += 1
        console.log("")
    }

    apresentarPlacarAtual() {
        console.log("")
        console.log(`jogador: ${this.placar.jogador} X máquina: ${this.placar.maquina}`)

        if (this.placar.jogador > this.placar.maquina)
            console.log(`Tá indo bem, hein?!`)

        if (this.placar.maquina > this.placar.jogador)
            console.log(`Vai perder para uma máquina???`)

        if (this.placar.maquina == this.placar.jogador)
            console.log(`Esse jogo ta meio que igual, não acha?`)

        console.log("")
    }

    finalizarJogo() {
        console.log("")
        console.log("Obrigado por jogar, volte sempre!");
        console.log("")
        this.jogoEmExecucao = false
    }
}

const jogoAdivinhacao = new JogoAdivinhacao()

while (jogoAdivinhacao.jogoEmExecucao) {
    jogoAdivinhacao.apresentarOpcoes()
    const inputUsuario: number = Number(readlineSync.question())
    jogoAdivinhacao.selecionarOpcao(inputUsuario);
}


