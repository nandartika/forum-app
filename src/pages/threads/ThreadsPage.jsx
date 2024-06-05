import { useDispatch } from "react-redux";
import { asyncReceiveThreads } from "../../core/states/threads/action";
import { useEffect } from "react";
import ThreadsList from "./ThreadsList";
import PageTitle from "../../components/common/PageTitle";
import CategoryList from "../../components/category/CategoryList";
import { asyncReceiveUsers } from "../../core/states/users/actions";
import SectionPage from "../../components/common/SectionPage";

export default function ThreadsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveUsers());
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
    </SectionPage>
  );
}
