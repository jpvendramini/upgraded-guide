import EstatisticasValue, { EstatisticasValueType } from "@components/atoms/EstatisticasValue/page"
import Label from "@components/atoms/Label/page"
import { useMemo } from "react"

const EstatisticasCard = () => {
    const estatisticasValues = useMemo<EstatisticasValueType[]>(() => {
        return [
            {
                label: "N/ check failed",
                value: "1.1",
            },
            {
                label: "N/ check failed",
                value: "1.1",
            },
            {
                label: "N/ check failed",
                value: "1.1",
            },
            {
                label: "N/ check failed",
                value: "1.1",
            },
            {
                label: "N/ check failed",
                value: "1.1",
            }
        ]
    }, [])

    return (
        <div className='h-[8.875rem] bg-[#3D3D3D80] rounded-lg flex px-6 py-3 justify-end relative'>
            <div className="flex flex-col justify-start w-1/2">
                <Label value="Pontuação por envio" />
                <p className="text-white font-sans text-xs font-bold">grafico</p>
            </div>
            <div className="flex flex-wrap w-1/2">
                {estatisticasValues.map((value) => (
                    <div
                        className="w-1/2 my-1 flex items-center"
                        key={`value-${value.label}`}
                    >
                     <EstatisticasValue label={value.label} value={value.value} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EstatisticasCard;