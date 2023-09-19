import RankLayout from "@/components/templates/RankTemplate/layout";
import Logo from "@components/atoms/Logo/page";
import DropZoneProvider from "@components/contexts/DropZoneContext";
import Profile from "@components/molecules/Profile/page";
import Estatisticas from "@components/organisms/Estatisticas/page";
import Submissoes from "@components/organisms/Submissoes/page";
import RankingContextProvider from "@contexts/RankingContext";

const Dashboard = () => {
  return (
    <RankingContextProvider>
      <DropZoneProvider>
        <RankLayout
          /* 
          podium={<Podium />}
          rank={<Rank />} */
          estatisticas={<Estatisticas />}
          submissoes={<Submissoes />}
          profile={<Profile />}
          logo={<Logo />}
        />
      </DropZoneProvider>
    </RankingContextProvider>
  );
};

export default Dashboard;