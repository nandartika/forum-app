import { useEffect } from "react";
import PageTitle from "../../components/common/PageTitle";
import SectionPage from "../../components/common/SectionPage";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardsList from "./LeaderboardsList";
import { useDispatch } from "react-redux";
import { asyncReceiveLeaderboards } from "../../core/states/leaderboards/action";

export default function LeaderboardsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <SectionPage>
      <PageTitle>Klasmen Pengguna Aktif</PageTitle>

      <div className="mt-8 flex flex-col gap-4">
        <LeaderboardHeader />
        <LeaderboardsList />
      </div>
    </SectionPage>
  );
}
