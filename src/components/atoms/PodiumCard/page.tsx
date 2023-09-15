import Image from "next/image";

export type PodiumType = {
    nome: string;
    iniciais: string;
    pontuacao: number;
    dataUltimoEnvio: string;
    icone: string;
    backgroundColor?: string;
};

const PodiumCard = ({ nome, iniciais, pontuacao, dataUltimoEnvio, backgroundColor, icone }: PodiumType) => {
    return (
        <div className={`w-[12.25rem] flex items-center justify-center gap-4 ${backgroundColor} rounded-lg h-[6.625rem]`}>
            <div className="rounded-full bg-[#D9D9D9] w-[2.5rem] h-[2.5rem] flex items-center justify-center -mr-3 font-bold">{iniciais}</div>
            <div className="flex flex-col gap-2 w-[85px] ml-1">
                <p className="font-bold font-sans text-[#151515] text-base mr-1 whitespace-nowrap overflow-hidden">{nome}</p>
                <div className="flex flex-col">
                    <p className="font-sans text-white text-sm font-bold">{`P: ${pontuacao}`}</p>
                    <p className="font-sans text-white text-sm">{dataUltimoEnvio}</p>
                </div>
            </div>
            <div className="w-[2.5rem] -ml-2">
                <Image
                    alt="pofium icon"
                    src={icone}
                    width={40}
                    height={35}
                />
            </div>
        </div>
    );
};

PodiumCard.defaultProps = {
    backgroundColor: "bg-[#666666]"
}

export default PodiumCard;