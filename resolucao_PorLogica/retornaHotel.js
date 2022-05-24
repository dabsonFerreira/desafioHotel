import * as diasUteiseFDS from './computando.js'
import * as iHoteis from './hoteis.js'

export function retornaHotel(chegada,partida,cliente){
    console.log("\n\nchegou em retornaHotel")
    console.log("Cliente: "+cliente)
    let Semana,FDS
    [Semana,FDS] = diasUteiseFDS.computando(chegada,partida)
    console.log("\nDefinindo Semana: "+Semana+" e FDS: "+FDS)
    let custoTotal = []
    let vetorPosicoesHoteis = []
    
    if (cliente == 0){
        console.log("preco regular fds: " + iHoteis.preco_regular_fds+ " Preco regular semana: "+ iHoteis.preco_regular_semana)
        for(let i=0;i<iHoteis.preco_regular_fds.length;i++){            
            custoTotal[i] = iHoteis.preco_regular_fds[i]*FDS + iHoteis.preco_regular_semana[i]*Semana
            console.log("Definindo custoTotal: "+custoTotal[i])
        }
    }
    else{
        console.log("preco reward fds: " + iHoteis.preco_reward_fds+ " Preco reward semana: "+ iHoteis.preco_reward_semana)
        for(let i=0;i<iHoteis.preco_reward_fds.length;i++){            
            custoTotal[i] = iHoteis.preco_reward_semana[i]*Semana + iHoteis.preco_reward_fds[i]*FDS
            console.log("Definindo custoTotal: "+custoTotal[i])
        }
    }        
        
    
    console.log("Definido custoTotal: "+custoTotal)

    //como os hoteis estão dispostos seguindo uma posição no array, não preciso relacionar preços a hoteis
    let menorCusto = custoTotal.reduce((pAtual,pSeguinte)=>pAtual<pSeguinte? pAtual:pSeguinte)
    console.log("menorCusto "+menorCusto)
    let classificacaoTemporaria = 0
    let melhorHotel
    let i = 0
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