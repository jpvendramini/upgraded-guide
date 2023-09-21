"use client";
import Label from "@components/atoms/Label/page";
import LabelButton from "@components/atoms/LabelButton/page";
import LineChart from "@components/atoms/LineChart/page";
import { usePool } from "@contexts/PoolContext";
import { baseUrl } from "@server/api";
import { useEffect, useMemo, useState } from "react";
import SubmissoesDataTable from "../SubmissoesDataTable/page";
import { formatDate } from "@components/utils/date";

type UserType = {
  email: string;
  name: string;
};

type UltimaSubmissaoType = {
  nota?: number;
  dataEnvio: string;
  linguagem: string;
  situacao: string;
};

export type SubmissaoType = {
  id: string;
  situacao: string;
  dataEnvio: string;
  userId: string;
  linguagem: string;
  categoria: string;
  nota?: number;
  metricas?: {
    correctness: string;
    performance: string;
    stability: string;
  };
};

const EstatisticasCard = () => {
  const [data, setData] = useState<SubmissaoType[]>([]);
  const [user, setUser] = useState<UserType>({ name: "", email: "" });
  const [linePoints, setLinePoints] = useState<number[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<"grafico" | "lista">(
    "grafico",
  );
  const { depencyTreeNotifier } = usePool();
  useEffect(() => {
    fetch("/api/auth/session").then((response) =>
      response.json().then((result) => {
        setUser(result.user);
        fetch(`${baseUrl}/submissoes/user/${result.user.email}`, {
          headers: {
            Authorization: `Bearer ${result.access_token}`,
          },
        }).then((result) => {
          if (!!result) {
            result.json().then((res: SubmissaoType[]) => {
              setData(res.map((item) => ({ ...item, dataEnvio: formatDate(item.dataEnvio, 'DD/MM HH:mm') })));
              const newLinePoints = res
                .filter((item) => !!item?.nota)
                .map((item) => Number(item.nota))
                .reverse();
              setLinePoints(newLinePoints);
              const newDates = res
                .filter((item) => !!item?.nota)
                .map((item) => item.dataEnvio.substring(0, 5))
                .reverse();
              setDates(newDates);
            });
          }
        });
      }),
    );
  }, [depencyTreeNotifier]);

  const ultimaSubmissao = useMemo<UltimaSubmissaoType>(() => {
    if (!data || data.length === 0) return { dataEnvio: "", linguagem: "", nota: 0, situacao: "" };
    const { dataEnvio, linguagem, nota, situacao } = data[0];
    const firstPosition: UltimaSubmissaoType = {
      dataEnvio,
      linguagem,
      nota,
      situacao,
    };
    return firstPosition;
  }, [data]);

  return (
    <div className="h-[230px] bg-[#1f232a] rounded-lg flex px-6 py-3 justify-end relative">
      <div className="flex flex-col justify-start w-2/3 h-full">
        {linePoints.length > 0 ? (
          <>
            <div className="flex gap-2">
              <LabelButton
                value="Pontuação por envio"
                opaque={selectedMenu !== "grafico"}
                onClick={() => setSelectedMenu("grafico")}
              />
              <LabelButton
                value="Tabela de Submissões"
                opaque={selectedMenu !== "lista"}
                onClick={() => setSelectedMenu("lista")}
              />
            </div>
            <div className="relative">
              <div
                className={`absolute flex flex-col gap-2 w-full h-48 overflow-y-auto ${selectedMenu === "lista" ? "visible z-20" : "invisible -z-10"
                  }`}
              >
                <SubmissoesDataTable data={data} />
              </div>
              <div className="absolute w-80 top-4">
                <LineChart linePoints={linePoints} dates={dates} />
              </div>
            </div>
          </>
        ) : (
          <Label value="Usuário sem submissões" />
        )}
      </div>
      <div className="flex w-1/2 flex-col justify-start gap-2 pl-3 pt-6">
        <div className="flex gap-2 w-52">
          <Label value={"Nome"} />
          <p className="font-sans text-sm text-white whitespace-nowrap overflow-hidden">
            {user?.name}
          </p>
        </div>
        <div className="flex gap-2 w-52">
          <Label value={"Email"} />
          <p className="font-sans text-sm text-white whitespace-nowrap overflow-hidden">
            {user?.email}
          </p>
        </div>
        {ultimaSubmissao && (
          <>
            <div className="flex gap-2 w-52">
              <p className="font-sans font-bold text-sm text-[#666666]">
                Última Submissao:
              </p>
            </div>
            <div className="flex gap-2">
              <Label value={"Linguagem"} />
              <p className="font-sans text-sm text-white">
                {ultimaSubmissao?.linguagem}
              </p>
            </div>
            <div className="flex gap-2">
              <Label value={"Envio"} />
              <p className="font-sans text-sm text-white whitespace-nowrap overflow-hidden">
                {ultimaSubmissao?.dataEnvio}
              </p>
            </div>
          </>
        )}
      </div>
      {ultimaSubmissao && (
        <div className="flex items-center gap-2 absolute bottom-6 right-16">
          <Label
            value={ultimaSubmissao?.nota ? "Última pontuação: " : "Situação: "}
          />
          <p className="bg-gradient-to-r from-[#FF3D00] to-[#00A3FF] text-transparent bg-clip-text font-sans font-bold">
            {ultimaSubmissao?.nota
              ? Number(ultimaSubmissao.nota).toFixed(2)
              : normalizeSituacao(ultimaSubmissao.situacao)}
          </p>
        </div>
      )}
    </div>
  );
}

function normalizeSituacao(situacao: string) {
  const situacoes: { [key: string]: string } = {
    'AGUARDANDO_PROCESSAMENTO': 'Aguardando...',
    'PROCESSANDO': 'Processando...',
    'FALHA': 'Falha',
  }
  return situacoes[situacao];
}

export default EstatisticasCard;
