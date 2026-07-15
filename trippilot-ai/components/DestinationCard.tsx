type DestinationCardProps = {
  emoji: string;
  country: string;
  description: string;
};

export default function DestinationCard({
  emoji,
  country,
  description,
}: DestinationCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="h-40 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-7xl">
        {emoji}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {country}
        </h3>

        <p className="text-gray-600 mb-5">
          {description}
        </p>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
          Explore
        </button>
      </div>
    </div>
  );
}