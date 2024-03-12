/**
 * Implemente uma classe chamada “Carro” com atributos para armazenar a marca, 
 * o modelo, se o carro está ligado ou não e a velocidade atual do carro. 
 * Adicione métodos para ligar, desligar, acelerar, frear e exibir a velocidade atual. 
 * REGRA BÁSICA DE VALIDAÇÃO: o carro só poderá acelerar ou frear, caso esteja ligado.
 */

interface INovoCarro {
    marca: string;
    modelo: string;
}

class Carro {
    private _marca: string;
    private _modelo: string;
    private _carroLigado: boolean;
    private _velocidadeAtual: number;

    constructor(novoCarro: INovoCarro) {
        this._marca = novoCarro.marca;
        this._modelo = novoCarro.modelo;
        this._carroLigado = false;
        this._velocidadeAtual = 0;
    }

    get marca(): string {
        return this._marca;
    }

    get modelo(): string {
        return this._modelo;
    }

    get carroLigado(): boolean {
        return this._carroLigado;
    }

    get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    alterarEstadoCarro() {
        this._carroLigado = !this._carroLigado;
    }

    acelerarCarro(velocidadeDesejada: number) {
        if (this._carroLigado)
            this._velocidadeAtual += velocidadeDesejada;
    }

    desacelerarCarro(velocidadeDesejada: number) {
        if (this._carroLigado)
            this._velocidadeAtual += velocidadeDesejada;
    }
}