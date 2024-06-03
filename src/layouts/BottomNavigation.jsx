import NavigationItem from "../components/navigation/NavigationItem";
import ThreadsIcon from "../assets/icons/threads.svg?react";
import LeaderboardsIcon from "../assets/icons/leaderboards.svg?react";
import LoginIcon from "../assets/icons/login.svg?react";
import LogoutIcon from "../assets/icons/logout.svg?react";
import { Link } from "react-router-dom";

export default function BottomNavigation() {
  const logoutHandler = () => {};

  return (
    <footer className="fixed bottom-0 flex h-16 items-center border-t border-t-[#d1d5db] bg-primary">
      <nav className="mx-auto w-screen">
        <ul className="mx-auto flex w-full max-w-xs flex-row justify-between">
          <li>
            <Link to="/">
              <NavigationItem label="Threads">
                <ThreadsIcon />
              </NavigationItem>
            </Link>
          </li>
          <li>
            <Link to="/leaderboards">
              <NavigationItem label="Leaderboards">
                <LeaderboardsIcon />
              </NavigationItem>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <NavigationItem label="Login">
                <LoginIcon />
              </NavigationItem>
            </Link>
          </li>
          <li>
            <NavigationItem label="Logout" toggleOnClick={logoutHandler}>
              <LogoutIcon />
            </NavigationItem>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
