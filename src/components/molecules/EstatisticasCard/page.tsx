import EstatisticasValue, { EstatisticasValueType } from "@components/atoms/EstatisticasValue/page"
import Label from "@components/atoms/Label/page"
import LineChart from "@components/atoms/LineChart/page"
import { useMemo } from "react"

const EstatisticasCard = () => {
    const linePoints = [0, 30, 45, 10, 25, 26, 70, 100];

    return (
        <div className='h-[8.875rem] bg-[#3D3D3D80] rounded-lg flex px-6 py-3 justify-end relative'>
            <div className="flex flex-col justify-start w-2/3">
                <Label value="Pontuação por envio" />
                <LineChart linePoints={linePoints} />
            </div>
            <div className="flex w-1/2 flex-col justify-center gap-3">
            <div className="flex gap-2 w-52">
                    <Label value={"Email"} />
                    <p className="font-sans text-xs text-white whitespace-nowrap overflow-hidden">julio@teste.com.br ahjsdhajs hjashdjahsd jkjkj asodioaisdoais</p>
                </div>
                <div className="flex gap-2">
                    <Label value={"Linguagem"} />
                    <p className="font-sans text-xs text-white">Java</p>
                </div>
                <div className="flex gap-2">
                    <Label value={"Último envio"} />
                    <p className="font-sans text-xs text-white">10/10/2023</p>
                </div>
                <div className="flex items-center gap-2">
                    <Label value="Pontuação: " />
                    <p className="bg-gradient-to-r from-[#FF3D00] to-[#00A3FF] text-transparent bg-clip-text font-sans font-bold">10000.00</p>
                </div>
            </div>
        </div>
    )
}

export default EstatisticasCard;