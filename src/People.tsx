import ImageCard from "./ImageCard";

const People = () => {
  const peopleImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600",
    "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=600",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
  ];
  const topContributors = [
    {
      name: " Hopper",
      photos: 15,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      name: "Mavis",
      photos: 12,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
    {
      name: " Johnson",
      photos: 9,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    },
    {
      name: "Steve",
      photos: 8,
      avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200",
    },
  ];

  return (
    <div className="px-10 mt-10">
      <div className="flex justify-between items-start gap-8">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mt-2">People</h1>
          <p className="text-sm text-gray-500">Curated by Unsplash</p>



          <p className="text-lg text-gray-600 mt-4 max-w-xl">
            In this category, photographers capture emotions, cultures, and
            stories through candid moments and formal portraits.
          </p>

          <div className="mt-6 inline-block bg-black text-white px-5 py-2 rounded-md font-medium cursor-pointer hover:bg-gray-800 transition">
            Submit to People
          </div>
        </div>

        {/* Right Images */}
        <div className="flex gap-4">
          {/* Top Contributors */}
          <div className="w-64 h-80 rounded-2xl border p-5 bg-white shadow-sm flex flex-col">
            <h2 className="text-sm font-semibold mb-4">
              Top-Contributors of the Month
            </h2>

            {topContributors.map((user, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <img
                  src={user.avatar}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-medium text-sm">{user.name}</h3>
                  <p className="text-gray-500 text-xs">{user.photos} Images</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image Card */}
          <div className="w-64 h-80 rounded-2xl overflow-hidden">
            <img
              src=" https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* Grid */}
      <div className="columns-3 gap-4 mt-12">
        {peopleImages.map((img, index) => (
          <ImageCard key={index} src={img} />
        ))}
      </div>
    </div>
  );
};

export default People