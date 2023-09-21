"use client"
import Label from "@components/atoms/Label/page";
import PesoPenaIcon from "@components/atoms/PesoPenaIcon/page";
import DataTable from "@components/molecules/DataTable/page";
import { usePool } from "@contexts/PoolContext";
import { useRankingContext } from "@contexts/RankingContext";
import { baseUrl } from "@server/api";
import { useEffect, useState } from "react";
import { ColumnType } from "../DataTable/types";
import PesoPenaPagination from "../PesoPenaPagination/page";

const PesoPenaDataTable = () => {
  const columns: ColumnType[] = [
    { title: 'Email', alignment: 'left', width: '20%' },
    { title: 'Nota', alignment: 'left', width: '8%' },
    { title: 'Data Envio', alignment: 'left', width: '18%' },
    { title: 'Linguagem', alignment: 'left', width: '18%' },
    { title: 'Categoria', alignment: 'center', width: '10%' },
  ];

  const { pesoPenaPage } = useRankingContext();
  const [data, setData] = useState(undefined);
  const [totalPages, setTotalPages] = useState(0);
  const { depencyTreeNotifier } = usePool();

  useEffect(() => {
    fetch('/api/auth/session')
      .then((response) => response.json())
      .then((response) => {
        fetch(`${baseUrl}/ranking?categoria=PESO_PENA&size=4&page=${pesoPenaPage - 1}`, {
          headers: {
            Authorization: `Bearer ${response.access_token}`
          }
        })
          .then(response => response.json())
          .then((result) => {
            const pesoPenaData = result?.content.map((pesoPena: any) => {
              const rank = {
                email: pesoPena.userId,
                nota: Number(pesoPena.nota).toFixed(2),
                dataEnvio: pesoPena.dataEnvio,
                linguagem: pesoPena.linguagem,
                categoria: <PesoPenaIcon />
              }
              return rank;
            })
            setData(pesoPenaData);
            setTotalPages(result?.totalPages);
          })
      })
  }, [pesoPenaPage, depencyTreeNotifier])

  if (!data) return <Label value="Carregando..." />

  return <div className="bg-[#3D3D3D80] rounded-xl h-[390px] flex flex-col justify-between">
    <DataTable columns={columns} rows={data} />
    <PesoPenaPagination totalPages={totalPages} />
  </div>
};

export default PesoPenaDataTable;
