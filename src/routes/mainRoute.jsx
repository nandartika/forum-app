import MainContainer from "../layouts/MainContainer";
import ThreadsPage from "../pages/threads/ThreadsPage";
import LeaderboardsPage from "../pages/leaderboards/LeaderboardsPage";
import DetailThreadPage from "../pages/detailThread/DetailThreadPage";
import LoginPage from "../pages/login/LoginPage";
import { createBrowserRouter } from "react-router-dom";
import NewThreadPage from "../pages/newThread/NewThreadPage";
import RegisterPage from "../pages/register/RegisterPage";

export const mainRoute = createBrowserRouter([
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
        element: <NewThreadPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
