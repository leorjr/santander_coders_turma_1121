abstract class FormaGemoetrica {
    constructor() { }

    abstract imprimirNomeFormaGeometrica(): void;
}

class Circulo extends FormaGemoetrica {

    constructor() {
        super()
    }

    imprimirNomeFormaGeometrica(): void {
        console.log(`esta forma gemoétrica é um círculo`)
    }

}

class Triangulo extends FormaGemoetrica {

    constructor() {
        super()
    }

    imprimirNomeFormaGeometrica(): void {
        console.log(`esta forma gemoétrica é um triangulo`)
    }

}

class Quadrado extends FormaGemoetrica {

    constructor() {
        super()
    }

    imprimirNomeFormaGeometrica(): void {
        console.log(`esta forma gemoétrica é um quadrado`)
    }

}