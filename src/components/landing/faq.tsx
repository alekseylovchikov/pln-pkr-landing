"use client";

import { Accordion } from "@/components/retroui/Accordion";
import { Text } from "@/components/retroui/Text";
import { CHROME_EXTENSION_URL } from "@/lib/constants";

const FAQ_ITEMS = [
  {
    question: "Do I need to sign up?",
    answer:
      "No. Your name and last room are kept in your browser (localStorage).",
  },
  {
    question: "What happens if the admin leaves?",
    answer:
      "The room closes. That’s by design: the estimation session is tied to its host.",
  },
  {
    question: "Where are the votes stored?",
    answer:
      "Only in server memory during the session. After a reset or when the room closes — nothing is kept.",
  },
  {
    question: "Can I self-host?",
    answer:
      "Yes. The repo ships with railway.json and instructions in the README — two npm commands and you’re done.",
  },
  {
    question: "Is there a Chrome extension?",
    answer: "extension",
  },
] as const;

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Text as="h2" className="mb-10 text-center">
          Frequently asked questions
        </Text>

        <Accordion className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <Accordion.Item key={item.question} value={item.question}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Content>
                {item.answer === "extension" ? (
                  <p>
                    Yes —{" "}
                    <a
                      href={CHROME_EXTENSION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-2"
                    >
                      Scrum Poker in the Chrome Web Store
                    </a>
                    . Click the icon, enter your name, create or join a room —
                    same idea as the web app, with customizable decks per room.
                  </p>
                ) : (
                  <p>{item.answer}</p>
                )}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
