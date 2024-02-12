
let valorNuevo: number = 0

let valorRetirado: number
export default class Cuenta {
    titular: string
    valorActual: number


    constructor(titular: string, valorActual: number) {
        this.titular = titular
        this.valorActual = valorActual

    }

    setTitular(titular: string) { this.titular = titular }
    getTitular() { return this.titular }

    setValorActual(valorActual: number) { this.valorActual = valorActual }
    getValorActual() { return this.valorActual }

    // OTROS METODOS

    mostrar() {
        let x = console.log(["titular", this.titular,
            "Valor disponible", this.valorActual])
        return x
    }

    

    ingresar(valorIngresar: number) {

        if (valorIngresar >= 0) {

            this.valorActual = this.valorActual + valorIngresar

            let x = console.log("valor con ingreso: ", this.valorActual)
            return x

        } else if (valorIngresar < 0) {
            return "No se puede hacer el ingreso de dinero"
        } else {
            return "Erro al hacer el ingreso"
        }

    }

    retirar(valorRetirar: number) {

        let answer = console.log(['valor inicial: ', this.valorActual,
            'valor ingresado: ', valorRetirar,
            'valor Actual: ', this.valorActual - valorRetirar])

        this.valorActual = this.valorActual - valorRetirar

        return answer
    }


}





