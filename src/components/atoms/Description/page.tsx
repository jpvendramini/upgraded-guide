import React from "react";

type Props = {
  value: string;
};

const Description = ({ value }: Props) => {
  return <div className="text-white font-sans text-sm">{value}</div>;
};

export default Description;
