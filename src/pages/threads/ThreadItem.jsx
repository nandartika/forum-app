import PropTypes from "prop-types";
import CategoryItem from "../../components/category/CategoryItem";
import { Link } from "react-router-dom";
import ReactionButton from "../../components/button/ReactionButton";

import ReplyIcon from "../../assets/icons/reply.svg?react";
import timeSinceUtil from "../../core/utils/timeSinceUtil";
import { useDispatch, useSelector } from "react-redux";
import ThreadBody from "../../components/thread/ThreadBody";
import VoteButton from "../../components/button/VoteButton";
import {
  asyncToggleDownVote,
  asyncToggleUpVote,
} from "../../core/states/threads/action";

export default function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  upVotesBy,
  downVotesBy,
  totalComments,
}) {
  const dispatch = useDispatch();
  const { list: users } = useSelector((state) => state.users);
  const ownerName = users.find((user) => user.id === ownerId)?.name;

  const upVoteToggle = () => {
    dispatch(asyncToggleUpVote(id));
  };

  const downVoteToggle = () => {
    dispatch(asyncToggleDownVote(id));
  };

  return (
    <div className="mb-2 flex flex-col gap-2 border-b border-b-[#d1d5db] py-2">
      <header className="flex flex-col gap-2">
        <CategoryItem>{category}</CategoryItem>
        <h4>
          <Link
            to={`threads/${id}`}
            className="text-blue-800 hover:text-gray-800 visited:text-purple-800 text-lg font-medium underline"
          >
            {title}
          </Link>
        </h4>
      </header>

      <ThreadBody className="line-clamp-4">{body}</ThreadBody>

      <footer className="mb-2 flex flex-row gap-3 text-sm">
        <VoteButton
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
          upVoteClickHandler={upVoteToggle}
          downVoteCLickHandler={downVoteToggle}
        />

        <ReactionButton icon={<ReplyIcon />}>{totalComments}</ReactionButton>

        <p>{timeSinceUtil(createdAt)}</p>
        <p>
          Dibuat oleh <strong>{ownerName}</strong>
        </p>
      </footer>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
};
