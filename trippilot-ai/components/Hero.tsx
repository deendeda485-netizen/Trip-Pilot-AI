export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <h2 className="text-6xl font-extrabold mb-6">
        🌍 Explore the World with AI
      </h2>

      <p className="text-xl max-w-3xl mx-auto mb-10">
        TripPilot AI helps you discover amazing destinations, build personalized
        itineraries, estimate travel costs, and travel smarter.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100">
          Start Planning
        </button>

        <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700">
          Explore Destinations
        </button>
      </div>
    </section>
  );
}