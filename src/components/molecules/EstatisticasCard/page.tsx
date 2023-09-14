import EstatisticasValue, { EstatisticasValueType } from "@components/atoms/EstatisticasValue/page"
import Label from "@components/atoms/Label/page"
import TestGrafico2 from "@components/atoms/LineChart/page"
import { useMemo } from "react"

const EstatisticasCard = () => {
    const linePoints = [0, 30, 45, 10, 25, 26, 70, 100];

    const estatisticasValues = useMemo<EstatisticasValueType[]>(() => {
        return [
            {
                label: "N/ check failed",
                value: "5.00",
            },
            {
                label: "Duration score",
                value: "50.00",
            },
            {
                label: "Resilience score",
                value: "25.00",
            },
            {
                label: "N/ failed calls",
                value: "5.00",
            },
            {
                label: "Check test score",
                value: "25.00",
            }
        ]
    }, [])

    return (
        <div className='h-[8.875rem] bg-[#3D3D3D80] rounded-lg flex px-6 py-3 justify-end relative'>
            <div className="flex flex-col justify-start w-1/2">
                <Label value="Pontuação por envio" />
                <TestGrafico2 linePoints={linePoints}/>
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
            <div className="absolute bottom-5 right-12 flex gap-2 items-center">
                    <Label value="Total: " />
                    <p className="bg-gradient-to-r from-[#FF3D00] to-[#00A3FF] text-transparent bg-clip-text font-sans font-bold">10000.00</p>
            </div>
        </div>
    )
}

export default EstatisticasCard;