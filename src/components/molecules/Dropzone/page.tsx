"use client";
import { useDropZoneContext } from "@components/contexts/DropZoneContext";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";

const Dropzone = () => {
  const { file, setFile } = useDropZoneContext();
  const onDrop = useCallback((acceptedFiles: any) => {
    if (acceptedFiles[0].name.split(".")[1] === "yml") {
      setFile(acceptedFiles[0]);
    } else {
      toast.error("Tipo de arquivo não aceito", { position: "bottom-center" })
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFileDialogActive,
    open,
  } = useDropzone({
    onDrop,
    maxFiles: 1,

  });

  const dropZoneStyle = `w-full h-full flex flex-col justify-center items-center text-center text-white font-sans transition ease-in-out gap-4 ${isDragActive || isFileDialogActive || !!!file
    ? "border-dashed border-2 rounded"
    : ""
    }`;

  return (
    <>
      <div className={dropZoneStyle} {...getRootProps()}>
        <ToastContainer />
        <input {...getInputProps()} />
        {isDragActive || isFileDialogActive || !file ? (
          <>
            <Image src="icons/dropzone.svg" alt="" width={50} height={50} />
            <h2>
              Arraste aqui seu docker compose
            </h2>
          </>
        ) : (
          <p>Arquivo carregado: {file?.name}</p>
        )}
      </div>
    </>
  );
};

export default Dropzone;
