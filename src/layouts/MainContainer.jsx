import { Outlet } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import BottomNavigation from "./BottomNavigation";

export default function MainContainer() {
  return (
    <div className="min-h-screen">
      <TopNavigation />

      <Outlet />

      <BottomNavigation />
    </div>
  );
}
