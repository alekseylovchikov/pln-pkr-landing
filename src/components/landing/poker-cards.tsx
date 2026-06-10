const CARDS = [
  { value: "1", className: "left-0 top-8 -rotate-12" },
  { value: "2", className: "left-16 top-2 -rotate-6" },
  { value: "3", className: "left-32 top-0 -rotate-2" },
  { value: "5", className: "left-48 top-1 rotate-3", featured: true },
  { value: "8", className: "left-64 top-6 rotate-10" },
  { value: "13", className: "left-80 top-12 rotate-16" },
  { value: "?", className: "left-36 top-44 -rotate-4 text-4xl" },
] as const;

export function PokerCards() {
  return (
    <div className="relative hidden h-[360px] lg:block" aria-hidden="true">
      {CARDS.map((card) => (
        <div
          key={card.value}
          className={`absolute flex h-40 w-28 items-center justify-center border-2 border-border text-4xl font-bold shadow-md transition-transform hover:-translate-y-1 ${card.className} ${
            "featured" in card
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-card text-card-foreground"
          }`}
        >
          {card.value}
        </div>
      ))}
    </div>
  );
}
