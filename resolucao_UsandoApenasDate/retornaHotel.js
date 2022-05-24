import * as iHoteis from './hoteis.js'
import * as ihotelMelhorClassificado from './hotelMelhorClassificadoMaisBarato.js'

export function retornaHotel(chegada,partida,cliente){
    console.log("chegou em retornaHotel")
    let tempoDeEstadia = (partida-chegada)/86400000+1
    let diasPassando = chegada.getDay()
    let contaDiasUteis = 0
    let contaDiasFDS = 0
    let Custos = []
    console.log("tempoDeEstadia: "+tempoDeEstadia)
    console.log("diasPassando: "+diasPassando)
    if (tempoDeEstadia != 0){
        console.log("primeiro if: entra pro while")
        while(tempoDeEstadia!=0){
            console.log("chegou no while")
            if(diasPassando<6){
                diasPassando == 0 ? contaDiasFDS++ : contaDiasUteis++
                console.log("primeiro if - diasPassando: "+diasPassando)
                console.log("primeiro if - contaDiasFDS: "+contaDiasFDS+" contaDiasUteis: "+contaDiasUteis)
                diasPassando++                
            }
            else{
                console.log("else: diasPassando: "+diasPassando)
                diasPassando=0               
                contaDiasFDS++             
                console.log("primeiro else - contaDiasFDS: "+contaDiasFDS+" contaDiasUteis: "+contaDiasUteis)
                console.log("atualizando diasPassando: "+diasPassando)

            }
            tempoDeEstadia--
        }
    }
    else {
        console.log("else que não tem while")    
        (diasPassando == 0 || diasPassando == 6)? contaDiasFDS++ : contaDiasUteis++
        console.log("contaDiasFds: "+contaDiasFDS+"contaDiasUteis: "+contaDiasUteis)
    }
    
    if(cliente == 0){
        for (let i = 0; i<iHoteis.preco_regular_fds.length;i++){
            Custos[i] = contaDiasUteis*iHoteis.preco_regular_semana[i] + contaDiasFDS*iHoteis.preco_regular_fds[i]
            console.log("Custos chamada Regular: "+Custos)
        }
    }
    else{
        for (let i = 0; i<iHoteis.preco_reward_fds.length;i++){
            Custos[i] = contaDiasUteis*iHoteis.menuRewardSemanaUtil[i] + contaDiasFDS*iHoteis.menuRewardFDS[i] 
            console.log("Custos chamada Reward: "+Custos)
        }       
    }
    console.log("vai chamar hotelMelhorClassificadoEmaisBarato")
    let hotelEscolhido = ihotelMelhorClassificado.hotelMelhorClassificadoeMaisBarato(Custos)
    return hotelEscolhido

}