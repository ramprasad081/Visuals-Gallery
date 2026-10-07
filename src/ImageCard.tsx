import { Bookmark, Plus, Download } from "lucide-react";

const ImageCard = ({ src }: { src: string }) => {
  return (
    <div className="relative group mb-4 break-inside-avoid">
      <img src={src} className="w-full rounded-xl" />

      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button className="p-2 bg-white rounded-full shadow">
          <Bookmark size={18} />
        </button>
        <button className="p-2 bg-white rounded-full shadow">
          <Plus size={18} />
        </button>
      </div>

      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition">
        <button className="p-2 bg-white rounded-full shadow">
          <Download size={18} />
        </button>
      </div>
    </div>
  );
};

export default ImageCard