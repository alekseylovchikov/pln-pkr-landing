import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { APP_URL } from "@/lib/constants";

export function Cta() {
  return (
    <section
      id="cta"
      className="border-y-2 border-border bg-primary/20 py-20 text-center"
    >
      <div className="mx-auto max-w-3xl px-6">
        <Text as="h2" className="mb-3">
          Ready to estimate your next sprint?
        </Text>
        <Text as="p" className="mb-8 text-muted-foreground">
          Spin up your room right now — it’s free and no sign-up required.
        </Text>
        <Button
          size="lg"
          render={
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" />
          }
        >
          Create a room →
        </Button>
      </div>
    </section>
  );
}
