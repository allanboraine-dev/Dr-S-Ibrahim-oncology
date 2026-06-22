import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { PatientResource } from "@/components/PatientResource";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col w-full">
        <Hero />
        <Services />
        <About />
        <PatientResource />
      </main>
      <Footer />
    </>
  );
}
