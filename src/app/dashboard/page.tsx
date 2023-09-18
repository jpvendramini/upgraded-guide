import RankLayout from "@/components/templates/RankTemplate/layout";
import Logo from "@components/atoms/Logo/page";
import DropZoneProvider from "@components/contexts/DropZoneContext";
import Profile from "@components/molecules/Profile/page";
import Estatisticas from "@components/organisms/Estatisticas/page";
import Podium from "@components/organisms/Podium/page";
import Submissoes from "@components/organisms/Submissoes/page";
import Rank from "@components/organisms/rank/page";
import RankingContextProvider from "@contexts/RankingContext";
import { getSession } from "next-auth/react";

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
export async function getServerSideProps(ctx: any) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}