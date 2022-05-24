
const hoteis = [
    {
      nome: "Lakewood",
      classificacao: 3,
      Reward : {
          semanaUtil: 80,
          finaldeSemana: 80
      },
      Regular:{
          semanaUtil: 110,
          finaldeSemana: 90
      } 


  },  {
      nome: "Bridgewood",
      classificacao: 4,
      Reward : {
          semanaUtil: 110,
          finaldeSemana: 50
      },
      Regular:{
          semanaUtil: 160,
          finaldeSemana: 60
      }  

  }, {
      nome: "Ridgewood",
      classificacao: 5,
      Reward : {
          semanaUtil: 100,
          finaldeSemana: 40
      },
      Regular:{
          semanaUtil: 220,
          finaldeSemana: 150
      }  

  }
]

//nome dos hoteis
export const nomesHoteis = hoteis.map(array => array.nome)

//quero construir tabelas de preços para cada tipo de cliente
//export const menuRegular = hoteis.map(objeto => objeto.Regular)
//export const menuReward = hoteis.map(objeto => objeto.Regular)


//tabela regular de precos para FDS e Semana Util
export const menuRegularFDS        = hoteis.map(objeto => objeto.Regular).map(objeto => objeto.finaldeSemana)
export const menuRegularSemanaUtil = hoteis.map(objeto => objeto.Regular).map(objeto => objeto.semanaUtil)

//tabela Reward de precos para FDS e Semana Util
export const menuRewardFDS        = hoteis.map(objeto=> objeto.Reward).map(objeto => objeto.finaldeSemana)
export const menuRewardSemanaUtil = hoteis.map(objeto=> objeto.Reward).map(objeto => objeto.semanaUtil)

//calculo dos custos
export const  preco_regular_semana = menuRegularSemanaUtil
export const  preco_regular_fds    = menuRegularFDS
export const  preco_reward_fds     = menuRewardFDS
export const  preco_reward_semana  = menuRewardSemanaUtil