import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { APP_URL, CHROME_EXTENSION_URL } from "@/lib/constants";
import { PokerCards } from "./poker-cards";

const BULLETS = [
  "One admin per room",
  "Fibonacci scale + “???”",
  "Average, median, agreement %",
] as const;

export function Hero() {
  return (
    <section className="border-b-2 border-border bg-accent/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <Badge variant="surface" className="mb-4 border-2 border-border">
            ⚡ Realtime · no sign-up
          </Badge>

          <Text as="h1" className="mb-5 max-w-xl">
            Estimate tasks without the drama
          </Text>

          <Text as="p" className="mb-8 max-w-lg text-muted-foreground">
            Planning Poker for distributed teams. Create a room, share the link,
            reach consensus. No accounts, no databases — just your team and the
            cards.
          </Text>

          <div className="mb-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              render={
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Create a room
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href="#how" />}
            >
              How it works
            </Button>
            <Button
              size="lg"
              variant="secondary"
              render={
                <a
                  href={CHROME_EXTENSION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Chrome extension
            </Button>
          </div>

          <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {BULLETS.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <PokerCards />
      </div>
    </section>
  );
}
