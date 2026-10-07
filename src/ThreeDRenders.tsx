import ImageCard from "./ImageCard";

const ThreeDRenders = () => {
  const renderImages = [
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?w=600",
    "https://images.unsplash.com/photo-1614729375296-9c5f2b0f6b9d?w=600",
    "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600",
    "https://images.unsplash.com/photo-1614850715776-a749a85b4144?w=600",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?w=600",
  ];
  const topContributors = [
    {
      name: "Mavis ",
      photos: 15,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      name: "Hopper",
      photos: 12,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
    {
      name: " Johnson",
      photos: 9,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    },
    {
      name: "Steve ",
      photos: 8,
      avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200",
    },
  ];

  return (
    <div className="px-10 mt-10">
      <div className="flex justify-between items-start gap-8">

        <div className="flex-1">
          <h1 className="text-5xl font-bold mt-2">3D Renders</h1>
          <p className="text-sm text-gray-500">Curated by Unsplash</p>
          <p className="text-lg text-gray-600 mt-4 max-w-xl">
            Explore futuristic scenes, abstract objects, and high-quality 3D
            artwork perfect for creative inspiration.
          </p>

          <div className="mt-6 inline-block bg-black text-white px-5 py-2 rounded-md font-medium cursor-pointer hover:bg-gray-800 transition">
            Submit to 3D Render
          </div>
        </div>
  
        <div className="flex gap-4">
          <div className="w-64 h-80 rounded-2xl border p-5 bg-white shadow-sm">
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
                  <p className="text-xs text-gray-500">
                    {user.photos} Images
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-64 h-80 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=500"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      <div className="columns-3 gap-4 mt-12">
        {renderImages.map((img, index) => (
          <ImageCard key={index} src={img} />
        ))}
      </div>
    </div>
  );
};

export default ThreeDRenders