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

    estadosCidades.listaDeEstados.estados.forEach(function(itemEstados){
        siglaEstados.push(itemEstados.sigla)
    })

    if(siglaEstados){
        return siglaEstados
    }else{
        return false
    }
}
console.log(getListaDeEstados())