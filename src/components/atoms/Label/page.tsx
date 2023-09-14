import React from "react";

type Props = {
    value: string;
};

const Label = ({ value }: Props) => {
    return <p className="text-white font-sans text-xs font-bold">{value}</p>;
};

export default Label;