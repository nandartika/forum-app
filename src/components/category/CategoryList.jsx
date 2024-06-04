import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const threads = useSelector((state) => state.threads);
  const categories = [...new Set(threads.map((thread) => thread.category))];

  return (
    <div className="my-2 flex flex-row gap-3">
      {categories.map((category) => (
        <button type="button" key={category}>
          <CategoryItem size="md">{category}</CategoryItem>
        </button>
      ))}
    </div>
  );
}
