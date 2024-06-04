import { useDispatch } from "react-redux";
import { asyncReceiveThreads } from "../../core/states/threads/action";
import { useEffect } from "react";
import ThreadsList from "./ThreadsList";

export default function ThreadsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreads());
  }, [dispatch]);

  return (
    <section className="p-8">
      <header>{/* TODO: Create Popular Categori */}</header>

      <div className="my-8">
        <h2 className="text-2xl font-semibold">Diskusi Tersedia</h2>

        <ThreadsList />
      </div>
    </section>
  );
}
