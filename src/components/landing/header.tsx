import { Button } from "@/components/retroui/Button";
import { APP_URL, NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center border-2 border-border bg-primary text-sm shadow-sm">
            ♠
          </span>
          <span className="font-head text-base font-bold">Planning Poker</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          size="sm"
          render={
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          Launch
        </Button>
      </div>
    </header>
  );
}
