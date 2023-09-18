import { authOptions } from "@app/api/auth/[...nextauth]/route";
import Label from "@components/atoms/Label/page";
import LineChart from "@components/atoms/LineChart/page";
import { baseUrl } from "@server/api";
import { getServerSession } from "next-auth";

const EstatisticasCard = async () => {
    const { user } = await getServerSession(authOptions);
    const data = await fetch(`${baseUrl}/submissoes/user/${user.email}`)
        .then((result) => result.json());

    const linePoints = data.map((item: any) => Number(item.nota).toFixed(2));

    const ultimaSubmissao = data && data.length > 0 ? data[0] : undefined;

    return (
        <div className='h-[230px] bg-[#3D3D3D80] rounded-lg flex px-6 py-3 justify-end relative'>
            <div className="flex flex-col justify-start w-2/3">
                <Label value="Pontuação por envio" />
                {
                    ultimaSubmissao
                        ? <LineChart linePoints={linePoints} />
                        : <p className="font-sans font-bold text-sm text-[#666666]" >Usuário sem submissões</p>
                }

            </div>
            <div className="flex w-1/2 flex-col justify-start gap-2 pl-3 pt-6">
                <div className="flex gap-2 w-52">
                    <Label value={"Nome"} />
                    <p className="font-sans text-sm text-white whitespace-nowrap overflow-hidden">{user.name}</p>
                </div>
                <div className="flex gap-2 w-52">
                    <Label value={"Email"} />
                    <p className="font-sans text-sm text-white whitespace-nowrap overflow-hidden">{user.email}</p>
                </div>
                {
                    ultimaSubmissao &&
                    <>
                        <div className="flex gap-2 w-52">
                            <p className="font-sans font-bold text-sm text-[#666666]" >Última Submissao:</p>
                        </div>
                        <div className="flex gap-2">
                            <Label value={"Linguagem"} />
                            <p className="font-sans text-sm text-white">{ultimaSubmissao?.linguagem}</p>
                        </div>
                        <div className="flex gap-2">
                            <Label value={"Envio"} />
                            <p className="font-sans text-sm text-white whitespace-nowrap overflow-hidden">{ultimaSubmissao?.dataEnvio}</p>
                        </div>
                    </>
                }
            </div>
            {
                ultimaSubmissao &&
                <div className="flex items-center gap-2 absolute bottom-6 right-20">
                    <Label value="Pontuação: " />
                    <p className="bg-gradient-to-r from-[#FF3D00] to-[#00A3FF] text-transparent bg-clip-text font-sans font-bold">{ultimaSubmissao?.nota ? Number(ultimaSubmissao.nota).toFixed(2) : ultimaSubmissao.situacao}</p>
                </div>
            }
        </div>
    )
}

export default EstatisticasCard;