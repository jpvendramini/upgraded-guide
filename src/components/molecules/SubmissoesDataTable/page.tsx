import Label from '@components/atoms/Label/page';
import DataTable from '../DataTable/page';
import { ColumnType, RowType } from '../DataTable/types';
import { SubmissaoType } from '../EstatisticasCard/page';

function SubmissoesDataTable({ data }: { data: SubmissaoType[] }) {
    const columns: ColumnType[] = [
        { title: "Nota", alignment: "left", width: "20%" },
        { title: "Data Envio", alignment: "left", width: "50%" },
        { title: "Linguagem", alignment: "left", width: "30%" },
    ];

    const rows: RowType[] = data.map((submissao) => {
        const row = {
            nota: submissao.nota?.toFixed(2),
            dataEnvio: submissao.dataEnvio,
            linguagem: submissao.linguagem,
        };
        return row;
    });

    if (!data) return <Label value="Carregando..." />;

    return (
        <div className="bg-[#3D3D3D80] rounded-xl h-[390px] flex flex-col justify-between">
            <DataTable columns={columns} rows={rows} />
        </div>
    );
}

export default SubmissoesDataTable