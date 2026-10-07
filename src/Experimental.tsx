import ImageCard from "./ImageCard";

const Experimental = () => {
  const experimentalImages = [
    "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=600",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600",
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600",
    "https://images.unsplash.com/photo-1507149833265-60c372daea22?w=600",
    "https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=600",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600",
  ];
  const topContributors = [
    {
      name: "Mavis",
      photos: 15,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      name: "Johnson",
      photos: 12,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
    {
      name: "Steve Johnson",
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
          <h1 className="text-5xl font-bold mt-2">Experimental</h1>
          <p className="text-sm text-gray-500">Curated by Unsplash</p>
          <p className="text-lg text-gray-600 mt-4 max-w-xl">
            This category invites photographers to explore new techniques and
            perspectives, pushing creative boundaries.
          </p>

          <div className="mt-6 inline-block bg-black text-white px-5 py-2 rounded-md font-medium cursor-pointer hover:bg-gray-800 transition">
            Submit to Experimental
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
              src=" https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


      <div className="columns-3 gap-4 mt-12">
        {experimentalImages.map((img, index) => (
          <ImageCard key={index} src={img} />
        ))}
      </div>
    </div>
  );
};

export default Experimental