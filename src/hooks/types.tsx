export type TotalType = {
    elements: number;
    pages: number;
};

export type PageType = {
    index: number;
    size: number;
    last: boolean;
};

export type PaginationType = {
    total: TotalType;
    page: PageType;
    date: string;
};

export type RankingType = {
    email: string;
    nota: number;
    dataEnvio: string;
    categoria: string;
    linguagem: string;
}

export type RankingResultType = {
    content: RankingType[];
    total: TotalType;
    page: PageType;
}

export type EstatisticasType = {
    situacao: string,
    dataEnvio: string,
    userId: string,
    linguagem: string,
    categoria: string,
    nota: string,
}