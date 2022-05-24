export function computando(chegada, partida){
    console.log("chegou em computando")
    let estadia = ((partida - chegada)/(1000*3600*24)+1)
    let quantidadeSemanas = estadia/7
    let quantidadeDias = estadia % 7
    let diasUteis = 0
    let diasFds = 0

    console.log("estadia: "+estadia)
    console.log("quantidadeSemanas "+quantidadeSemanas)
    console.log("quantidadeDias "+quantidadeDias)

    if (quantidadeSemanas > 1){
        diasUteis = 5*quantidadeSemanas
        console.log("primeiro if de computando - diasUteis: "+diasUteis)
        diasFds = 2*quantidadeSemanas
        console.log("primeiro if de computando - diasFds: "+diasFds)
        if (quantidadeDias >0){//mod sempre resulta em valor menor que 7        
            switch(quantidadeDias){
                case 1:
                    (chegada.getDay() == 0 || chegada.getDay() == 6)? diasFds++ : diasUteis++                   
                    console.log("case 1 - diasUteis: "+diasUteis)
                    console.log("case1 - diasFds: "+diasFds)
                    break;
                case 2:
                    if (chegada.getDay()>0 && chegada.getDay()<5){
                        diasUteis=diasUteis + 2
                        console.log("case 2 - diasUteis: "+diasUteis)
                        console.log("case2 - diasFds: "+diasFds)}
                    else {
                        if (chegada.getDay() == 5 || chegada.getDay() == 0){ 
                            diasUteis++
                            diasFds++
                        }
                        else
                            diasFds = diasFds + 2
                        
                        console.log("case 2 - diasUteis: "+diasUteis)
                        console.log("case 2 - diasFds: "+diasFds)
                    
                    }
                        break;
                case 3: if (chegada.getDay()>0 && chegada.getDay()<4)
                            diasUteis+=3
                        else{
                            if (chegada.getDay()==4 || chegada.getDay()==0){
                                diasFds++
                                diasUteis+=2
                            }
                            else{
                                diasUteis++
                                diasFds+=2
                            }

                        }
                        console.log("case 3 - diasUteis: "+diasUteis)
                        console.log("case 3 - diasFds: "+diasFds)
                        break;        
                case 4:
                    if (chegada.getDay()==1 || chegada.getDay()==2)
                        diasUteis+=4
                        else {
                            if (chegada.getDay()==3 || chegada.getDay()==0){
                                diasFds++
                                diasUteis+=3
                            }
                            else{
                                diasUteis+=2
                                diasFds+=2
                            }
                        }
                        console.log("case 4 - diasUteis: "+diasUteis)
                        console.log("case 4 - diasFds: "+diasFds)
                        break;
                case 5:
                    if(chegada.getDay()==1)
                        diasUteis+=5
                        
                    else {
                        if (chegada.getDay()==2 || chegada.getDay()<0){
                            diasUteis+=4
                            diasFds++
                        }        
                        else{
                            diasUteis+=3
                            diasFds+=2
                        }
                    }
                    console.log("case 5 - diasUteis: "+diasUteis)
                    console.log("case 5 - diasFds: "+diasFds)
                    break;
                case 6:
                    if(chegada.getDay()==1 || chegada.getDay()<0){
                        diasFds++
                        diasUteis+=5
                    }
                    else{
                        diasFds+=2
                        diasUteis+=4
                    }
                    console.log("case 6 - diasUteis: "+diasUteis)
                    console.log("case 6 - diasFds: "+diasFds)
                    break;
            }
        }
    }
    else{
        console.log("Entrando no primeiro Else")
        switch(quantidadeDias){
            case 1:
                (chegada.getDay() == 0 || chegada.getDay() == 6)? diasFds++ : diasUteis++                   
                console.log("case 1 - diasUteis: "+diasUteis)
                console.log("case1 - diasFds: "+diasFds)
                break;
            case 2:
                if (chegada.getDay()>0 && chegada.getDay()<5){
                    diasUteis=diasUteis + 2
                    console.log("case 2 - diasUteis: "+diasUteis)
                    console.log("case2 - diasFds: "+diasFds)}
                else {
                    if (chegada.getDay() == 5 || chegada.getDay() == 0){ 
                        diasUteis++
                        diasFds++
                    }
                    else
                        diasFds = diasFds + 2
                    
                    }
                    console.log("case 2 - diasUteis: "+diasUteis)
                    console.log("case 2 - diasFds: "+diasFds)
                    break;                
            case 3: if (chegada.getDay()>0 && chegada.getDay()<4)
                        diasUteis+=3
                    else{
                        if (chegada.getDay()==4 || chegada.getDay()==0){
                            diasFds++
                            diasUteis+=2
                        }
                        else{
                            diasUteis++
                            diasFds+=2
                        }

                    }
                    console.log("case 3 - diasUteis: "+diasUteis)
                    console.log("case 3 - diasFds: "+diasFds)
                    break;
            case 4:
                if (chegada.getDay()==1 || chegada.getDay()==2)
                    diasUteis+=4
                    else {
                        if (chegada.getDay()==3 || chegada.getDay()==0){
                            diasFds++
                            diasUteis+=3
                        }
                        else{
                            diasUteis+=2
                            diasFds+=2
                        }
                    }
                    console.log("case 4 - diasUteis: "+diasUteis)
                    console.log("case 4 - diasFds: "+diasFds)
                    break;
            case 5:
                if(chegada.getDay()==1)
                    diasUteis+=5
                    
                else {
                    if (chegada.getDay()==2 || chegada.getDay()<0){
                        diasUteis+=4
                        diasFds++
                    }        
                    else{
                        diasUteis+=3
                        diasFds+=2
                    }
                }
                console.log("case 5 - diasUteis: "+diasUteis)
                console.log("case 5 - diasFds: "+diasFds)
            case 6:
                if(chegada.getDay()==1 || chegada.getDay()<0){
                    diasFds++
                    diasUteis+=5
                }
                else{
                    diasFds+=2
                    diasUteis+=4
                }
                console.log("case 6 - diasUteis: "+diasUteis)
                console.log("case 6 - diasFds: "+diasFds)
                break;
                default:
                    console.log("error!!!!!!!!")
        }
    }

    return [diasUteis,diasFds]

}