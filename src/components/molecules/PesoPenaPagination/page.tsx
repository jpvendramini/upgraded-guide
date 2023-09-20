import Pagination from "@components/atoms/Pagination";
import { useRankingContext } from "@contexts/RankingContext";

const PesoPenaPagination = () => {
    const { pesoPenaPage, setPesoPenaPage } = useRankingContext();
    return (
        <div className="flex justify-between items-center border-t-2 border-[#C1C1C1] py-4 pl-4">
            <div className="font-sans font-bold text-white">{`Página: ${pesoPenaPage}`}</div>
            <div className="flex gap-12 items-center justify-end">
                <Pagination
                    count={40}
                    page={pesoPenaPage}
                    onChange={(_, newPage) => setPesoPenaPage(newPage)}
                />
            </div>
        </div>
    );
};

export default PesoPenaPagination;
