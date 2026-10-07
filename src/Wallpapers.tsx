import ImageCard from "./ImageCard";

const Wallpapers = () => {
  const wallpaperImages = [
    "https://images.unsplash.com/photo-1701301138250-8405f5a170ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1769790604706-d055431bce1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1781577257136-0378815bfe17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1788987259172-8d68fe102587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1690029670420-34fa5ad95814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1747482892545-a0910897b1d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1773513622817-5c3be6c80d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1707617961911-889e9ab306bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1788988957964-253a6d295989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1789045988482-6489def6d516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
  ];

  const topContributors = [
    {
      name: "Mavis Hopper",
      photos: 15,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      name: "Mavis",
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

        <div className="flex-1">
          <h1 className="text-5xl font-bold mt-2">Wallpapers</h1>
          <p className="text-sm text-gray-500">Curated by Unsplash</p>

          <p className="text-lg text-gray-600 mt-4 max-w-xl">
            From epic drone shots to inspiring moments in nature — enjoy the best
            background for your desktop or mobile.
          </p>

          <div className="mt-6 inline-block bg-black text-white px-5 py-2 rounded-md font-medium cursor-pointer hover:bg-gray-800 transition">
            Submit Wallpapers
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
              src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=500"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div> 
      <div className="columns-3 gap-4 mt-12">
        {wallpaperImages.map((img, index) => (
          <ImageCard key={index} src={img} />
        ))}
      </div>

    </div>
  );
};

export default Wallpapers