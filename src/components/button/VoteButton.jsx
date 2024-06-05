import PropTypes from "prop-types";
import { Fragment } from "react";
import ReactionButton from "./ReactionButton";
import VoteUpOutlineIcon from "../../assets/icons/thumb-up.svg?react";
// import VoteUpFillIcon from "../../assets/icons/thumb-up-fill.svg?react";
// import VoteDownFillIcon from "../../assets/icons/thumb-down-fill.svg?react";
import VoteDownOutlineIcon from "../../assets/icons/thumb-down.svg?react";

export default function VoteButton({
  upVotesBy,
  downVotesBy,
  upVoteClickHandler,
  downVoteCLickHandler,
}) {
  const upVoteToggle = () => {};

  const downVoteToggle = () => {};

  return (
    <Fragment>
      <ReactionButton icon={<VoteUpOutlineIcon />} onClickHanler={upVoteToggle}>
        {upVotesBy.length}
      </ReactionButton>

      <ReactionButton
        icon={<VoteDownOutlineIcon />}
        onClickHanler={downVoteToggle}
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
