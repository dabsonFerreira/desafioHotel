//imports
import * as iprecoFds from './precoFds.js'
import * as iprecoTotal from './precoTotal.js'
import * as icomecoSemana from './funcaoSemana.js'

//começa pelo domingo
export function controleMeiodoFDS(data,diasEstadia,precoSemana,precoFds,cliente,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana) {
    //começa no domingo
    sinalizador_EsteveEmFimdeSemana = 1
    console.log("o controle para o fds significa iniciar domingo. Será calculado o custo do domingo agora")
    retornoControleFds = iprecoFds.f_precoFds(precoFds,cliente)    
    console.log("retornoControleFds - a variável que retorna o custo nessa chamada de controle")
    console.log(retornoControleFds)
    diasEstadia--
    console.log("é computado que passou um dia")
    console.log(diasEstadia)
    if (diasEstadia == 0){
            console.log("se chegamos a esse ponto é pq o cliente ficará só um dia")
            qualHotel = iprecoTotal.precoTotal(precoSemana,retornoControleFds,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
            return qualHotel
        }
        else{
            console.log("Vamos sair do controle e seguir para a primeira segunda feira")
            let qualHotel = icomecoSemana.comecoDaSemana(data,diasEstadia,precoSemana,retornoControleFds,primeiraChamada,cliente,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)//primeiraChamada = 0?
            return qualHotel
        }
        
}