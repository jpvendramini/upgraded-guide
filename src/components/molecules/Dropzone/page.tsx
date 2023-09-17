"use client";
import { useDropZoneContext } from "@components/contexts/DropZoneContext";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = () => {
  const { file, setFile } = useDropZoneContext();
  const onDrop = useCallback((acceptedFiles: any) => {
    setFile(acceptedFiles[0]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFileDialogActive,
    open,
  } = useDropzone({
    onDrop,
  });

  const dropZoneStyle = `w-full h-full flex flex-col justify-center items-center text-center text-white font-sans transition ease-in-out gap-4 ${
    isDragActive || isFileDialogActive || !!!file
      ? "border-dashed border-2 rounded"
      : ""
  }`;

  return (
    <>
      <div className={dropZoneStyle} {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive || isFileDialogActive || !!!file ? (
          <>
            <Image src="icons/dropzone.svg" alt="" width={50} height={50} />
            <h2>
              Arraste aqui seu projeto <br /> comprimido.
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
