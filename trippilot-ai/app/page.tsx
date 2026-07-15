import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <Navbar />
      <Hero />

      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Destinations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <DestinationCard
            emoji="🦁"
            country="Kenya"
            description="Discover breathtaking safaris and rich cultural experiences."
          />

          <DestinationCard
            emoji="🏝️"
            country="Bali"
            description="Relax on tropical beaches and enjoy stunning sunsets."
          />

          <DestinationCard
            emoji="🗼"
            country="Paris"
            description="Explore world-famous landmarks and incredible cuisine."
          />

          <DestinationCard
            emoji="🏔️"
            country="Switzerland"
            description="Experience majestic mountains and unforgettable scenery."
          />
        </div>
      </section>
    </main>
  );
}