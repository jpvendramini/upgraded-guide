import { useDropZoneContext } from "@components/contexts/DropZoneContext";
import React from "react";

const LinguagemInput = () => {
  const { file, setFile, linguagem, setLinguagem } = useDropZoneContext();

  const handleChangeLinguagem = (value: string) => {
    setLinguagem(value);
  };

  return (
    <input
      placeholder="Linguagem"
      className="w-[7.8rem] border-b-2 text-gray-900 outline-none focus:ring-transparent block p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-transparent dark:focus:border-white font-sans text-sm"
      value={linguagem}
      onChange={(event) => handleChangeLinguagem(event.target.value)}
      required
    />
  );
};

export default LinguagemInput;
