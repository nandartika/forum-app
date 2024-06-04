import { useSelector } from "react-redux";
import ThreadItem from "./ThreadItem";

export default function ThreadsList() {
  const threads = useSelector((state) => state.threads);

  return (
    <div className="mt-4">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </div>
  );
}
