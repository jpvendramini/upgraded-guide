import Description from "@components/atoms/Description/page"
import Title from "@components/atoms/Title/page"
import EstatisticasCard from "@components/molecules/EstatisticasCard/page"

const Estatisticas = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Title title="Minhas estatísticas" />
        <Description value="Aqui  você pode conferir as estatísticas dos últimos envios realizados." />
      </div>
      <EstatisticasCard />
    </div>
  )
}

export default Estatisticas