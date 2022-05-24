//imports
import * as iprecoFds from './precoFds.js'
import * as iprecoTotal from './precoTotal.js'
import * as icomecoSemana from './funcaoSemana.js'
import * as icontroleFds from './controleFds.js'

//calculos começando pelo FDS
export function comecoDoFds(data,diasEstadia,precoFds,precoSemana,primeiraChamada,cliente,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana){
    sinalizador_EsteveEmFimdeSemana = 1
    if (primeiraChamada == 1){
        console.log("chegamos no começo do fds")
        console.log("confirmando tipo de cliente: "+cliente)
        console.log(primeiraChamada)
        primeiraChamada = 0
        console.log("primeiro colocamados a flag em 0 e chamamos o controle")
        let qualHotel = icontroleFds.controleMeiodoFDS(data,diasEstadia,precoSemana,precoFds,clientesinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
        return qualHotel
    }
    else{
        console.log("chegando no começo do fds")
        console.log("Sinalizador de fim de semana: "+sinalizador_EsteveEmFimdeSemana + " sinalizador de semana util: "+sinalizador_EsteveEmDiadeSemana)
        let retornoComecodoFds = precoFds
        console.log("Ultima vez que foi computado custo do fds o resultado parou em:")
        console.log(retornoComecodoFds)
        for(let i=5;i<7;i++){
            console.log("inicio do calculo do fds. Estamos no dia:")
            console.log(i+" de 6")
            console.log("quantos dias ainda faltam")
            retornoComecodoFds = iprecoFds.f_precoFds(retornoComecodoFds,cliente)
            diasEstadia--
            console.log(diasEstadia + " dias faltando")
            console.log("retornoComecodoFds")
            console.log(retornoComecodoFds)
            if (diasEstadia == 0){
                console.log("chegou ao fim dos dias pelo comecodofds")
                i = 7
                let qualHotel = iprecoTotal.precoTotal(precoSemana,retornoComecodoFds,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
                return qualHotel
            }
            else{
                if (i == 6){
                    console.log("volta a chamar comecoDaSemana")
                    let qualHotel = icomecoSemana.comecoDaSemana(data, diasEstadia,precoSemana, retornoComecodoFds, primeiraChamada, clientesinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
                    return qualHotel
                }
            }
        }
    } 
    
}