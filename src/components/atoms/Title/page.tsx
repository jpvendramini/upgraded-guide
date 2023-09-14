import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <div className="text-white font-bold font-sans text-2xl">{title}</div>;
};

export default Title;
