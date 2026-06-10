import { CHROME_EXTENSION_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-muted py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center border-2 border-border bg-primary text-sm shadow-sm">
            ♠
          </span>
          <span className="font-head text-base font-bold">Planning Poker</span>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2026 · Realtime planning poker for people who value their time. ·{" "}
          <a
            href={CHROME_EXTENSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Chrome extension
          </a>
        </p>
      </div>
    </footer>
  );
}
