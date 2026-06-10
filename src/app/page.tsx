import { Cta } from "@/components/landing/cta";
import { Extension } from "@/components/landing/extension";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Stack } from "@/components/landing/stack";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Extension />
        <HowItWorks />
        <Stack />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
