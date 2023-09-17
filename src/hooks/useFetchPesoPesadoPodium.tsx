"use client"
/* import { useApi } from "@server/api"; */
import { useQuery } from "@tanstack/react-query";
import { RankingResultType, RankingType } from "./types";

/* export const useFetchPesoPesadoPodium = () => {
  const { api } = useApi();
  return useQuery<RankingResultType>(
    ['peso-pesado-podium'],
    () =>
      api
        .get('/ranking/PESO_PESADO', {
          params: { page: 0, size: 3 },
        })
        .then((result) => result.data)
  );
}; */

const content: RankingType[] = [
  {
    email: "pablo@teste.com",
    nota: 100,
    dataEnvio: "10/09/2023",
    categoria: "PESO_PESADO",
    linguagem: "JAVA",
  },
  {
    email: "joao@teste.com",
    nota: 80,
    dataEnvio: "10/09/2023",
    categoria: "PESO_PESADO",
    linguagem: "Node",
  },
  {
    email: "julio@teste.com",
    nota: 70,
    dataEnvio: "10/09/2023",
    categoria: "PESO_PESADO",
    linguagem: "Meme",
  }
]

const result: RankingResultType = {
  content,
  total: {
    elements: 10,
    pages: 4,
  },
  page: {
    index: 1,
    last: false,
    size: 4,
  }
}

export const useFetchPesoPesadoPodium = () => {
  /*  const { api } = useApi(); */
  return useQuery<RankingResultType>(
    ['peso-pesado-podium'],
    () =>
      Promise.resolve().then(() => result)
  );
};

