"use client";
import Link from "next/link";

const CadastrarButton = () =>
    <Link href="/cadastro">
        <button
            className="flex gap-3 border-2 border-white w-[13.25rem] h-[2.625rem] rounded-3xl justify-center items-center"
            type="button">
            <p className="font-sans font-bold text-base text-white">Cadastrar-se</p>
        </button>
    </Link>;
export default CadastrarButton;
