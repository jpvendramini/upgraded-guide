type Props = {
  estatisticas: React.ReactNode;
  submissoes: React.ReactNode;
  podium: React.ReactNode;
  rank: React.ReactNode;
  profile: React.ReactNode;
  logo: React.ReactNode;
};

export default function RankLayout({
  estatisticas,
  submissoes,
  podium,
  rank,
  profile,
  logo,
}: Props) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex h-20 w-full justify-between max-w-7xl p-6">
        {logo}
        {profile}
      </div>
      <div className="flex flex-col xl:flex-row md:flex-col sm:flex-col w-full justify-between max-w-7xl">
        <div className="w-full">
          <div className="p-4">{estatisticas}</div>
          <div className="p-4">{submissoes}</div>
        </div>
        <div className="w-full">
          <div className="p-4">{podium}</div>
          <div className="p-4">{rank}</div>
        </div>
      </div>
    </div>
  );
}
