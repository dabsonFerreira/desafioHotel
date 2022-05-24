import * as ivariaveis from './hoteis.js'

//função que acha o menor valor pela melhor classificação
function achaMenorValor(Total) {
    /*console.log("chegamos na penultima função")*/
    let menorValor = Total.reduce((atual,seguinte) => atual < seguinte ? atual : seguinte)
    let indice = 0
    console.log("menor valor")
    console.log(menorValor)
    Total[2] == menorValor ? indice = 2 : Total[1] == menorValor ? indice = 1 : indice = 0
    console.log(Total)
    console.log(indice)   
    return indice 
}

//define hotel
function selecionaHotel(indice){
    let melhorHotel = 0
    return melhorHotel = ivariaveis.nomesHoteis[indice]
}

//preço Total
export function precoTotal(precoSemana,precoFds,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana) {//e se n teve fds?? precisa de condição
    console.log("finalmente chegamos ao preço Total")
    console.log("será que chegou correto o precoSemana?")
    console.log(precoSemana)
    console.log("será que chegou correto o precoFds?")
    console.log(precoFds)
    console.log("Como estão os sinalizadores para semana: "+sinalizador_EsteveEmDiadeSemana+ " e para fds: "+sinalizador_EsteveEmFimdeSemana )
    let Total = [0,0,0]
    if (sinalizador_EsteveEmDiadeSemana==1 && sinalizador_EsteveEmFimdeSemana==1) {   
        for (let i = 0; i < 3; i++){
            Total[i] = precoSemana[i] + precoFds[i]
        }
    }
    else {
        if (sinalizador_EsteveEmDiadeSemana==1 && sinalizador_EsteveEmFimdeSemana == 0){
            Total = precoSemana
        }
        else
            Total = precoFds

    }
    console.log("\n\n\n\n Custo Total das Estadias:")
    console.log(Total)

    let indice_menorValor = achaMenorValor(Total)
    console.log("achamos o indice do menor valor: " + indice_menorValor)
    global.hotelEscolhido
    return global.hotelEscolhido = selecionaHotel(indice_menorValor) //retorna nome do hotel escolhido     
}
