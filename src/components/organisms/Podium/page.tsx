import Description from '@components/atoms/Description/page'
import { PodiumType } from '@components/atoms/PodiumCard/page'
import Title from '@components/atoms/Title/page'
import PodiumSession from '@components/molecules/PodiumSession/page'
import React from 'react'

const Podium = () => {
  const pesoPesadoPodium: PodiumType[] = [
    {
      email: "pablo@teste.com",
      iniciais: "PW",
      nota: 100,
      linguagem: "Javinha",
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/golden-trophy.svg",
      backgroundColor: "bg-[#a17808]"
    },
    {
      email: "joao@teste.com",
      iniciais: "JV",
      linguagem: "Node",
      nota: 80,
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/silver-trophy.svg",
      backgroundColor: "bg-[#c0c0c0]"
    },
    {
      email: "julio@teste.com",
      iniciais: "JA",
      nota: 70,
      linguagem: "Meme",
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/bronze-trophy.svg",
      backgroundColor: "bg-[#EE9874]"
    }
  ]

  const pesoPenaPodium: PodiumType[] = [
    {
      email: "juliana@teste.com",
      iniciais: "JM",
      nota: 100,
      linguagem: "Node",
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/golden-coin.svg",
      backgroundColor: "bg-[#a17808]"
    },
    {
      email: "pedro@teste",
      iniciais: "PA",
      linguagem: "Elixir",
      nota: 80,
      dataUltimoEnvio: "10/09/2023",
      icone: "icons/silver-coin.svg",
      backgroundColor: "bg-[#c0c0c0]"
    },
    {
      email: "marcos@teste",
      iniciais: "MS",
      linguagem: "PHP",
      nota: 70,
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