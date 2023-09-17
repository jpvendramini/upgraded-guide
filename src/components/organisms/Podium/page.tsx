"use client"
import Description from '@components/atoms/Description/page';
import { PodiumType } from '@components/atoms/PodiumCard/page';
import Title from '@components/atoms/Title/page';
import PodiumSession from '@components/molecules/PodiumSession/page';
import { useFetchPesoPesadoPodium } from '@hooks/useFetchPesoPesadoPodium';
import { useMemo } from 'react';

const PESO_PESADO_VALUES = [
  {
    icone: "icons/golden-trophy.svg",
    backgroundColor: "bg-[#a17808]"
  },
  {
    icone: "icons/silver-trophy.svg",
    backgroundColor: "bg-[#c0c0c0]"
  },
  {
    icone: "icons/bronze-trophy.svg",
    backgroundColor: "bg-[#EE9874]"
  }
]

const Podium = () => {
  const { data } = useFetchPesoPesadoPodium();
  const pesoPesadoPodium = useMemo<PodiumType[]>(() => {
    if (!data) return [];
    const pesadoPodium = data.content.map((pesoPesado, index) => {
      const podium = {
        email: pesoPesado.email,
        iniciais: pesoPesado.email.substring(0, 2),
        nota: pesoPesado.nota,
        linguagem: pesoPesado.linguagem,
        dataUltimoEnvio: pesoPesado.dataEnvio,
        icone: PESO_PESADO_VALUES[index].icone,
        backgroundColor: PESO_PESADO_VALUES[index].backgroundColor,
      }
      return podium;
    })
    return pesadoPodium;
  }
    , [data])

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
        <PodiumSession podiumList={pesoPesadoPodium} />
        <PodiumSession podiumList={pesoPenaPodium} />
      </div>
    </div>
  )
}

export default Podium