//imports
import * as iprecoSemana from './precoSemana.js'
import * as iprecoTotal from './precoTotal.js'
import * as icomecoFds from './funcaoFds.js'


//começa a contar a partir de um dia da semana
export function controleMeiodaSemana(data,diasEstadia,precoSemana,precoFds,cliente,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana) {
    console.log("entrando no controle do meio da semana")
    //console.log("verificando se primeiraChamada é zero: "+primeiraChamada)
    let retornoControleSemana = precoSemana
    sinalizador_EsteveEmDiadeSemana = 1
    console.log("sinalizador "+sinalizador_EsteveEmDiadeSemana+" sinalizador FDS "+sinalizador_EsteveEmFimdeSemana+" retornoControleSemana "+retornoControleSemana)
    for(let i=data;i<6;i++){
        console.log("chegada no controle da semana")
        console.log("verificando se retornoControleSemana inicializou correntamente")
        console.log(retornoControleSemana)
        retornoControleSemana = iprecoSemana.f_precoSemana(precoSemana,cliente)
        console.log("verificando se retornoControleSemana atualizado corretamente")
        console.log(retornoControleSemana)
        diasEstadia--
        console.log("Dias faltando: "+diasEstadia)
        console.log(i+" de 5")
        if (diasEstadia == 0){
            i = 6
            //retornoControleSemana = f_precoSemana(precoSemana,cliente)
            console.log("atualizando valor do retornoControleSemana " + retornoControleSemana)
            console.log("dias acabaram no controle da semana. Chamando precoTotal")
            let qualHotel = iprecoTotal.precoTotal(retornoControleSemana,precoFds,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
            return qualHotel
        }
        else{
            if (i == 5){
                console.log("chamando começo do fds")
                let qualHotel = icomecoFds.comecoDoFds(data,diasEstadia,precoFds,retornoControleSemana,global.primeiraChamada,cliente,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
                return qualHotel
            }
        }
    }
}