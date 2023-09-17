"use client"
import Description from '@components/atoms/Description/page';
import { PodiumType } from '@components/atoms/PodiumCard/page';
import Title from '@components/atoms/Title/page';
import PodiumSession from '@components/molecules/PodiumSession/page';
import { useFetchPesoPenaPodium } from '@hooks/useFetchPesoPenaPodium';
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
];

const PESO_PENA_VALUES = [
  {
    icone: "icons/golden-coin.svg",
    backgroundColor: "bg-[#a17808]"
  },
  {
    icone: "icons/silver-coin.svg",
    backgroundColor: "bg-[#c0c0c0]"
  },
  {
    icone: "icons/bronze-coin.svg",
    backgroundColor: "bg-[#EE9874]"
  }
]

const Podium = () => {
  const { data: pesoPesadoData } = useFetchPesoPesadoPodium();
  const { data: pesoPenaData } = useFetchPesoPenaPodium();
  const pesoPesadoPodium = useMemo<PodiumType[]>(() => {
    if (!pesoPesadoData) return [];
    const pesadoPodium = pesoPesadoData.content.map((pesoPesado, index) => {
      const podium = {
        email: pesoPesado.email,
        iniciais: pesoPesado.email.substring(0, 2),
        nota: pesoPesado.nota,
        linguagem: pesoPesado.linguagem,
        dataUltimoEnvio: pesoPesado.dataEnvio,
        icone: PESO_PENA_VALUES[index].icone,
        backgroundColor: PESO_PENA_VALUES[index].backgroundColor,
      }
      return podium;
    })
    return pesadoPodium;
  }
    , [pesoPesadoData])

  const pesoPenaPodium = useMemo<PodiumType[]>(() => {
    if (!pesoPenaData) return [];
    const penaPodium = pesoPenaData.content.map((pesoPena, index) => {
      const podium = {
        email: pesoPena.email,
        iniciais: pesoPena.email.substring(0, 2),
        nota: pesoPena.nota,
        linguagem: pesoPena.linguagem,
        dataUltimoEnvio: pesoPena.dataEnvio,
        icone: PESO_PESADO_VALUES[index].icone,
        backgroundColor: PESO_PESADO_VALUES[index].backgroundColor,
      }
      return podium;
    })
    return penaPodium;
  }
    , [pesoPesadoData]);

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