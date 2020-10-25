export class Impressora{

    constructor(
        public impressora: string,
        public ecf_if: string,
        public ecf: string,
        public numeroSerial: string) {}

    public dados_ImpressoraFiscal(): string {

        let _ecfIf : string = "ECF-IF VERSÃO: " + this.ecf_if + " ECF: " + this.ecf

        let _numeroSerial : string =  "FAB: " + this.numeroSerial

        return (
`${this.impressora}
${_ecfIf}
${_numeroSerial}`
         )
    }
}