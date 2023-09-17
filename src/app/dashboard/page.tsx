import RankLayout from "@/components/templates/RankTemplate/layout";
import Estatisticas from "@components/organisms/Estatisticas/page";
import Podium from "@components/organisms/Podium/page";
import Submissoes from "@components/organisms/Submissoes/page";
import Rank from "@components/organisms/rank/page";
import Profile from "@components/molecules/Profile/page";
import Logo from "@components/atoms/Logo/page";
import DropZoneProvider from "@components/contexts/DropZoneContext";
import RankingContextProvider from "@contexts/RankingContext";

const Dashboard = () => {
  return (
    <RankingContextProvider>
      <DropZoneProvider>
        <RankLayout
          estatisticas={<Estatisticas />}
          podium={<Podium />}
          rank={<Rank />}
          submissoes={<Submissoes />}
          profile={<Profile />}
          logo={<Logo />}
        />
      </DropZoneProvider>
    </RankingContextProvider>
  );
};

export default Dashboard;
