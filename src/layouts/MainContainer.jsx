import { Outlet } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import BottomNavigation from "./BottomNavigation";

export default function MainContainer() {
  return (
    <div className="min-h-screen bg-gray">
      <TopNavigation />

      <main className="mx-auto min-h-screen max-w-screen-md bg-primary py-16">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}
