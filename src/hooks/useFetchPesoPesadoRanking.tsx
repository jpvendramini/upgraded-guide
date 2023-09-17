import { useRankingContext } from "@contexts/RankingContext";
import { useApi } from "@server/api";
import { useQuery } from "react-query";
import { RankingResultType } from "./types";

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

export const useFetchPesoPesadoRanking = () => {
  const { pesoPesadoPage } = useRankingContext();
  const { api } = useApi();
  return useQuery<RankingResultType>(
    ['peso-pesado-ranking', pesoPesadoPage],
    () =>
      api
        .get('/ranking/PESO_PESADO', {
          params: { page: pesoPesadoPage - 1, size: 4 },
        })
        .then((result) => result.data)
  );
};