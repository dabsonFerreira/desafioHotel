import * as icomecoDasemana from './funcaoSemana.js'
import * as icomecoFds from './funcaoFds.js'


export function chamaFuncoes_reward(chegada,partida,precosSemana,precosFds){
    var precoSemana = precosSemana;
    var precoFds = precosFds;
    let diasEstadia = Math.round((partida-chegada)/(1000*60*60*24)+1);
    let data = chegada.getDay();
    let primeiraChamada = 1;
    let cliente = 1;
    let sinalizador_EsteveEmDiadeSemana = 0
    let sinalizador_EsteveEmFimdeSemana = 0

    console.log("precoSemana "+precoSemana)
    
    console.log("precoFds "+precoFds)

    console.log("dias de Estadia "+diasEstadia)
    
    console.log("data "+data)

    console.log("primeira chamada "+primeiraChamada)

    console.log("0 - Domingo - 6 Sábado")
    if (data> 0 && data < 6){
        console.log("if do chama funções para chamando semana")
        return icomecoDasemana.comecoDaSemana(data,diasEstadia,precoSemana,precoFds,primeiraChamada,cliente,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
    }
    else{
        console.log("if do chama funções para chamando fds")
        return icomecoFds.comecoDoFds(data,diasEstadia,precoFds,precoSemana,primeiraChamada,cliente, sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
    }
}