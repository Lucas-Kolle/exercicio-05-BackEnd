/*****************************************************************************************************************************************************************************
 * Objetivo: Arquivo para guardar as funções para manipular os dados em ARRAY e JASON
 * Data: 18/03/2026
 * Autor: Lucas Kolle
 * Versão: 1.0.3.26
 ****************************************************************************************************************************************************************************/

//importando arquivo com as informações necessárias
const estadosCidades = require("./estados_cidades.js")

//função que retorna a lista de todos as siglas dos estados do brasil
const getListaDeEstados = function(){
    let siglaEstados = []

    //estrutura de repetição para percorrer o array
    estadosCidades.listaDeEstados.estados.forEach(function(itemEstados){
        siglaEstados.push(itemEstados.sigla) //puxando as siglas para o array "siglaEstados" que eu criei
    })

    //retornos da função
    if(siglaEstados)
        return siglaEstados
    else
        return false
}

//função que retorna os dados de um estado baseado pela sigla
const getDadosEstado = function(sigla){
let siglaEstado = sigla
let dadosEstado = {}
//criando variável para ajudar na condiconal
let situacao = false

//condicional para não permitir números na entrada do valor e nem valores vazios
if(siglaEstado == "" || !isNaN(siglaEstado))
    return false
//continuando programa
else{
    //estrutura de repetição para encontrar a sigla desejada "pesquisar pela sigla"
    estadosCidades.listaDeEstados.estados.forEach(function(itemEstados){

        //condicional para igualar o item ao digitado pelo cliente
        if(String(itemEstados.sigla).toUpperCase() == String(siglaEstado).toUpperCase()){

            //se a pesquisa der certo, adicionar esses itens ao JSON
            dadosEstado.uf = itemEstados.sigla //cria o item "uf" e atribui o "itemEstados.sigla" que é a sigla 
            dadosEstado.descricao = itemEstados.nome
            dadosEstado.capital = itemEstados.capital
            dadosEstado.regiao = itemEstados.regiao
            //se der tudo certo, trocar o "false" por "true" da variável status
            situacao = true
        }
    })

    if(situacao)
        //após a repetição, retornar o JSON com os valores adicionados
        return dadosEstado
    else{
        console.log("ERRO: Não foi posível enconar o estado!")
        return situacao
    }
}
}


console.log(getDadosEstado("tf"))