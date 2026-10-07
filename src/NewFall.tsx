import ImageCard from "./ImageCard";


const NewFall = () => {
  const fallImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",

    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600",
    "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=600",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
    "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=600",

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
          <h1 className="text-5xl font-bold mt-2">Fall</h1>
          <p className="text-sm text-gray-500">Curated by Unsplash</p>
          <p className="text-lg text-gray-600 mt-4 max-w-xl">
            From autumn leaves to brisk landscapes, this category captures the
            best of what Fall has to offer.
          </p>
          <div className="mt-6 inline-block bg-black text-white px-5 py-2 rounded-md font-medium cursor-pointer hover:bg-gray-800 transition">
            Submit to Fall
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Contributions close December 1, 2026 at 12:00 AM (UTC).
          </p>
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
              src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=500"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="columns-3 gap-4 mt-12">
        {fallImages.map((img, index) => (
          <ImageCard key={index} src={img} />
        ))}
      </div>
    </div>
  );
};

export default NewFall;