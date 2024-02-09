class Operaciones {
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

let operacion1 = new Operaciones(23, 21)
let operacion2 = new Operaciones(45, 11)
let operacion3 = new Operaciones(25, 0)
let operacion4 = new Operaciones(56, 31)
let operacion5 = new Operaciones(34, 56)

let list = ["Suma: ",operacion1.getNumero1(), operacion1.getNumero2(), operacion1.suma(),
    "Resta: ", operacion2.getNumero1(), operacion2.getNumero2(), operacion2.resta(),
    "Multiplicacion: ", operacion3.getNumero1(), operacion3.getNumero2(),  operacion3.multipicacion(),
    "Division: ",operacion4.getNumero1(), operacion4.getNumero2(), operacion4.division()]

console.log(list)
