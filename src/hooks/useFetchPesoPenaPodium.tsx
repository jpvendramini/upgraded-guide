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
        .get('/ranking/PESO_PENA', {
          params: { page: 0, size: 3 },
        })
        .then((result) => result.data)
  );
}; */

const content: RankingType[] = [
  {
    email: "juliana@teste.com",
    nota: 97,
    dataEnvio: "10/09/2023",
    categoria: "PESO_PENA",
    linguagem: "JAVA",
  },
  {
    email: "marcos@teste.com",
    nota: 85,
    dataEnvio: "10/09/2023",
    categoria: "PESO_PENA",
    linguagem: "Node",
  },
  {
    email: "andreia@teste.com",
    nota: 52,
    dataEnvio: "10/09/2023",
    categoria: "PESO_PENA",
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

export const useFetchPesoPenaPodium = () => {
  /*  const { api } = useApi(); */
  return useQuery<RankingResultType>(
    ['peso-pena-podium'],
    () =>
      Promise.resolve().then(() => result)
  );
};

