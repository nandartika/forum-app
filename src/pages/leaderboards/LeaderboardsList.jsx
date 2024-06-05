import { useSelector } from "react-redux";
import LeaderboardItem from "./LeaderboardItem";

export default function LeaderboardsList() {
  const leaderboards = useSelector((state) => state.leaderboards);

  return (
    <div className="flex w-full flex-col gap-4">
      {leaderboards.map((leaderboard) => (
        <LeaderboardItem
          key={leaderboard.id}
          name={leaderboard.user.name}
          avatarUrl={leaderboard.user.avatar}
          score={leaderboard.score}
        />
      ))}
    </div>
  );
}
