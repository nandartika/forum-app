import { Outlet } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import { Fragment } from "react";

export default function MainContainer() {
  return (
    <Fragment>
      <TopNavigation />

      <Outlet />
    </Fragment>
  );
}
