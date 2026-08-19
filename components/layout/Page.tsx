import type { ReactNode } from "react";
import { stages } from "@/content/site";
import { RoadbookRail } from "@/components/roadbook/RoadbookRail";

/**
 * Page shell: mounts the roadbook rail for the route's stage and offsets
 * content by the rail width on desktop.
 */
export function Page({ path, children }: { path: string; children: ReactNode }) {
  const stage = stages[path] ?? { code: "TC", name: "TIME CONTROL", km: 10 };
  return (
    <>
      <RoadbookRail stage={stage} />
      <main id="main" className="lg:pl-rail">
        {children}
      </main>
    </>
  );
}
