export default class Operaciones {
    numero1: number
    numero2: number

    constructor(numero1: number, numero2: number) {
        this.numero1 = numero1
        this.numero2 = numero2
    }

    setNumero1(numero1: number) { this.numero1 = numero1 }
    getNumero1() { return this.numero1 }

    setNumero2(numero2: number) { this.numero2 = numero2 }
    getNumero2() { return this.numero2 }

    // OTROS METODOS

    suma() { return this.numero1 + this.numero2 }
    resta() { return this.numero1 - this.numero2 }
    multipicacion() { return this.numero1 * this.numero2 }
    division() { return this.numero1 / this.numero2 }

}


