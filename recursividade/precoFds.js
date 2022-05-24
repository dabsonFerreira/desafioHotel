import * as ihoteis from './hoteis.js'
//calcula preço do fds 
export function f_precoFds(precoFds,cliente){
    if (cliente == 0){
        const intermediaria = ihoteis.menuRegularFDS
        for (let i = 0; i< intermediaria.length; i++){
            precoFds[i] += intermediaria[i]
        }
        return precoFds
    }
    else{
        const intermediaria = ihoteis.menuRewardFDS
        for (let i = 0; i< intermediaria.length; i++){
            precoFds[i] += intermediaria[i]
        }        
        return precoFds
    }
}