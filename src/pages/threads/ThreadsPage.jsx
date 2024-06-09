import { useDispatch } from "react-redux";
import { asyncReceiveThreads } from "../../core/states/threads/action";
import { useEffect } from "react";
import ThreadsList from "./ThreadsList";
import PageTitle from "../../components/common/PageTitle";
import CategoryList from "../../components/category/CategoryList";
import SectionPage from "../../components/common/SectionPage";
import NewThreadButton from "../../components/button/NewThreadButton";

export default function ThreadsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreads());
  }, [dispatch]);

  return (
    <SectionPage>
      <header>
        <p className="text-md">Kategori popular</p>
        <CategoryList />
      </header>

      <div className="my-8">
        <PageTitle>Diskusi Tersedia</PageTitle>

        <ThreadsList />
      </div>

      <NewThreadButton />
    </SectionPage>
  );
}
