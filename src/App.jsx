import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./routes/mainRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncSetIsPreload } from "./core/states/users/actions";

export default function App() {
  const { isPreload = false } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSetIsPreload());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return <RouterProvider router={mainRoute} />;
}
