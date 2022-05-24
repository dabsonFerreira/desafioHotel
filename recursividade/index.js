//imports
import * as funcaoMelhorHotel from './defineHotel.js'

//Define Entradas
let Cliente1 = new Object(); 

Cliente1.chegada         = new Date("March 16,2009");
Cliente1.partida         = new Date("March 18,2009");
Cliente1.tipo_do_Cliente = "regular"

let Cliente2 = new Object(); 
Cliente2.chegada         = new Date("March 20,2009");
Cliente2.partida         = new Date("March 22,2009");
Cliente2.tipo_do_Cliente = "regular";

let Cliente3 = new Object() ; 
Cliente3.chegada         = new Date("March 26,2009");
Cliente3.partida         = new Date("March 28,2009");
Cliente3.tipo_do_Cliente = "reward";



let Cliente = [Cliente1, Cliente2, Cliente3]
funcaoMelhorHotel.defineHotel(Cliente)