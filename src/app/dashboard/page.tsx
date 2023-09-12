import React from "react";
import RankLayout from "@/components/templates/RankTemplate/layout";
import Rank from "@components/organisms/rank/page";
import Estatisticas from "@components/organisms/Estatisticas/page";
import Podium from "@components/organisms/Podium/page";
import Submissoes from "@components/organisms/Submissoes/page";
import Profile from "@components/molecules/Profile/page";
import Logo from "@components/atoms/Logo/page";

const Dashboard = () => {
  return (
    <RankLayout
      estatisticas={<Estatisticas />}
      podium={<Podium />}
      rank={<Rank />}
      submissoes={<Submissoes />}
      profile={<Profile />}
      logo={<Logo />}
    />
  );
};

export default Dashboard;
