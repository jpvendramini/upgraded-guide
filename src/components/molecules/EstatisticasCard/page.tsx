"use client";
import Label from "@components/atoms/Label/page";
import LineChart from "@components/atoms/LineChart/page";
import { baseUrl } from "@server/api";
import { useEffect, useMemo, useState } from "react";

type UserType = {
  email: string;
  name: string;
};

type UltimaSubmissaoType = {
  nota: number;
  dataEnvio: string;
  linguagem: string;
  situacao: string;
};

const EstatisticasCard = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState<UserType>({ name: "", email: "" });
  const [linePoints, setLinePoints] = useState<number[]>([]);
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
            result.json().then((res) => {
              setData(res);
              setLinePoints(res?.map((item: any) => Number(item.nota)));
            });
          }
        });
      })
    );
  }, []);

  const ultimaSubmissao = useMemo<UltimaSubmissaoType>(() => {
    const firstPosition: UltimaSubmissaoType = data[0];
    if (!data || !firstPosition)
      return { dataEnvio: "", linguagem: "", nota: 0, situacao: "" };
    return firstPosition;
  }, [data]);

  return (
    <div className="h-[230px] bg-[#3D3D3D80] rounded-lg flex px-6 py-3 justify-end relative">
      <div className="flex flex-col justify-start w-2/3">
        <Label value="Pontuação por envio" />
        {linePoints.length > 0 ? (
          <LineChart linePoints={linePoints} />
        ) : (
          <p className="font-sans font-bold text-sm text-[#666666]">
            Usuário sem submissões
          </p>
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
        <div className="flex items-center gap-2 absolute bottom-6 right-20">
          <Label value="Pontuação: " />
          <p className="bg-gradient-to-r from-[#FF3D00] to-[#00A3FF] text-transparent bg-clip-text font-sans font-bold">
            {ultimaSubmissao?.nota
              ? Number(ultimaSubmissao.nota).toFixed(2)
              : ultimaSubmissao.situacao}
          </p>
        </div>
      )}
    </div>
  );
};

export default EstatisticasCard;
