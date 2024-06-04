import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./layouts/MainContainer";
import { Provider } from "react-redux";
import store from "./core/states";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [
        {
          path: "/",
          element: <h1>Threads Page</h1>,
        },
        {
          path: "threads/:threadId",
        },
        {
          path: "leaderboards",
          element: <h1>Leaderboards</h1>,
        },
        {
          path: "new",
          element: <h1>New Discussion Page</h1>,
        },
        {
          path: "register",
          element: <h1>Register Page</h1>,
        },
        {
          path: "login",
          element: <h1>Login Page</h1>,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
