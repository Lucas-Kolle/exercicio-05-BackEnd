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
    //criando ARRAY para guardar as siglas
    let siglaEstados = []
    //criando JSON para guardar as siglas e a quantidade
    let retornoEstados = {
        siglaEstados,
        "quantidade": 0
    }

    //estrutura de repetição para percorrer o array
    estadosCidades.listaDeEstados.estados.forEach(function(itemEstados){
        siglaEstados.push(itemEstados.sigla) //puxando as siglas para o array "siglaEstados" que eu criei
        retornoEstados.quantidade = retornoEstados.quantidade +1 //adicionando 1 cada vez que passa aqui
    })

    //retornos da função
    if(siglaEstados)
        return retornoEstados
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
        console.log("ERRO: Não foi posível encontrar o estado!")
        return situacao
    }
}
}

//que retorna as informações referente a capital de um estado
const getCapitalEstado = function(sigla){
    let siglaEstado = sigla
    let dadosCapital = {}
    //função para ajudar na condicional
    let situacao = false

    //condicional para validar os dados recebidos
    if(siglaEstado == "" || !isNaN(siglaEstado)){
        console.log("ERRO: Preencha os dados corretamente!")
        return false
    //continuar programa
    }else{

        //estrutura de repetição para permitir percorrer o ARRAY das siglas
        estadosCidades.listaDeEstados.estados.forEach(function(itemEstados){

            //condicional para encontar o estado desejado pela sigla
            if(String(itemEstados.sigla).toUpperCase() == String(siglaEstado).toUpperCase()){
                //adicionando os centeúdos ao JSON
                dadosCapital.uf = itemEstados.sigla
                dadosCapital.descricao = itemEstados.nome
                dadosCapital.capital = itemEstados.capital
                situacao = true
            }
        })

        if(situacao)
            return dadosCapital
        else{
            console.log("ERRO: Estado não encontrado!")
            return situacao
        }
    }
}

//função que retorna os dados e uma determinada região do país
const getEstadosRegiao = function(regiao){
    let regiaoPais = regiao
    let retornoRegiao = {}
    let estados = []
    //criando variável para ajudar na condicional
    let situacao = false

    //validando dados recebidos
    if(regiaoPais == "" || !isNaN(regiaoPais)){
        console.log("ERRO: Os dados devem ser preenchidos corretamente!")
        return false

    // continuar programa
    }else{
        //estrutura de repetição para percorrer o ARRAY "estados"
        estadosCidades.listaDeEstados.estados.forEach(function(itemEstados){
            
            //condiconal para pesquisar a região
            if(String(itemEstados.regiao).toUpperCase() == String(regiaoPais).toUpperCase()){
                //adicionando conteúdos ao JSON "retornoRegiao"
                retornoRegiao.regiao = String(itemEstados.regiao).toUpperCase() //adiciona o atributo "regiao" e coloca a região.toUpperCase
                retornoRegiao.estados = estados //adiciona o ARRAY "estados" dentro do JSON "retornoRegiao"
                estados.push({"uf": itemEstados.sigla, "descricao": itemEstados.nome})
                situacao = true
            }
        })

        //condicional para verificar se a região digitada existe
        if(situacao)
            return retornoRegiao
        else{
            console.log("ERRO: Região não encontrada!")
            return situacao
        }
    }

}

console.log(getEstadosRegiao("centro-oeste"))