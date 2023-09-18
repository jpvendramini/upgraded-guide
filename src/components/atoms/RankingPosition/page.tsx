import Image from "next/image";


type Props = {
    value: number;
};

const RankingPosition = ({ value }: Props) => {
    return <div className="flex gap-2 items-center">
        <p>{value}</p>
        <Image
            alt="ranking coin icon"
            src={"icons/coin.svg"}
            width={30}
            height={30}
        />
    </div>;
};

export default RankingPosition;