
import * as ihoteis from './hoteis.js'
import * as ichamaFuncoesRegular from './chamaFuncoesRegular.js'
import * as ichamaFuncoesReward from './chamaFuncoesReward.js'

export function defineHotel(Cliente){
    let contagem = 0
    let precoSemana
    let precoFds
    while(contagem != 3){

    if (Cliente[contagem].tipo_do_Cliente == ("regular")){
        console.log("CHAMANDO funções para Cliente Regular\n")
        console.log("Tabela de Preço Para FDS: " + ihoteis.preco_regular_fds+ "     Tabela de Preço Para Semana " + ihoteis.preco_regular_semana+"\n\n")
        let melhorHotel = ichamaFuncoesRegular.chamaFuncoes_regular(Cliente[contagem].chegada, Cliente[contagem].partida, precoSemana=[0,0,0], precoFds=[0,0,0])
        console.log("\n\nCliente " + `${contagem+1}`+" Melhor hotel para cliente sem fidelidade para essas datas: "+melhorHotel+"\n\n\n")
    }
    else {
        console.log("CHAMANDO funções para Cliente Reward\n")
        console.log("Tabela de Preço FDS " + ihoteis.preco_reward_fds+" Tabela de Preço Para Semana " + ihoteis.preco_reward_semana+"\n\n")
        let melhorHotel = ichamaFuncoesReward.chamaFuncoes_reward(Cliente[contagem].chegada, Cliente[contagem].partida, precoSemana=[0,0,0], precoFds=[0,0,0])
        console.log("\n\nCliente " + `${contagem+1}`+"     Melhor hotel para cliente com fidelidade para essas datas: "+melhorHotel+"\n\n\n")
    }
    contagem++ 
    }
}