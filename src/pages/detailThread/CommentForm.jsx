import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import { useParams } from "react-router-dom";
import { asyncAddComment } from "../../core/states/threadDetail/action";

export default function CommentForm() {
  const dispatch = useDispatch();
  const { threadId } = useParams();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get("content");

    dispatch(asyncAddComment(threadId, content));
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-medium">Beri Komentar</h3>
      <form onSubmit={onSubmitHandler}>
        <textarea
          className="my-2 h-24 w-full rounded-md border p-2"
          name="content"
        />
        <Button type="submit">Kirim</Button>
      </form>
    </div>
  );
}
