export class OperadorCupom{

    constructor(

        public codigoOperador: number) {}

    public dados_codigoOperador(): string {
        let _codigoOperador : number = this.codigoOperador;
        let _separator : string = "------------------------------"

        return (
`${_separator}
OPERADOR: ${_codigoOperador}
${_separator}`
         )
    }
}