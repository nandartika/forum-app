import NavigationItem from "../components/navigation/NavigationItem";
import ThreadIcon from "../assets/icons/threads.svg?react";

export default function BottomNavigation() {
  return (
    <NavigationItem label="Threads">
      <ThreadIcon />
    </NavigationItem>
  );
}
