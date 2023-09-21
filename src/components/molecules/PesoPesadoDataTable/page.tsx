"use client";
import Label from "@components/atoms/Label/page";
import PesoPesadoIcon from "@components/atoms/PesoPesadoIcon/page";
import DataTable from "@components/molecules/DataTable/page";
import { usePool } from "@contexts/PoolContext";
import { useRankingContext } from "@contexts/RankingContext";
import { baseUrl } from "@server/api";
import { useEffect, useState } from "react";
import { ColumnType } from "../DataTable/types";
import PesoPesadoPagination from "../PesoPesadoPagination/page";
import { formatDate } from "@components/utils/date";

const PesoPesadoDataTable = () => {
  const columns: ColumnType[] = [
    { title: "Email", alignment: "left", width: "26%" },
    { title: "Nota", alignment: "left", width: "8%" },
    { title: "Data Envio", alignment: "left", width: "15%" },
    { title: "Linguagem", alignment: "left", width: "15%" },
    { title: "Categoria", alignment: "center", width: "10%" },
  ];
  const { pesoPesadoPage } = useRankingContext();
  const [data, setData] = useState(undefined);
  const { depencyTreeNotifier } = usePool();

  useEffect(() => {
    fetch("/api/auth/session")
      .then((response) => response.json())
      .then((response) => {
        fetch(
          `${baseUrl}/ranking?categoria=PESO_PESADO&size=4&page=${pesoPesadoPage - 1
          }`,
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            const pesoPesadoData = result?.content.map((pesoPesado: any) => {
              const rank = {
                email: pesoPesado.userId.replace('@muralis.com.br', ''),
                nota: Number(pesoPesado.nota).toFixed(2),
                dataEnvio: formatDate(pesoPesado.dataEnvio, 'DD/MM HH:mm'),
                linguagem: pesoPesado.linguagem.toUpperCase(),
                categoria: <PesoPesadoIcon />,
              };
              return rank;
            });
            setData(pesoPesadoData);
          });
      });
  }, [pesoPesadoPage, depencyTreeNotifier]);

  if (!data) return <Label value="Carregando..." />;

  return (
    <div className="bg-[#3D3D3D80] rounded-xl h-[390px] flex flex-col justify-between">
      <DataTable columns={columns} rows={data} />
      <PesoPesadoPagination />
    </div>
  );
};

export default PesoPesadoDataTable;
