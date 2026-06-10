import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { CHROME_EXTENSION_URL } from "@/lib/constants";

const EXTENSION_POINTS = [
  "Instant rooms and invite by link",
  "Your own deck in each room (e.g. 0, 1, 2, 3, 5, 8, 13, 21, ?, ☕)",
  "Cards stay hidden until everyone has voted",
  "Reveal in one click — numeric average calculated automatically",
  "New round and live deck changes for the whole room",
  "Clean light UI, nothing extra",
] as const;

export function Extension() {
  return (
    <section
      id="extension"
      className="scroll-mt-20 border-y-2 border-border bg-muted py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Badge variant="outline" className="mb-4 border-2">
              Chrome extension
            </Badge>
            <Text as="h2" className="mb-4">
              Scrum Poker in your browser toolbar
            </Text>
            <Text as="p" className="mb-6 max-w-lg text-muted-foreground">
              Same planning poker flow — open from the extension icon, no extra
              tab hunt. Custom decks per room, hidden votes, one-click reveal
              with automatic average. No accounts, no tracking.
            </Text>
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
              Add to Chrome →
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              <a
                href={CHROME_EXTENSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-2"
              >
                Scrum Poker
              </a>
              {" · v1.0.0 · Russian UI"}
            </p>
          </div>

          <Card className="block w-full">
            <Card.Content>
              <ul className="space-y-3">
                {EXTENSION_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span className="font-bold text-foreground" aria-hidden="true">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Card.Content>
          </Card>
        </div>
      </div>
    </section>
  );
}
