 import * as iHoteis from './hoteis.js'

 export function hotelMelhorClassificadoeMaisBarato(Custos){
    let custoTotal = Custos
    console.log("chegou na chamada hotelMelhorClassificadoeMaisBarato")
    let menorCusto = custoTotal.reduce((pAtual,pSeguinte)=>pAtual<pSeguinte? pAtual:pSeguinte)
    console.log("menorCusto "+menorCusto)
    let classificacaoTemporaria = 0
    let melhorHotel
    let i = 0
    let vetorPosicoesHoteis = []
    while(i<custoTotal.length){//assumindo que tenham vários hotéis com várias classificações
        custoTotal[i] == menorCusto? vetorPosicoesHoteis[i] = 1 : vetorPosicoesHoteis[i]=0
        i++
    }
    console.log("vetorPosicoesHoteis: "+vetorPosicoesHoteis)
    console.log("Classificação: "+iHoteis.classificacao)
    console.log("Ultimo for. Verificando classificação. Hotel: "+iHoteis.nomesHoteis + "iHoteis.classificacao "+iHoteis.classificacao)
    for (let i=0;i<vetorPosicoesHoteis.length;i++){
        if(vetorPosicoesHoteis[i]==1 && classificacaoTemporaria < iHoteis.classificacao[i]){
            melhorHotel = iHoteis.nomesHoteis[i]
            classificacaoTemporaria = iHoteis.classificacao[i]
        }                     
        console.log("Atual valor em classificacaoTemporaria: " +classificacaoTemporaria+" Atual melhor Hotel: "+melhorHotel)
    }
    return melhorHotel
}