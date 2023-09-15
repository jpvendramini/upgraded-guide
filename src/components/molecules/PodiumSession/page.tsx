import PodiumCard, { PodiumType } from "@components/atoms/PodiumCard/page";
import React from "react";

type Props = {
    podiumList: PodiumType[]
};

const PodiumSession = ({ podiumList }: Props) => {
    return <div className="flex gap-6">
        {podiumList.map((podium) => (
            <PodiumCard
                dataUltimoEnvio={podium.dataUltimoEnvio}
                icone={podium.icone}
                iniciais={podium.iniciais}
                nome={podium.nome}
                pontuacao={podium.pontuacao}
                backgroundColor={podium.backgroundColor}
            />
        ))}
    </div>;
};

export default PodiumSession;
