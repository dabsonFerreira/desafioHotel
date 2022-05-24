//calcula preço da semana cliente regular
import * as ihoteis from './hoteis.js'
export function f_precoSemana(precoSemana,cliente) {
    if (cliente == 0){
        const intermediaria = ihoteis.menuRegularSemanaUtil
        for (let i = 0; i< intermediaria.length; i++){
            precoSemana[i] += intermediaria[i]
        }
        
        return precoSemana
    }
    else{
        const intermediaria = ihoteis.menuRewardSemanaUtil
        for (let i = 0; i< intermediaria.length; i++){
            precoSemana[i] += intermediaria[i]
        }        
        return precoSemana
    }
}