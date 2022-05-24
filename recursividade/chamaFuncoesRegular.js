//inicio das chamadas
import * as icomecoDasemana from './funcaoSemana.js'


//calcula dias de estadia


export function chamaFuncoes_regular(chegada,partida,precosSemana,precosFds){
    var precoSemana = precosSemana;
    var precoFds = precosFds;
    let diasEstadia = Math.round((partida-chegada)/(1000*60*60*24)+1);
    let data = chegada.getDay();
    let primeiraChamada = 1;
    let cliente = 0;
    let sinalizador_EsteveEmDiadeSemana = 0
    let sinalizador_EsteveEmFimdeSemana = 0
    

    console.log("precoSemana")
    console.log(precoSemana)
    
    console.log("precoFds")
    console.log(precoFds)

    console.log("dias de Estadia")
    console.log(diasEstadia)
    
    console.log("data")
    console.log(data)

    console.log("primeira chamada")
    console.log(primeiraChamada)

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
