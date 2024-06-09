import { useSelector } from "react-redux";
import ThreadItem from "./ThreadItem";
import Indicator from "../../components/common/Indicator";

export default function ThreadsList() {
  const threads = useSelector((state) => state.threads);
  const isThreadNotEmpty = threads.length > 0;

  return (
    <div className="mt-4 w-full">
      {isThreadNotEmpty ? (
        threads.map((thread) => <ThreadItem key={thread.id} {...thread} />)
      ) : (
        <Indicator />
      )}
    </div>
  );
}
