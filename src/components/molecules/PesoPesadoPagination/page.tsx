import Pagination from "@components/atoms/Pagination";
import { useRankingContext } from "@contexts/RankingContext";

type Props = {
    totalPages: number;
}

const PesoPesadoPagination = ({ totalPages }: Props) => {
    const { pesoPesadoPage, setPesoPesadoPage } = useRankingContext();
    return (
        <div className="flex justify-between items-center border-t-2 border-[#C1C1C1] py-4 pl-4">
            <div className="font-sans font-bold text-white">{`Página: ${pesoPesadoPage}`}</div>
            <div className="flex gap-12 items-center justify-end">
                <Pagination
                    count={totalPages}
                    page={pesoPesadoPage}
                    onChange={(_, newPage) => setPesoPesadoPage(newPage)}
                />
            </div>
        </div>
    );
};

export default PesoPesadoPagination;
