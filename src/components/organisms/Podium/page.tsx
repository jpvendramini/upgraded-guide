"use client"
import Description from "@components/atoms/Description/page";
import Label from "@components/atoms/Label/page";
import Title from "@components/atoms/Title/page";
import PodiumSession from "@components/molecules/PodiumSession/page";
import { baseUrl } from "@server/api";
import { useEffect, useState } from "react";

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
  const [pesoPesadoPodium, setPesoPesadoPodium] = useState(undefined);
  const [pesoPenaPodium, setPesoPenaPodium] = useState(undefined);
  useEffect(() => {
    fetch('/api/auth/session')
      .then(response => response.json()
        .then((result) => {
          fetch(`${baseUrl}/ranking?categoria=PESO_PESADO&size=3`, {
            headers: {
              Authorization: `Bearer ${result.access_token}`
            }
          })
            .then((result) => {
              if (!!result) {
                result.json().then((res) => {
                  const data = res.content.map((pesoPesado: any, index: any) => {
                    const podium = {
                      email: pesoPesado.userId,
                      iniciais: pesoPesado.userId.substring(0, 2),
                      nota: Number(pesoPesado.nota).toFixed(2),
                      linguagem: pesoPesado.linguagem,
                      dataUltimoEnvio: pesoPesado.dataEnvio,
                      icone: PESO_PESADO_VALUES[index].icone,
                      backgroundColor: PESO_PESADO_VALUES[index].backgroundColor,
                    }
                    return podium;
                  })
                  setPesoPesadoPodium(data);
                });
              }
            });
        }));
  }, [])

  useEffect(() => {
    fetch('/api/auth/session')
      .then(response => response.json()
        .then((result) => {
          fetch(`${baseUrl}/ranking?categoria=PESO_PENA&size=3`, {
            headers: {
              Authorization: `Bearer ${result.access_token}`
            }
          })
            .then((result) => {
              if (!!result) {
                result.json().then((res) => {
                  const data = res.content.map((pesoPena: any, index: any) => {
                    const podium = {
                      email: pesoPena.userId,
                      iniciais: pesoPena.userId.substring(0, 2),
                      nota: Number(pesoPena.nota).toFixed(2),
                      linguagem: pesoPena.linguagem,
                      dataUltimoEnvio: pesoPena.dataEnvio,
                      icone: PESO_PENA_VALUES[index].icone,
                      backgroundColor: PESO_PENA_VALUES[index].backgroundColor,
                    }
                    return podium;
                  })
                  setPesoPenaPodium(data);
                });
              }
            });
        }));
  }, [])

  if (!pesoPesadoPodium) return <Label value='Carregando...' />
  if (!pesoPenaPodium) return <Label value='Carregando...' />

  return (
    <div className="flex flex-col gap-4 h-[332px]">
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