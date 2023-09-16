import React from "react";
import { useRankingContext } from "@contexts/RankingContext";
import ItemsOnPage from "@components/atoms/ItemsOnPage";
import Pagination from "@components/atoms/Pagination";

const PesoPenaPagination = () => {
    const { pesoPenaPage, setPesoPenaPage } = useRankingContext();
    return (
        <div className="flex justify-between items-center border-t-2 border-[#C1C1C1] py-4 pl-4">
            <div className="font-sans font-bold text-white">{`Página: ${pesoPenaPage}`}</div>
            <div className="flex gap-12 items-center justify-end">
                <div className="-mr-12 -mt-1">
                    <ItemsOnPage
                        index={0}
                        isLast={false}
                        pageSize={4}
                        totalElements={12}
                    />
                </div>
                <Pagination
                    /*  count={data.totalPages} */
                    count={5}
                    page={pesoPenaPage}
                    onChange={(_, newPage) => setPesoPenaPage(newPage)}
                />
            </div>
        </div>
    );
};

export default PesoPenaPagination;
