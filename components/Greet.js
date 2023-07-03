import DateTime from "./DateTime";
import NowPlayingCard from "./NowPlayingCard";

export default function Greet() {
  return (
    <div className="flex flex-col">
      <DateTime />
      <NowPlayingCard />
    </div>
  );
}
