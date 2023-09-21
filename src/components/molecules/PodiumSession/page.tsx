import PodiumCard, { PodiumType } from "@components/atoms/PodiumCard/page";
import { formatDate } from "@components/utils/date";

type Props = {
    podiumList: PodiumType[]
};

const PodiumSession = ({ podiumList }: Props) => {
    return <div className="flex gap-6">
        {podiumList.map((podium, index) => (
            <PodiumCard
                key={`podium-session-${index}`}
                dataUltimoEnvio={formatDate(podium.dataUltimoEnvio, 'DD/MM HH:mm')}
                icone={podium.icone}
                iniciais={podium.iniciais}
                email={podium.email}
                nota={podium.nota}
                backgroundColor={podium.backgroundColor}
                linguagem={podium.linguagem}
            />
        ))}
    </div>;
};

export default PodiumSession;
