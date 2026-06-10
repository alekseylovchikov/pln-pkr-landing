import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

const STEPS = [
  {
    num: "1",
    title: "Create a room",
    description:
      "Enter your name — get a room ID and a link to share with the team.",
  },
  {
    num: "2",
    title: "Vote with a card",
    description:
      "0.5, 1, 2, 3, 5, 8, 13 or “???”. Cards stay hidden until the admin reveals them.",
  },
  {
    num: "3",
    title: "Reveal & discuss",
    description:
      "See the distribution and agreement % — and make the call.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Text as="h2" className="mb-12 text-center">
          Three steps to an estimate
        </Text>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <Card key={step.num} className="relative block w-full pt-4">
              <span className="absolute -top-4 left-4 flex size-9 items-center justify-center border-2 border-border bg-primary text-sm font-bold shadow-md">
                {step.num}
              </span>
              <Card.Header className="pt-2">
                <Card.Title>{step.title}</Card.Title>
                <Card.Description>{step.description}</Card.Description>
              </Card.Header>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
