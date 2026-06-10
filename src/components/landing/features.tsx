import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

const FEATURES = [
  {
    icon: "⚡",
    title: "Realtime voting",
    description:
      "Cards appear instantly via Socket.IO. You can see who has voted, but not what — until the reveal.",
  },
  {
    icon: "🔗",
    title: "A link instead of a login",
    description:
      "Drop #room=ABC123 into chat — the team joins in one click. No email, no passwords.",
  },
  {
    icon: "👑",
    title: "One admin keeps order",
    description:
      "The creator controls reveal, reset, and can kick a participant. When the admin leaves, the room closes.",
  },
  {
    icon: "📊",
    title: "Honest stats",
    description:
      "Average, median, min/max and the team’s agreement %. No more “I think we agreed.”",
  },
  {
    icon: "🔄",
    title: "Auto-reconnect",
    description:
      "Closed the tab or lost Wi-Fi? You’re back in the same room under the same name.",
  },
  {
    icon: "🪶",
    title: "No database",
    description:
      "Room state lives in server memory, identity in localStorage. Deploy it anywhere.",
  },
] as const;

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <Text as="h2" className="mb-3">
            Everything you need to estimate a sprint
          </Text>
          <Text as="p" className="mx-auto max-w-2xl text-muted-foreground">
            Minimal buttons, maximum signal. One screen — and the team is in
            flow.
          </Text>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="block w-full">
              <Card.Header>
                <span className="mb-3 inline-flex size-11 items-center justify-center border-2 border-border bg-accent text-xl shadow-sm">
                  {feature.icon}
                </span>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Description>
                  {feature.title === "A link instead of a login" ? (
                    <>
                      Drop <code>#room=ABC123</code> into chat — the team joins
                      in one click. No email, no passwords.
                    </>
                  ) : (
                    feature.description
                  )}
                </Card.Description>
              </Card.Header>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
