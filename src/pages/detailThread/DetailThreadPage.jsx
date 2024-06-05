import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncThreadDetail } from "../../core/states/threadDetail/action";
import SectionPage from "../../components/common/SectionPage";
import CategoryItem from "../../components/category/CategoryItem";
import ThreadBody from "../../components/thread/ThreadBody";
import timeSinceUtil from "../../core/utils/timeSinceUtil";
import VoteButton from "../../components/button/VoteButton";
import CommentItem from "./CommentItem";

export default function DetailThreadPage() {
  const dispatch = useDispatch();
  const { threadId } = useParams();
  const threadDetail = useSelector((state) => state.threadDetail);

  useEffect(() => {
    dispatch(asyncThreadDetail(threadId));
  }, [dispatch, threadId]);

  const upVoteToggle = () => {};

  const downVoteToggle = () => {};

  return (
    threadDetail && (
      <SectionPage>
        <header className="mb-3">
          <CategoryItem>{threadDetail.category}</CategoryItem>
        </header>

        <div className="mb-4 text-lg">
          <h2 className="mb-4 text-3xl font-semibold">{threadDetail.title}</h2>
          <ThreadBody className="leading-tight">{threadDetail.body}</ThreadBody>
        </div>

        <footer className="text-md mb-2 flex flex-row items-center gap-3">
          <VoteButton
            upVotesBy={threadDetail.upVotesBy}
            downVotesBy={threadDetail.downVotesBy}
            upVoteClickHandler={upVoteToggle}
            downVoteCLickHandler={downVoteToggle}
          />

          <div className="flex flex-row items-center gap-1">
            <span>Dibuat oleh</span>
            <img
              src={threadDetail.owner.avatar}
              alt={threadDetail.owner.name}
              className="w-5 rounded-full"
            />
            <span>{threadDetail.owner.name}</span>
          </div>

          <p>{timeSinceUtil(threadDetail.createdAt)}</p>
        </footer>

        <div className="mt-6">
          <div className="mb-8">
            <h3 className="text-xl font-medium">Beri Komentar</h3>
            <form>
              <div
                className="my-2 h-24 w-full rounded-md border"
                contentEditable
              />
              <button className="h-8 w-full rounded-md bg-secondary text-primary">
                Kirim
              </button>
            </form>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-semibold">
              Komentar ({threadDetail.comments.length})
            </h3>

            {threadDetail.comments.map((comment) => (
              <CommentItem key={comment.id} {...comment} />
            ))}
          </div>
        </div>
      </SectionPage>
    )
  );
}
