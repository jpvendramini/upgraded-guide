"use client";
import Title from "@components/atoms/Title/page";
import PesoPenaDataTable from "@components/molecules/PesoPenaDataTable/page";
import PesoPesadoDataTable from "@components/molecules/PesoPesadoDataTable/page";
import React, { useEffect, useMemo, useState } from "react";

export type CategoriaType = "PESO_PENA" | "PESO_PESADO" | null;

const Rank = () => {
  const [categoria, setCategoria] = useState<CategoriaType>(null)
  const pesoPesadoSelected = useMemo(() => categoria === "PESO_PESADO"
    , [categoria])
  const pesoPenaSelected = useMemo(() => categoria === "PESO_PENA"
    , [categoria])
  useEffect(() => {
    setCategoria("PESO_PESADO");
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <Title title="Rank" />
        <div className="flex gap-2 items-center">
          <p className="text-white font-sans font-bold">Categoria: </p>
          <button type="button"
            className={`${pesoPesadoSelected ? "bg-gradient-to-r from-[#FF3D00] to-[#00A3FF] text-transparent bg-clip-text" : "text-[#C1C1C1]"} font-sans font-bold underline`}
            onClick={() => setCategoria("PESO_PESADO")}>
            Peso Pesado
          </button>
          <button type="button"
            className={`${pesoPenaSelected ? "bg-gradient-to-r from-[#FF3D00] to-[#00A3FF] text-transparent bg-clip-text" : "text-[#C1C1C1]"} font-sans font-bold underline`}
            onClick={() => setCategoria("PESO_PENA")}>
            Peso Pena
          </button>
        </div>
      </div>
      {pesoPesadoSelected && <PesoPesadoDataTable />}
      {pesoPenaSelected && <PesoPenaDataTable />}
    </div>
  );
};

export default Rank;
