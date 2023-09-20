import { useRankingContext } from "@contexts/RankingContext";
// import { useApi } from "@server/api";
import { useQuery } from "react-query";
import { RankingResultType, RankingType } from "./types";

/* export const useFetchRanking = () => {
  const { pesoPesadoPage } = useRankingContext();
  const { api } = useApi();
  return useQuery<RankingResultType>(
    ['peso-peado-ranking', pesoPesadoPage],
    () =>
      api
        .get('/ranking/PESO_PESADO', {
          params: { page: pesoPesadoPage - 1 },
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
  },
];

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
  },
};

export const useFetchPesoPesadoRanking = () => {
  const { pesoPesadoPage } = useRankingContext();
  // const { api } = useApi();
  return useQuery<RankingResultType>(
    ["peso-pesado-ranking", pesoPesadoPage],
    () => Promise.resolve().then(() => result)
  );
};
