import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";

const STACK = [
  "Node.js",
  "Express",
  "Socket.IO",
  "React",
  "Vite",
  "localStorage",
] as const;

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 border-t-2 border-border py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Text as="h2" className="mb-3">
          A light, no-nonsense stack
        </Text>
        <Text as="p" className="mx-auto mb-10 max-w-2xl text-muted-foreground">
          Open source. Runs on any VPS, on Render, or locally in 30 seconds.
        </Text>

        <div className="flex flex-wrap justify-center gap-3">
          {STACK.map((item) => (
            <Badge
              key={item}
              variant="outline"
              size="lg"
              className="border-2 px-4 py-2"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
