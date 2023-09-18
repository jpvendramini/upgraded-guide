import { useDropZoneContext } from "@components/contexts/DropZoneContext";
import { baseUrl } from "@server/api";
import { useState } from "react";
import { toast } from "react-toastify";

const UploadButton = () => {
  const { file, setFile, linguagem, setLinguagem } = useDropZoneContext();
  const [loading, setLoading] = useState(false);
  const handleEnviarArquivo = () => {
    if (file && linguagem && !loading) {
      var formdata = new FormData();
      setLoading(true);
      fetch('/api/auth/session')
        .then(response => response.json())
        .then((response) => {
          formdata.append("userId", response?.user?.email);
          formdata.append("categoria", "PESO_PESADO");
          formdata.append("linguagem", linguagem);
          formdata.append("arquivo", file);
          var requestOptions = {
            method: 'POST',
            body: formdata,
          };
          fetch(`${baseUrl}/submissoes`, requestOptions)
            .then(response => response.text())
            .then(() => toast.success("Submissão feita com sucesso"))
            .catch(() => toast.error("Erro ao fazer submissão"))
            .finally(() => setLoading(false))
        })
        .catch(() => toast.error("Erro durante a execução"));
      setLinguagem("");
      setFile(undefined);
    }
  };

  const isDisabled = !linguagem || !file || loading;
  const isFileEmpty = !!file;

  return (
    <button
      className={`w-[7.8rem] border-solid ${isFileEmpty
        ? "bg-[#44ff004d] border-[#37ff00] "
        : "bg-[#FFA8004D] border-[#FF7A00]"
        } border-2 rounded py-1 text-white
      ${isDisabled && "bg-[#ababab4d] border-[#ffffff]"}
      `}
      onClick={handleEnviarArquivo}
      type="submit"
    >
      <div className="text-white font-sans text-sm">
        {!isDisabled ? "Enviar" : "Adicione Arquivo"}
      </div>
    </button>
  );
};

export default UploadButton;
