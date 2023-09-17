import React from 'react';

type Props = {
  index: number;
  pageSize: number;
  isLast: boolean;
  totalElements: number;
};

const ItemsOnPage: React.FC<Props> = ({
  index,
  pageSize,
  isLast,
  totalElements,
}) => (
  <p className="text-bg-default font-sans text-white">
    <span className="font-bold">
      {`${index === 0 ? 1 : index * pageSize + 1} - ${
        isLast ? totalElements : (index + 1) * pageSize
      } `}
    </span>
    de {totalElements} 
    <span className="font-bold">{"  |"}</span>
  </p>
);

export default ItemsOnPage;
