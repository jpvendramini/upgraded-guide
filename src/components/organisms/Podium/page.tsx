import Description from '@components/atoms/Description/page'
import { PodiumType } from '@components/atoms/PodiumCard/page'
import Title from '@components/atoms/Title/page'
import PodiumSession from '@components/molecules/PodiumSession/page'
import React from 'react'

const Podium = () => {
  const pesoPesadoPodium: PodiumType[] = [
    {
      nome: "Pablo Wink da Silva",
      iniciais: "PW",
      pontuacao: 100,
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/golden-trophy.svg",
      backgroundColor: "bg-[#a17808]"
    },
    {
      nome: "Joao Vendramini",
      iniciais: "JV",
      pontuacao: 80,
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/silver-trophy.svg",
      backgroundColor: "bg-[#c0c0c0]"
    },
    {
      nome: "Julio Cesar Alves",
      iniciais: "JA",
      pontuacao: 70,
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/bronze-trophy.svg",
      backgroundColor: "bg-[#EE9874]"
    }
  ]

  const pesoPenaPodium: PodiumType[] = [
    {
      nome: "Juliana Melo",
      iniciais: "JM",
      pontuacao: 100,
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/golden-coin.svg",
      backgroundColor: "bg-[#a17808]"
    },
    {
      nome: "Pedro Augusto",
      iniciais: "PA",
      pontuacao: 80,
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/silver-coin.svg",
      backgroundColor: "bg-[#c0c0c0]"
    },
    {
      nome: "Marcos Souza",
      iniciais: "MS",
      pontuacao: 70,
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/bronze-coin.svg",
      backgroundColor: "bg-[#EE9874]"
    }
  ]
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Title title="Pódium" />
        <Description value="O hall dos campeões!" />
      </div>
      <div className='flex flex-col gap-8'>
        <PodiumSession podiumList={pesoPesadoPodium}/>
        <PodiumSession podiumList={pesoPenaPodium}/>
      </div>
    </div>
  )
}

export default Podium