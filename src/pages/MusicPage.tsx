import OriginalMusic from "../components/OriginalMusic";
import ReleasedSingles from "../components/ReleasedSingles";
import UpcomingMusic from "../components/UpcomingMusic";

export default function MusicPage() {
  return (
    <div className="pt-32 pb-24 min-h-svh flex flex-col justify-center">
      <OriginalMusic />
      <ReleasedSingles />
      <UpcomingMusic />
    </div>
  );
}
