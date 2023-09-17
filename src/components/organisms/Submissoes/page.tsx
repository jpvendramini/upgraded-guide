"use client";
import Description from "@components/atoms/Description/page";
import Title from "@components/atoms/Title/page";
import { useDropZoneContext } from "@components/contexts/DropZoneContext";
import Dropzone from "@components/molecules/Dropzone/page";
import LinguagemInput from "@components/molecules/LinguagemInput/page";
import UploadButton from "@components/molecules/UploadButton/page";
import React from "react";

const Submissoes = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Title title="Área de submissões" />
        <Description value="Arraste seu projeto comprimido para esta área e acompanhe enquanto suas métricas são calculadas." />
      </div>
      <form className="h-[24rem] bg-[#3D3D3D80] rounded-lg flex flex-col px-10 py-6 relative gap-4">
        <Dropzone />
        <div className="flex w-full justify-end gap-4">
          <LinguagemInput />
          <UploadButton />
        </div>
      </form>
    </div>
  );
};

export default Submissoes;
