import UpcomingEP from "../components/UpcomingEP";
import ReleasedSingles from "../components/ReleasedSingles";

export default function EPPage() {
  return (
    <div className="min-h-svh pt-32 pb-24 flex flex-col justify-center">
      <UpcomingEP />
      <ReleasedSingles />
    </div>
  );
}
