export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
      <h1 className="text-3xl font-bold">✈️ TripPilot AI</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Destinations</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}