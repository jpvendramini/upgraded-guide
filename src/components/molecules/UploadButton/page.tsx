import { useDropZoneContext } from "@components/contexts/DropZoneContext";
import React from "react";

const UploadButton = () => {
  const { file, setFile, linguagem, setLinguagem } = useDropZoneContext();

  const handleEnviarArquivo = () => {
    if (file && linguagem) {
      setLinguagem("");
      setFile(undefined);
    }
  };

  const isDisabled = !!!linguagem && !!file;
  const isFileEmpty = !!file;

  return (
    <button
      className={`w-[7.8rem] border-solid ${
        isFileEmpty
          ? "bg-[#44ff004d] border-[#37ff00] "
          : "bg-[#FFA8004D] border-[#FF7A00]"
      } border-2 rounded py-1 text-white
      ${isDisabled && "bg-[#ababab4d] border-[#ffffff]"}
      `}
      onClick={handleEnviarArquivo}
      type="submit"
    >
      <div className="text-white font-sans text-sm">
        {!!file ? "Enviar" : "Novo envio"}
      </div>
    </button>
  );
};

export default UploadButton;
