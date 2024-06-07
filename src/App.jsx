import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./layouts/MainContainer";
import ThreadsPage from "./pages/threads/ThreadsPage";
import LeaderboardsPage from "./pages/leaderboards/LeaderboardsPage";
import DetailThreadPage from "./pages/detailThread/DetailThreadPage";
import LoginPage from "./pages/login/LoginPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [
        {
          path: "/",
          element: <ThreadsPage />,
        },
        {
          path: "threads/:threadId",
          element: <DetailThreadPage />,
        },
        {
          path: "leaderboards",
          element: <LeaderboardsPage />,
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
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
