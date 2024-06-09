import { useSelector } from "react-redux";
import ThreadItem from "./ThreadItem";
import Indicator from "../../components/common/Indicator";
import { useSearchParams } from "react-router-dom";

export default function ThreadsList() {
  const [searchParams] = useSearchParams();
  const threads = useSelector((state) => state.threads);
  const isThreadNotEmpty = threads.length > 0;

  const category = searchParams.get("category");
  const filteredThreads = category
    ? threads.filter((thread) => thread.category === category)
    : threads;

  return (
    <div className="mt-4 w-full">
      {isThreadNotEmpty ? (
        filteredThreads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))
      ) : (
        <Indicator />
      )}
    </div>
  );
}
