
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

const Podium = async () => {
  /*  const { access_token } = await getServerSession(authOptions);
   console.log("teste 11", access_token);
   const pesoPesadoPodium = await fetch(`${baseUrl}/ranking?categoria=PESO_PESADO&size=3`, {
     headers: {
       Authorizarion: `Bearer ${access_token}`
     }
   })
     .then(response => response.json())
     .then((result) => {
       const pesadoPodium = result?.content.map((pesoPesado: any, index: any) => {
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
       return pesadoPodium;
     })
     .catch(() => toast.error("Erro ao exibir Podium"));
 
   const pesoPenaPodium = await fetch(`${baseUrl}/ranking?categoria=PESO_PENA&size=3`, {
     headers: {
       Authorizarion: `Bearer ${access_token}`
     }
   })
     .then(response => response.json())
     .then((result) => {
       const penaPodium = result?.content.map((pena: any, index: any) => {
         const podium = {
           email: pena.userId,
           iniciais: pena.userId.substring(0, 2),
           nota: Number(pena.nota).toFixed(2),
           linguagem: pena.linguagem,
           dataUltimoEnvio: pena.dataEnvio,
           icone: PESO_PENA_VALUES[index].icone,
           backgroundColor: PESO_PENA_VALUES[index].backgroundColor,
         }
         return podium;
       })
       return penaPodium;
     })
     .catch(() => toast.error("Erro ao exibir Podium"));
 
   if (!pesoPesadoPodium) return <Label value='Carregando...' />
   if (!pesoPenaPodium) return <Label value='Carregando...' />
 
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
   ) */
  return <div>Dale</div>
}

export default Podium