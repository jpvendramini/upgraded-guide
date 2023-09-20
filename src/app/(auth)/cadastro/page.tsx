"use client";
import { keycloakSessionLogOut } from "@components/molecules/Profile/page";
import { baseUrl } from "@server/api";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

type CategoriaType = "PESO_PENA" | "PESO_PESADO" | null;

const Cadastro = () => {
  let [categoria, setCategoria] = useState<CategoriaType>(null);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const cadastrarUsuario = useCallback(() => {
    setLoading(true);
    fetch("/api/auth/session").then((response) =>
      response.json().then((result) => {
        let requestOptions = {
          method: "POST",
          body: JSON.stringify({
            email: result.user.email,
            categoria,
          }),
          headers: {
            Authorization: `Bearer ${result.access_token}`,
            "Content-type": "application/json",
          },
        };
        fetch(`${baseUrl}/usuarios`, requestOptions)
          .then((result: any) => {
            if (result?.status === 200) router.push("/dashboard");
          })
          .catch(() => setLoading(false));
      })
    );
  }, []);

  useEffect(() => {
    setPageLoading(true);
    fetch("/api/auth/session").then((response) =>
      response.json().then((result) => {
        fetch(`${baseUrl}/usuarios/${result.user.email}`, {
          headers: {
            Authorization: `Bearer ${result.access_token}`,
          },
        })
          .then((res: any) => {
            if (res?.status === 200) {
              router.push("/dashboard");
            }
          })
          .catch(() => {
            setPageLoading(false);
          });
      })
    );
  }, []);

  const isPesoPesado = useMemo<boolean>(
    () => categoria === "PESO_PESADO",
    [categoria]
  );
  const isPesoPena = useMemo<boolean>(
    () => categoria === "PESO_PENA",
    [categoria]
  );
  const categoriaSelecionada = useMemo<string>(() => {
    if (categoria === "PESO_PENA") return "Categoria selecionada: Peso pena";
    if (categoria === "PESO_PESADO")
      return "Categoria selecionada: Peso pesado";
    return "Nenhuma categoria selecionada";
  }, [categoria]);
  const isCategoriaNull = useMemo<boolean>(() => !categoria, [categoria]);

  if (pageLoading)
    return (
      <div className="text-white font-sans font-bold text-lg">
        Carregando...
      </div>
    );

  return (
    <div className="w-full flex flex-col items-center gap-24">
      <div className="flex flex-col gap-4">
        <p className="text-white font-sans font-bold text-xl">
          Seleciona a categoria:
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            className={`w-40 h-16 rounded-xl  ${
              isPesoPesado
                ? "bg-gradient-to-r from-[#FF3D00] to-[#00A3FF]"
                : "bg-white"
            }`}
            onClick={() => {
              categoria = "PESO_PESADO";
              setCategoria("PESO_PESADO");
            }}
          >
            <p
              className={`font-sans font-bold text-lg ${
                isPesoPesado ? "text-white" : "text-[#061127]"
              }`}
            >
              Peso Pesado
            </p>
          </button>
          <button
            type="button"
            className={`w-40 h-16 rounded-xl  ${
              isPesoPena
                ? "bg-gradient-to-r from-[#FF3D00] to-[#00A3FF]"
                : "bg-white"
            }`}
            onClick={() => {
              categoria = "PESO_PENA";
              setCategoria("PESO_PENA");
            }}
          >
            <p
              className={`font-sans font-bold text-lg ${
                isPesoPena ? "text-white" : "text-[#061127]"
              }`}
            >
              Peso Pena
            </p>
          </button>
        </div>
        <p className="text-white font-sans font-bold text-xl">
          {categoriaSelecionada}
        </p>
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="w-40 h-10 rounded-full border-white border-2"
          onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
          }}
        >
          <p className="text-white font-sans font-bold text-lg">Cancelar</p>
        </button>
        <button
          type="button"
          disabled={isCategoriaNull || loading}
          className={`w-40 h-10 rounded-full ${
            isCategoriaNull
              ? "bg-gradient-to-r from-[#7e7e7e] to-[#5d5d5d] text-white"
              : "bg-gradient-to-r from-[#FF3D00] to-[#00A3FF]"
          }`}
          onClick={cadastrarUsuario}
        >
          <p className={`font-sans font-bold text-lg text-white`}>
            {loading ? "Enviando..." : "Confirmar"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
