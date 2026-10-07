import ImageCard from "./ImageCard";

const Travel = () => {
  const travelImages = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600",
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
    "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600",
  ];
  const topContributors = [
    {
      name: "Mavis Hopper",
      photos: 15,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      name: "Steve ",
      photos: 12,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
    {
      name: "Steve A Johnson",
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
        <div className="flex-1">
          <h1 className="text-5xl font-bold mt-2">Travel</h1>
          <p className="text-sm text-gray-500">Curated by Unsplash</p>
          <p className="text-lg text-gray-600 mt-4 max-w-xl">
            Explore the globe through captivating landscapes and vibrant cultures
            in this Travel category, celebrating diverse destinations worldwide.
          </p>

          <div className="mt-6 inline-block bg-black text-white px-5 py-2 rounded-md font-medium cursor-pointer hover:bg-gray-800 transition">
            Submit to Travel
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
              src="  https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


      <div className="columns-3 gap-4 mt-12">
        {travelImages.map((img, index) => (
          <ImageCard key={index} src={img} />
        ))}
      </div>
    </div>
  );
};

export default Travel