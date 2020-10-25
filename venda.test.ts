import { Endereco } from './endereco';
import { Loja } from './loja';
import { Venda } from './venda';
import { ItemVenda } from './itemVenda';
import { Produto } from './produto';

function verificaCampoObrigatorio(mensagemEsperada: string, venda: Venda) {
  try {
    venda.dadosDaVenda();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
    }
}

function verificaCampoObrigatorioProduto(mensagemEsperada: string, produto: Produto) {
  try {
    produto.dadosDoProduto();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
    }
}

function validaItem(mensagemEsperada: string, item: Venda, produto: Produto, quantidade: number) {
  try {
    venda.adicionarItem(item, produto, quantidade);
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  

function validaImpressao(mensagemEsperada: string, venda: Venda) {
  try {
    venda.imprimir_cupom();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  

function imprimeCupom(mensagemEsperada: string, venda: Venda) {
  try {
    expect(venda.imprimir_cupom()).toBe(mensagemEsperada);
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  
function validaPagamento(mensagemEsperada: string, venda: Venda) {
  try {
    venda.validaPagamento();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  

function finalDaVenda(mensagemEsperada: string, venda: Venda) {
  try {
    venda.finalDaVenda();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}  

const NOME_LOJA = "Loja 1"
const LOGRADOURO = "Log 1"
const NUMERO = 10
const COMPLEMENTO = "C1"
const BAIRRO = "Bai 1"
const MUNICIPIO = "Mun 1"
const ESTADO = "E1"
const CEP = "11111-111"
const TELEFONE = "(11) 1111-1111"
const OBSERVACAO = "Obs 1"
const CNPJ = "11.111.111/1111-11"
const INSCRICAO_ESTADUAL = "123456789"
const CCF_VENDA = "021784"
const COO_VENDA = "035804"
const DATAHORA = "25/11/2020 10:30:40"
const QUANTIDADE_1 = 10
const QUANTIDADE_2 = 5
const UNIDADE= "cx"
const SUBS_TRIBU = "ST" 
const CODIGO_1 = 100
const CODIGO_2 = 3
const CODIGO_3 = 4
const DESCRICAO_1 = "Maçã"
const DESCRICAO_2 = "Banana"
const VALOR_UNITARIO_1 = 7.45
const VALOR_UNITARIO_2 = 3.32
const VALOR_UNITARIO_3 = -2
const TIPO_PAGAMENTO_1 = "cartão de crédito"
const TIPO_PAGAMENTO_2 = "dinheiro"
const VALOR_PAGAMENTO = 100

let ENDERECO : Endereco = new Endereco(LOGRADOURO, NUMERO, COMPLEMENTO,
  BAIRRO, MUNICIPIO, ESTADO, CEP);

let LOJA: Loja = new Loja(NOME_LOJA, ENDERECO, TELEFONE, OBSERVACAO, CNPJ, INSCRICAO_ESTADUAL);

let venda = new Venda(LOJA, DATAHORA, CCF_VENDA, COO_VENDA, TIPO_PAGAMENTO_1, VALOR_PAGAMENTO); 

let vendaSemItem: Venda = new Venda(LOJA, DATAHORA, CCF_VENDA, COO_VENDA, TIPO_PAGAMENTO_1, VALOR_PAGAMENTO);

let produto_1: Produto = new Produto(
  CODIGO_1, 
  DESCRICAO_1, 
  UNIDADE, 
  VALOR_UNITARIO_1, 
  SUBS_TRIBU
);

  
let produto_2: Produto = new Produto(
  CODIGO_2, 
  DESCRICAO_1, 
  UNIDADE, 
  VALOR_UNITARIO_3, 
  SUBS_TRIBU
);

let produto_3: Produto = new Produto(
  CODIGO_3, 
  DESCRICAO_2, 
  UNIDADE, 
  VALOR_UNITARIO_2, 
  SUBS_TRIBU
);

let produtoSemValor: Produto = new Produto(
  CODIGO_1, 
  DESCRICAO_1, 
  UNIDADE, 
  0, 
  SUBS_TRIBU
);

let item_1: ItemVenda = new ItemVenda(1, produto_1, QUANTIDADE_1)

let item_2: ItemVenda = new ItemVenda(2, produto_1, QUANTIDADE_2)

let item_3: ItemVenda = new ItemVenda(3, produto_2, QUANTIDADE_1)

let item_4: ItemVenda = new ItemVenda(4, produto_3, QUANTIDADE_2)

let doisItensVenda: Venda = new Venda(
  LOJA, 
  DATAHORA,
  CCF_VENDA, COO_VENDA, 
  TIPO_PAGAMENTO_1,
  VALOR_PAGAMENTO,   
  new Array<ItemVenda>(item_1, item_2)
);

let itensNegativos: Venda = new Venda(
  LOJA, 
  DATAHORA,
  CCF_VENDA,
  COO_VENDA, 
  TIPO_PAGAMENTO_1,
  VALOR_PAGAMENTO, 
  new Array<ItemVenda>(item_3, item_4)
);

let testeDaVenda: Venda = new Venda(
  LOJA, 
  DATAHORA,
  CCF_VENDA, COO_VENDA, 
  TIPO_PAGAMENTO_2,
  VALOR_PAGAMENTO,   
  new Array<ItemVenda>(item_1)
);

const TEXTO_ESPERADO_COM_IMPOSTOS = `Loja 1
Log 1, 10 C1
Bai 1 - Mun 1 - E1
CEP:11111-111 Tel (11) 1111-1111
Obs 1
CNPJ: 11.111.111/1111-11
IE: 123456789
------------------------------
25/11/2020 10:30:40V CCF:021784 COO: 035804
CUPOM FISCAL
ITEM CODIGO DESCRICAO QTD UN VL UNIT(R$) ST VL ITEM(R$)
1 100 Maçã 10 cx 7.45 ST 74.50
------------------------------
TOTAL R$ 74.50
Dinheiro 100.00
Troco R$ 25.50
Lei 12.741, Valor aprox., Imposto F=5.62 (7.54%), E=3.58 (4.81%)`

test('ccf vazio', () => {
  let ccf_vazio: Venda = new Venda(LOJA, DATAHORA, "", COO_VENDA,  TIPO_PAGAMENTO_1, VALOR_PAGAMENTO);
    verificaCampoObrigatorio(`O campo CCF da venda é obrigatório`, ccf_vazio);
});

test('coo vazio', () => {
  let coo_vazio: Venda = new Venda(LOJA, DATAHORA, CCF_VENDA, "",  TIPO_PAGAMENTO_1, VALOR_PAGAMENTO);
    verificaCampoObrigatorio(`O campo COO da venda é obrigatório`, coo_vazio);
});

test('Produto código inválido', () =>{
  let codigoInvalido: Produto = new Produto(0, DESCRICAO_1, UNIDADE, VALOR_UNITARIO_1, SUBS_TRIBU);
  verificaCampoObrigatorioProduto(`O campo código do produto é obrigatório`, codigoInvalido);
});

test('Produto sem descrição', () =>{
  let semDescricao: Produto = new Produto(CODIGO_1, "", UNIDADE, VALOR_UNITARIO_1, SUBS_TRIBU);
  verificaCampoObrigatorioProduto(`O campo descrição do produto é obrigatório`, semDescricao);
});

test('Produto sem unidade', () =>{
  let semUnidade: Produto = new Produto(CODIGO_1, DESCRICAO_1, "", VALOR_UNITARIO_1, SUBS_TRIBU);
  verificaCampoObrigatorioProduto(`O campo unidade do produto é obrigatório`, semUnidade);
});

test('Produto valor unitário inválido', () =>{
  let valorUnitarioInvalido: Produto = new Produto(CODIGO_1, DESCRICAO_1, UNIDADE, 0, SUBS_TRIBU);
  verificaCampoObrigatorioProduto(`O campo valor unitário do produto é obrigatório`, valorUnitarioInvalido);
});

test('Produto sem substituição tributária', () =>{
  let semSubstituicaoTributaria: Produto = new Produto(CODIGO_1, DESCRICAO_1, UNIDADE, VALOR_UNITARIO_1, "");
  verificaCampoObrigatorioProduto(`O campo substituição tributária é obrigatório`, semSubstituicaoTributaria);
});

test('Sem itens', () =>{
  validaImpressao("Venda sem itens", vendaSemItem)
});

test('Item duplicado', () =>{
  validaItem("Produto duplicado", doisItensVenda, produto_1, 5)
});

test('Quantidade do item', () =>{
  validaItem("Item com quantidade zero ou negativa", vendaSemItem, produto_1, 0)
});

test('Valor produto', () =>{
  validaItem("Produto com valor unitário zero ou negativo", itensNegativos, produtoSemValor, 3)
});

test('Valida Pagamento', () => {
  let valida_pagamento: Venda = new Venda(LOJA, DATAHORA, CCF_VENDA, COO_VENDA, "fiado", VALOR_PAGAMENTO);
    validaPagamento("Tipo de pagamento inválido", valida_pagamento);
});

test('Valida tipo do Pagamento', () => {
  let valida_tipo_pagamento: Venda = new Venda(LOJA, DATAHORA, CCF_VENDA, COO_VENDA, TIPO_PAGAMENTO_2, VALOR_PAGAMENTO, new Array<ItemVenda>(item_1));
    validaPagamento("Operação inválida", valida_tipo_pagamento);
});

test('Valida troco', () => {
  let valida_troco: Venda = new Venda(LOJA, DATAHORA, CCF_VENDA, COO_VENDA, TIPO_PAGAMENTO_2, 100, new Array<ItemVenda>(item_1));
    finalDaVenda("89", valida_troco);
});

test('Imprimir cupom com impostos', () => {
    imprimeCupom(TEXTO_ESPERADO_COM_IMPOSTOS, testeDaVenda);
})