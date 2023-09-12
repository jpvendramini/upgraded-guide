import React from "react";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <div className="font-bold">{title}</div>;
};

export default Title;
