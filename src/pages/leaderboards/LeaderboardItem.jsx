import PropTypes from "prop-types";

export default function LeaderboardItem({ name, avatarUrl, score }) {
  return (
    <div className="flex items-center">
      <div className="flex grow flex-row items-center gap-3">
        <img src={avatarUrl} alt={name} className="w-11 rounded-full" />
        <p className="text-lg">{name}</p>
      </div>

      <p className="text-2xl">{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};
