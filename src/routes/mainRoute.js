import { createBrowserRouter } from "react-router-dom";

export const mainRoute = createBrowserRouter([
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
]);
