import RequestForm from "../components/RequestForm";
import SectionTitle from "../components/ui/SectionTitle";
import { site } from "../lib/site";

export default function RequestPage() {
  return (
    <div id="request" className="mx-auto min-h-svh max-w-3xl px-6 pt-32 pb-24 lg:px-10">
      <SectionTitle
        eyebrow="Special Requests"
        title="Your song,"
        accent="his voice"
        subtitle={`Want ${site.artistName} to cover your favorite track — in any language — or collaborate on something new? This is the place.`}
      />
      <RequestForm />
      <p className="mt-8 text-center text-xs tracking-wide text-charcoal/35">
        Requests are reviewed regularly • Collabs welcome from artists, editors & AMV creators
      </p>
    </div>
  );
}
