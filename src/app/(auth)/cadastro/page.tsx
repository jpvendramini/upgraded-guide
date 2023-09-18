"use client"
import Link from "next/link";
import { useMemo, useState } from "react";

type CategoriaType = "PESO_PENA" | "PESO_PESADO" | null;

const Cadastro = () => {
  const [categoria, setCategoria] = useState<CategoriaType>(null);
  const isPesoPesado = useMemo<boolean>(() => categoria === "PESO_PESADO", [categoria]);
  const isPesoPena = useMemo<boolean>(() => categoria === "PESO_PENA", [categoria]);
  const categoriaSelecionada = useMemo<string>(() => {
    if (categoria === "PESO_PENA") return "Categoria selecionada: Peso pena";
    if (categoria === "PESO_PESADO") return "Categoria selecionada: Peso pesado";
    return "Nenhuma categoria selecionada"
  },
    [categoria]);
  const isCategoriaNull = useMemo<boolean>(() => !categoria, [categoria]);
  return <div className="w-full flex flex-col items-center gap-24">
    <div className="flex flex-col gap-4">
      <p
        className="text-white font-sans font-bold text-xl"
      >Seleciona a categoria:</p>
      <div className="flex gap-4">
        <button type="button"
          className={`w-40 h-16 rounded-xl  ${isPesoPesado ? "bg-gradient-to-r from-[#FF3D00] to-[#00A3FF]" : "bg-white"}`}
          onClick={() => setCategoria("PESO_PESADO")}>
          <p className={`font-sans font-bold text-lg ${isPesoPesado ? "text-white" : "text-[#061127]"}`}>Peso Pesado</p>
        </button>
        <button type="button"
          className={`w-40 h-16 rounded-xl  ${isPesoPena ? "bg-gradient-to-r from-[#FF3D00] to-[#00A3FF]" : "bg-white"}`}
          onClick={() => setCategoria("PESO_PENA")}>
          <p className={`font-sans font-bold text-lg ${isPesoPena ? "text-white" : "text-[#061127]"}`}>Peso Pena</p>
        </button>
      </div>
      <p className="text-white font-sans font-bold text-xl">{categoriaSelecionada}</p>
    </div>
    <div className="flex gap-4">
      <Link href="/link">
        <button type="button" className="w-40 h-16 rounded-full border-white border-2">
          <p className="text-white font-sans font-bold text-lg">Cancelar</p>
        </button>
      </Link>
      <button type="button"
        disabled={isCategoriaNull}
        className={`w-40 h-16 rounded-full  border-2 ${isCategoriaNull ? "border-[#666666]" : "border-white"}`}>
        <p className={`font-sans font-bold text-lg ${isCategoriaNull ? "text-[#666666]" : "text-white"}`}>Confirmar</p>
      </button>
    </div>
  </div>;
};

export default Cadastro;
