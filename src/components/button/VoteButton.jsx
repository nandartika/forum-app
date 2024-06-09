import PropTypes from "prop-types";
import { Fragment } from "react";
import ReactionButton from "./ReactionButton";
import VoteUpOutlineIcon from "../../assets/icons/thumb-up.svg?react";
import VoteUpFillIcon from "../../assets/icons/thumb-up-fill.svg?react";
import VoteDownFillIcon from "../../assets/icons/thumb-down-fill.svg?react";
import VoteDownOutlineIcon from "../../assets/icons/thumb-down.svg?react";
import { useSelector } from "react-redux";

export default function VoteButton({
  upVotesBy,
  downVotesBy,
  upVoteClickHandler,
  downVoteCLickHandler,
}) {
  const { profile } = useSelector((state) => state.users);
  const isUpVote = upVotesBy.find((vote) => vote === profile?.id)?.length > 0;
  const isDownVote =
    downVotesBy.find((vote) => vote === profile?.id)?.length > 0;
    
  return (
    <Fragment>
      <ReactionButton
        icon={isUpVote ? <VoteUpFillIcon /> : <VoteUpOutlineIcon />}
        onClickHanler={upVoteClickHandler}
      >
        {upVotesBy.length}
      </ReactionButton>

      <ReactionButton
        icon={isDownVote ? <VoteDownFillIcon /> : <VoteDownOutlineIcon />}
        onClickHanler={downVoteCLickHandler}
      >
        {downVotesBy.length}
      </ReactionButton>
    </Fragment>
  );
}

VoteButton.propTypes = {
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteClickHandler: PropTypes.func.isRequired,
  downVoteCLickHandler: PropTypes.func.isRequired,
};
