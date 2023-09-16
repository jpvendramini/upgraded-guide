import Image from "next/image";
import React from "react";


type Props = {
    value: number;
};

const RankingPosition = ({ value }: Props) => {
    return <div className="flex gap-2 items-center">
        <p>{value}</p>
        <Image
            alt="ranking coin icon"
            src={"icons/coin.svg"}
            width={40}
            height={35}
        />
    </div>;
};

export default RankingPosition;