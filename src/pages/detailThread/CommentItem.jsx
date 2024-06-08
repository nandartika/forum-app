import PropTypes from "prop-types";
import VoteButton from "../../components/button/VoteButton";
import timeSinceUtil from "../../core/utils/timeSinceUtil";
import ThreadBody from "../../components/thread/ThreadBody";
import { useDispatch } from "react-redux";
import {
  asyncToggleDownVoteComment,
  asyncToggleUpVoteComment,
} from "../../core/states/threadDetail/action";

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
}) {
  const { name, avatar } = owner;
  const dispatch = useDispatch();

  const upVoteToggle = () => {
    dispatch(asyncToggleUpVoteComment(id));
  };

  const downVoteToggle = () => {
    dispatch(asyncToggleDownVoteComment(id));
  };

  return (
    <div className="flex flex-col gap-2 py-4">
      <header className="flex flex-row items-center">
        <div className="flex grow flex-row items-center gap-2">
          <img src={avatar} alt={name} className="w-6 rounded-full" />
          <p className="text-lg font-medium">{name}</p>
        </div>

        <p>{timeSinceUtil(createdAt)}</p>
      </header>

      <div className="text-md">
        <ThreadBody>{content}</ThreadBody>
      </div>

      <footer className="flex flex-row gap-3">
        <VoteButton
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          upVoteClickHandler={upVoteToggle}
          downVoteCLickHandler={downVoteToggle}
        />
      </footer>
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};
