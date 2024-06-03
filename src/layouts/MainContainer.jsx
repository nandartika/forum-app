import { Outlet } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import BottomNavigation from "./BottomNavigation";

export default function MainContainer() {
  return (
    <div className="min-h-screen bg-gray">
      <TopNavigation />

      <main className="mx-auto max-w-screen-md py-16 bg-primary h-screen">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}
