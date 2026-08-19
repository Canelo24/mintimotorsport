import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Terms of use for the Minti Motorsport website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      intro="These terms cover using this website. Rally programmes themselves are governed by the individual programme agreement each driver signs."
      sections={[
        {
          h: "The website",
          p: "Content here describes our services in good faith. It is not a contractual offer; programmes, availability and inclusions are confirmed in writing per driver.",
        },
        {
          h: "Event entry",
          p: "Rally events are run by their own independent organisers. Nothing on this site implies that engaging Minti Motorsport guarantees or influences acceptance of an entry by any event organiser.",
        },
        {
          h: "Intellectual property",
          p: "Text, photography and design on this site belong to Minti Motorsport or its licensors. Ford, MST and other marks belong to their respective owners and are used to describe the machinery accurately.",
        },
      ]}
    />
  );
}
