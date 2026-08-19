import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen items-center bg-night text-chalk lg:pl-rail">
      <div className="mx-auto w-full max-w-6xl px-5 py-32 sm:px-8">
        <p className="data-mono text-data font-medium text-sodium">
          OFF ROUTE — CONTROL NOT FOUND (404)
        </p>
        <h1 className="display-wide mt-4 text-h1">Wrong slot, wrong page.</h1>
        <p className="mt-6 max-w-xl text-lead text-chalk/80">
          This control doesn&apos;t exist on the roadbook. Rejoin at the last passage control and
          carry on — no penalty applied.
        </p>
        <Link
          href="/"
          className="display-cond mt-10 inline-block bg-sodium px-7 py-4 text-data tracking-[0.16em] text-night transition-colors hover:bg-chalk"
        >
          Back to the start
        </Link>
      </div>
    </main>
  );
}
