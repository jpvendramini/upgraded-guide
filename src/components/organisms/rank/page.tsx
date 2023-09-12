import RankTable from "@/components/molecules/RankTable/page";
import RankTablePagination from "@/components/molecules/RankTablePagination/page";
import React from "react";

const Rank = () => {
  return (
    <div>
      <RankTable />
      <RankTablePagination />
    </div>
  );
};

export default Rank;
