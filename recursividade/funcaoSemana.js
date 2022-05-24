//imports
import * as iprecoSemana from './precoSemana.js'
import * as iprecoTotal from './precoTotal.js'
import * as icomecoFds from './funcaoFds.js'
import * as icontroleSemana from './controleSemana.js'

//calculos começando pela semana
export function comecoDaSemana(data,diasEstadia,precoSemana,precoFds,primeiraChamada,cliente,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana){
    sinalizador_EsteveEmDiadeSemana = 1
    if (primeiraChamada == 1){
        console.log("Entrando no if que leva ao controle de onde começa na semana")
        console.log("primeiraChamada "+primeiraChamada )
        primeiraChamada = 0
        console.log("conferindo valores no if da semana para controle: data "+data+" diasEstadia "+diasEstadia+" precoSemana "+precoSemana+" precoFds "+precoFds+" cliente "+cliente)
        console.log("zerando primeiraChamada "+primeiraChamada)
        let qualHotel = icontroleSemana.controleMeiodaSemana(data,diasEstadia,precoSemana,precoFds,cliente,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
        return qualHotel
    }
    else{
        
        let retornoComecodaSemana = precoSemana
        for(let i=1;i<6;i++){
            retornoComecodaSemana = iprecoSemana.f_precoSemana(retornoComecodaSemana,cliente)
            diasEstadia--
            console.log("quantos dias faltam")
            console.log(diasEstadia + " dias faltando")
            console.log("retornoComecodaSemana")
            console.log(retornoComecodaSemana)
            console.log(i + " de 5")
            if (diasEstadia == 0){
                i = 6
                console.log("entrou aqui na semana para fim de estadia")
                let qualHotel = iprecoTotal.precoTotal(retornoComecodaSemana,precoFds,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
                return qualHotel
            }
            else{
                if (i == 5){
                    console.log("vai chamar começodofds")
                    let qualHotel = icomecoFds.comecoDoFds(data,diasEstadia,precoFds,retornoComecodaSemana,primeiraChamada,cliente,sinalizador_EsteveEmDiadeSemana,sinalizador_EsteveEmFimdeSemana)
                    return qualHotel
                }
            }
        }
    } 

}