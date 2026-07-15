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
            image="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5"
            country="Kenya"
            description="Discover breathtaking safaris and rich cultural experiences."
          />

          <DestinationCard
            image="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1"
            country="Bali"
            description="Relax on tropical beaches and enjoy stunning sunsets."
          />

          <DestinationCard
            image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            country="Paris"
            description="Explore world-famous landmarks and incredible cuisine."
          />

          <DestinationCard
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            country="Switzerland"
            description="Experience majestic mountains and unforgettable scenery."
          />
        </div>
      </section>
    </main>
  );
}