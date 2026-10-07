import ImageCard from "./ImageCard";

const Film = () => {
  const filmImages = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=600",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600",
    "https://images.unsplash.com/photo-1518131678677-a0c84ff5d2f6?w=600",
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600",
  ];

  const topContributors = [
    {
      name: "Mavis",
      photos: 15,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      name: "Hopper",
      photos: 12,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
    {
      name: "Steve",
      photos: 9,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    },
    {
      name: "Johnson",
      photos: 8,
      avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200",
    },
  ];
  return (
    <div className="px-10 mt-10">
      <div className="flex justify-between items-start gap-8">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mt-2">Film</h1>
          <p className="text-sm text-gray-500">Curated by Unsplash</p>
          <p className="text-lg text-gray-600 mt-4 max-w-xl">
            This category celebrates film's timeless beauty, capturing moments
            with rich textures and unique colors that define analog photography.
          </p>

          <div className="mt-6 inline-block bg-black text-white px-5 py-2 rounded-md font-medium cursor-pointer hover:bg-gray-800 transition">
            Submit to Film
          </div>
        </div>
        <div className="flex gap-4">

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

          <div className="w-64 h-80 rounded-2xl overflow-hidden">
            <img
              src=" https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="columns-3 gap-4 mt-12">
        {filmImages.map((img, index) => (
          <ImageCard key={index} src={img} />
        ))}
      </div>
    </div>
  );
};

export default Film