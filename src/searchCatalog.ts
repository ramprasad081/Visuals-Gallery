export interface SearchItem {
  id: string;
  src: string;
  title: string;
  category: string;
  type: "photo" | "vector";
  tags: string[];
}

export const searchI18n: Record<string, {
  searchResults: string;
  foundVisuals: string;
  noResults: string;
  tryDifferent: string;
  clear: string;
  all: string;
  photos: string;
  vectors: string;
  suggestions: string;
}> = {
  en: {
    searchResults: "Search Results",
    foundVisuals: "visuals found",
    noResults: "No visuals found matching",
    tryDifferent: "Try searching for nature, wallpapers, 3d, vectors, travel, or architecture.",
    clear: "Clear Search",
    all: "All Visuals",
    photos: "Photos",
    vectors: "Vectors & Illustrations",
    suggestions: "Related suggestions:",
  },
  es: {
    searchResults: "Resultados de búsqueda",
    foundVisuals: "visuales encontrados",
    noResults: "No se encontraron visuales para",
    tryDifferent: "Intenta buscar naturaleza, fondos, 3D, vectores, viajes o arquitectura.",
    clear: "Limpiar búsqueda",
    all: "Todos",
    photos: "Fotos",
    vectors: "Vectores",
    suggestions: "Sugerencias relacionadas:",
  },
  de: {
    searchResults: "Suchergebnisse",
    foundVisuals: "Visuals gefunden",
    noResults: "Keine Treffer für",
    tryDifferent: "Versuchen Sie Natur, Wallpaper, 3D, Vektoren, Reisen oder Architektur.",
    clear: "Suche löschen",
    all: "Alle",
    photos: "Fotos",
    vectors: "Vektoren",
    suggestions: "Vorschläge:",
  },
  fr: {
    searchResults: "Résultats de recherche",
    foundVisuals: "visuels trouvés",
    noResults: "Aucun visuel trouvé pour",
    tryDifferent: "Essayez nature, fonds d'écran, 3D, vecteurs, voyage ou architecture.",
    clear: "Effacer la recherche",
    all: "Tous",
    photos: "Photos",
    vectors: "Vecteurs",
    suggestions: "Suggestions associées:",
  },
  id: {
    searchResults: "Hasil Pencarian",
    foundVisuals: "visual ditemukan",
    noResults: "Tidak ada visual yang cocok untuk",
    tryDifferent: "Coba cari alam, wallpaper, 3D, vektor, wisata, atau arsitektur.",
    clear: "Hapus Pencarian",
    all: "Semua",
    photos: "Foto",
    vectors: "Vektor",
    suggestions: "Saran terkait:",
  },
  it: {
    searchResults: "Risultati della ricerca",
    foundVisuals: "risultati trovati",
    noResults: "Nessun risultato trovato per",
    tryDifferent: "Prova a cercare natura, sfondi, 3D, vettori, viaggi o architettura.",
    clear: "Cancella ricerca",
    all: "Tutti",
    photos: "Foto",
    vectors: "Vettori",
    suggestions: "Suggerimenti correlati:",
  },
  ja: {
    searchResults: "検索結果",
    foundVisuals: "件のビジュアルが見つかりました",
    noResults: "一致するビジュアルがありません:",
    tryDifferent: "「自然」「壁紙」「3D」「ベクター」「旅行」「建築」などで検索してみてください。",
    clear: "検索をクリア",
    all: "すべて",
    photos: "写真",
    vectors: "ベクター",
    suggestions: "関連キーワード:",
  },
  ko: {
    searchResults: "검색 결과",
    foundVisuals: "개의 비주얼 발견",
    noResults: "일치하는 결과가 없습니다:",
    tryDifferent: "자연, 배경화면, 3D, 벡터, 여행, 건축 등으로 검색해보세요.",
    clear: "검색 초기화",
    all: "전체",
    photos: "사진",
    vectors: "벡터",
    suggestions: "추천 키워드:",
  },
  pt: {
    searchResults: "Resultados da Pesquisa",
    foundVisuals: "visuais encontrados",
    noResults: "Nenhum visual encontrado para",
    tryDifferent: "Tente pesquisar natureza, papéis de parede, 3D, vetores, viagens ou arquitetura.",
    clear: "Limpar pesquisa",
    all: "Todos",
    photos: "Fotos",
    vectors: "Vetores",
    suggestions: "Sugestões relacionadas:",
  },
};

export const searchCatalog: SearchItem[] = [
  // --- NATURE & OUTDOORS ---
  {
    id: "nat-1",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    title: "Yosemite Valley Mist & Reflection",
    category: "nature",
    type: "photo",
    tags: ["nature", "mountain", "yosemite", "lake", "water", "reflection", "mist", "fog", "sunrise", "landscape", "outdoors", "scenic"],
  },
  {
    id: "nat-2",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
    title: "Misty Pine Forest Sunlight",
    category: "nature",
    type: "photo",
    tags: ["nature", "forest", "trees", "pine", "sunlight", "green", "woods", "wilderness", "peaceful", "fog"],
  },
  {
    id: "nat-3",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
    title: "Alpine Peaks & Clouds",
    category: "nature",
    type: "photo",
    tags: ["nature", "mountain", "alps", "clouds", "sky", "hiking", "snow", "peaks", "landscape"],
  },
  {
    id: "nat-4",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600",
    title: "Majestic Rocky Mountain Ridge",
    category: "nature",
    type: "photo",
    tags: ["nature", "mountain", "rocks", "ridge", "adventure", "sky", "blue", "climb"],
  },
  {
    id: "nat-5",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
    title: "Emerald Lake & Forest Shore",
    category: "nature",
    type: "photo",
    tags: ["nature", "lake", "water", "emerald", "boat", "shore", "peaceful", "summer", "landscape"],
  },
  {
    id: "nat-6",
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
    title: "Nordic River Valley Sunset",
    category: "nature",
    type: "photo",
    tags: ["nature", "river", "sunset", "valley", "nordic", "golden hour", "serene", "water"],
  },
  {
    id: "nat-7",
    src: "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?w=600",
    title: "Wild Coastal Cliffs",
    category: "nature",
    type: "photo",
    tags: ["nature", "ocean", "sea", "cliffs", "coast", "waves", "travel", "wild"],
  },
  {
    id: "nat-8",
    src: "https://images.unsplash.com/photo-1507980062492-714282f31ee0?w=600",
    title: "Deep Redwood Forest Canopy",
    category: "nature",
    type: "photo",
    tags: ["nature", "redwoods", "trees", "green", "canopy", "woods", "giant trees"],
  },
  {
    id: "nat-9",
    src: "https://images.unsplash.com/photo-1532010940201-c31e6beacd39?w=600",
    title: "Misty Mountain Range at Dawn",
    category: "nature",
    type: "photo",
    tags: ["nature", "mountain", "dawn", "sunrise", "fog", "hills", "valley"],
  },

  // --- FALL & AUTUMN ---
  {
    id: "fall-1",
    src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=600",
    title: "Golden Autumn Forest Path",
    category: "fall",
    type: "photo",
    tags: ["fall", "autumn", "leaves", "orange", "yellow", "trees", "path", "foliage", "seasonal"],
  },
  {
    id: "fall-2",
    src: "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?w=600",
    title: "Autumn Foliage Reflection Lake",
    category: "fall",
    type: "photo",
    tags: ["fall", "autumn", "lake", "reflection", "red", "orange", "water", "seasonal", "october"],
  },
  {
    id: "fall-3",
    src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600",
    title: "Amber Fall Woods Sunlight",
    category: "fall",
    type: "photo",
    tags: ["fall", "autumn", "woods", "amber", "sunlight", "golden", "nature", "trees"],
  },

  // --- WALLPAPERS & AESTHETIC ---
  {
    id: "wall-1",
    src: "https://images.unsplash.com/photo-1701301138250-8405f5a170ea?w=600",
    title: "Minimalist Gradient Wave Wallpaper",
    category: "wallpapers",
    type: "photo",
    tags: ["wallpapers", "wallpaper", "gradient", "minimal", "aesthetic", "abstract", "modern", "background", "desktop"],
  },
  {
    id: "wall-2",
    src: "https://images.unsplash.com/photo-1769790604706-d055431bce1d?w=600",
    title: "Moody Dark Mountain Mist Wallpaper",
    category: "wallpapers",
    type: "photo",
    tags: ["wallpapers", "wallpaper", "dark", "moody", "mountain", "mist", "black", "minimalist", "phone"],
  },
  {
    id: "wall-3",
    src: "https://plus.unsplash.com/premium_photo-1781577257136-0378815bfe17?w=600",
    title: "Sunset Horizon Gradient Sky",
    category: "wallpapers",
    type: "photo",
    tags: ["wallpapers", "wallpaper", "sunset", "horizon", "sky", "pink", "purple", "pastel", "clean"],
  },
  {
    id: "wall-4",
    src: "https://images.unsplash.com/photo-1788987259172-8d68fe102587?w=600",
    title: "Neon Cyber Aesthetic Wallpaper",
    category: "wallpapers",
    type: "photo",
    tags: ["wallpapers", "wallpaper", "neon", "cyberpunk", "glow", "night", "futuristic", "colors"],
  },
  {
    id: "wall-5",
    src: "https://images.unsplash.com/photo-1690029670420-34fa5ad95814?w=600",
    title: "Silk Fabric Flowing Texture Wallpaper",
    category: "wallpapers",
    type: "photo",
    tags: ["wallpapers", "wallpaper", "fabric", "silk", "flowing", "smooth", "waves", "luxury", "abstract"],
  },
  {
    id: "wall-6",
    src: "https://images.unsplash.com/photo-1707617961911-889e9ab306bb?w=600",
    title: "Pure Minimalist Monochrome Wallpaper",
    category: "wallpapers",
    type: "photo",
    tags: ["wallpapers", "wallpaper", "monochrome", "minimal", "clean", "white", "black", "geometry"],
  },

  // --- 3D RENDERS ---
  {
    id: "ren-1",
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600",
    title: "Futuristic Iridescent 3D Fluid Sphere",
    category: "render",
    type: "photo",
    tags: ["render", "3d", "3d renders", "fluid", "sphere", "iridescent", "abstract", "digital", "cgi", "blender"],
  },
  {
    id: "ren-2",
    src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?w=600",
    title: "Abstract Chrome Ribbon Sculpture",
    category: "render",
    type: "photo",
    tags: ["render", "3d", "chrome", "metallic", "ribbon", "sculpture", "modern art", "shiny", "reflection"],
  },
  {
    id: "ren-3",
    src: "https://images.unsplash.com/photo-1614729375296-9c5f2b0f6b9d?w=600",
    title: "Cosmic Neon 3D Planetary Ring",
    category: "render",
    type: "photo",
    tags: ["render", "3d", "neon", "space", "cosmic", "planet", "ring", "purple", "futuristic", "glow"],
  },
  {
    id: "ren-4",
    src: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=600",
    title: "Geometric Pastel 3D Cubes & Spheres",
    category: "render",
    type: "photo",
    tags: ["render", "3d", "pastel", "cubes", "geometry", "shapes", "composition", "soft", "minimal"],
  },
  {
    id: "ren-5",
    src: "https://images.unsplash.com/photo-1614850715776-a749a85b4144?w=600",
    title: "Liquid Marble Dynamic 3D Wave",
    category: "render",
    type: "photo",
    tags: ["render", "3d", "wave", "liquid", "marble", "swirl", "colorful", "energy"],
  },

  // --- ARCHITECTURE ---
  {
    id: "arch-1",
    src: "https://images.unsplash.com/photo-1612899326681-66508905b4ce?w=600",
    title: "Modern Architectural Curves & Shadows",
    category: "architecture",
    type: "photo",
    tags: ["architecture", "building", "modern", "minimal", "curves", "shadows", "facade", "concrete", "white", "design"],
  },
  {
    id: "arch-2",
    src: "https://images.unsplash.com/photo-1584268212459-cdcf2008b87a?w=600",
    title: "Glass Skyscraper Geometric Windows",
    category: "architecture",
    type: "photo",
    tags: ["architecture", "skyscraper", "glass", "windows", "urban", "city", "tower", "reflection"],
  },
  {
    id: "arch-3",
    src: "https://images.unsplash.com/photo-1584301618889-6b85178c61d4?w=600",
    title: "Brutalist Spiral Concrete Staircase",
    category: "architecture",
    type: "photo",
    tags: ["architecture", "staircase", "spiral", "brutalist", "concrete", "geometry", "interior", "structure"],
  },
  {
    id: "arch-4",
    src: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=600",
    title: "Contemporary Museum Facade",
    category: "architecture",
    type: "photo",
    tags: ["architecture", "museum", "facade", "contemporary", "lines", "minimalism", "urban"],
  },

  // --- TRAVEL & WANDERLUST ---
  {
    id: "trv-1",
    src: "https://images.unsplash.com/photo-1543325768-c2650cc0d8cf?w=600",
    title: "Cinematic European Old Town Alley",
    category: "travel",
    type: "photo",
    tags: ["travel", "alley", "europe", "old town", "city", "street", "stone", "architecture", "wanderlust", "vacation"],
  },
  {
    id: "trv-2",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600",
    title: "Paris Eiffel Tower Morning Glow",
    category: "travel",
    type: "photo",
    tags: ["travel", "paris", "eiffel tower", "france", "sunrise", "romantic", "landmark", "tourism"],
  },
  {
    id: "trv-3",
    src: "https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?w=600",
    title: "Mediterranean Turquoise Coast",
    category: "travel",
    type: "photo",
    tags: ["travel", "mediterranean", "ocean", "sea", "turquoise", "beach", "summer", "island"],
  },
  {
    id: "trv-4",
    src: "https://images.unsplash.com/photo-1524242109383-e349707a106b?w=600",
    title: "Scenic Highway Coastal Road Trip",
    category: "travel",
    type: "photo",
    tags: ["travel", "road trip", "highway", "car", "drive", "coast", "mountains", "freedom", "adventure"],
  },

  // --- ANIMALS & FAUNA ---
  {
    id: "ani-1",
    src: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?w=600",
    title: "Playful Golden Retriever Dog",
    category: "animals",
    type: "photo",
    tags: ["animals", "dog", "puppy", "golden retriever", "pet", "cute", "outdoor", "fur", "happy"],
  },
  {
    id: "ani-2",
    src: "https://plus.unsplash.com/premium_photo-1694198818362-0fa024ded2b2?w=600",
    title: "Wild Deer in Morning Mist",
    category: "animals",
    type: "photo",
    tags: ["animals", "deer", "wildlife", "fauna", "nature", "forest", "mist", "morning", "antlers"],
  },
  {
    id: "ani-3",
    src: "https://images.unsplash.com/photo-1470107355970-2ace9f20ab15?w=600",
    title: "Majestic Wild Eagle in Flight",
    category: "animals",
    type: "photo",
    tags: ["animals", "eagle", "bird", "flight", "wildlife", "wings", "sky", "freedom"],
  },
  {
    id: "ani-4",
    src: "https://images.unsplash.com/photo-1450052590821-8bf91254a353?w=600",
    title: "Arctic Fox in Snowy Wilderness",
    category: "animals",
    type: "photo",
    tags: ["animals", "fox", "arctic", "snow", "winter", "white", "wildlife", "cute"],
  },

  // --- STREET PHOTOGRAPHY ---
  {
    id: "str-1",
    src: "https://images.unsplash.com/photo-1788201253619-10d2c2765821?w=600",
    title: "Rainy Night Tokyo Crosswalk Neon",
    category: "street",
    type: "photo",
    tags: ["street", "street photography", "rain", "night", "tokyo", "japan", "neon", "crosswalk", "umbrella", "city", "urban"],
  },
  {
    id: "str-2",
    src: "https://images.unsplash.com/photo-1789320639631-6c85daad9b46?w=600",
    title: "New York Classic Yellow Taxi",
    category: "street",
    type: "photo",
    tags: ["street", "car", "taxi", "new york", "city", "urban", "traffic", "yellow", "manhattan"],
  },
  {
    id: "str-3",
    src: "https://images.unsplash.com/photo-1786014767804-cdb91136a324?w=600",
    title: "Subway Shadows & Pedestrians",
    category: "street",
    type: "photo",
    tags: ["street", "subway", "metro", "shadows", "people", "candid", "urban life", "black and white"],
  },

  // --- TEXTURES & PATTERNS ---
  {
    id: "tex-1",
    src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600",
    title: "Geometric Color Harmony & Lines",
    category: "textures",
    type: "photo",
    tags: ["textures", "pattern", "colors", "lines", "harmony", "abstract", "modern", "graphic", "pastel"],
  },
  {
    id: "tex-2",
    src: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=600",
    title: "Cracked Earth Desert Texture",
    category: "textures",
    type: "photo",
    tags: ["textures", "earth", "desert", "dry", "soil", "brown", "organic", "ground"],
  },
  {
    id: "tex-3",
    src: "https://images.unsplash.com/photo-1520176501380-9a174bf7c783?w=600",
    title: "Smooth Ocean Ripple Water Texture",
    category: "textures",
    type: "photo",
    tags: ["textures", "water", "ocean", "ripples", "blue", "liquid", "calm", "waves"],
  },

  // --- PEOPLE & PORTRAITS ---
  {
    id: "peo-1",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    title: "Warm Smile Natural Portrait",
    category: "people",
    type: "photo",
    tags: ["people", "portrait", "woman", "smile", "happy", "face", "girl", "person", "outdoor"],
  },
  {
    id: "peo-2",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    title: "Urban Fashion Male Portrait",
    category: "people",
    type: "photo",
    tags: ["people", "portrait", "man", "model", "fashion", "urban", "candid", "male"],
  },
  {
    id: "peo-3",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    title: "Moody Studio Black & White Portrait",
    category: "people",
    type: "photo",
    tags: ["people", "portrait", "studio", "black and white", "monochrome", "eyes", "depth"],
  },

  // --- VECTORS & ILLUSTRATIONS (PENCIL) ---
  {
    id: "vec-1",
    src: "https://plus.unsplash.com/premium_vector-1788539735429-ee06b07e41be?w=1000",
    title: "Botanical Plant Leaves Vector Art",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "botanical", "leaves", "plants", "green", "flat art", "pencil", "graphic"],
  },
  {
    id: "vec-2",
    src: "https://images.unsplash.com/vector-1786978508333-c34b70e67d3c?w=1000",
    title: "Abstract Floral Harmony Vector",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "floral", "flowers", "abstract", "modern", "art", "drawing", "pencil"],
  },
  {
    id: "vec-3",
    src: "https://plus.unsplash.com/premium_vector-1785935813452-58dda750a155?w=1000",
    title: "Geometric Flat Landscape Illustration",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "geometric", "landscape", "sun", "mountains", "flat", "retro", "poster"],
  },
  {
    id: "vec-4",
    src: "https://images.unsplash.com/vector-1787927565537-1d2dba71bb52?w=1000",
    title: "Minimalist Line Art Face Portrait",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "line art", "face", "portrait", "minimal", "black and white", "sketch"],
  },
  {
    id: "vec-5",
    src: "https://plus.unsplash.com/premium_vector-1788838128143-f7732aa4492b?w=1000",
    title: "Retro Badge & Vintage Emblem Vector",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "badge", "vintage", "retro", "emblem", "stamp", "logo", "typography"],
  },
  {
    id: "vec-6",
    src: "https://images.unsplash.com/vector-1787667962871-08f824c1482c?w=1000",
    title: "Colorful Abstract Shapes Composition",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "shapes", "colorful", "composition", "memphis", "design", "graphic"],
  },
  {
    id: "vec-7",
    src: "https://plus.unsplash.com/premium_vector-1788450279365-92e538a5ce20?w=1000",
    title: "Isometric City Architecture Vector",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "isometric", "city", "buildings", "3d vector", "architecture", "urban"],
  },
  {
    id: "vec-8",
    src: "https://images.unsplash.com/vector-1788008722451-9d435072ab37?w=1000",
    title: "Hand-Drawn Wildlife Animal Vector",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "animal", "wildlife", "drawing", "pencil", "creature", "nature"],
  },
  {
    id: "vec-9",
    src: "https://images.unsplash.com/vector-1788041125904-878193b23d3a?w=1000",
    title: "Pastel Sunset Ocean Waves Illustration",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "waves", "ocean", "sunset", "sea", "pastel", "beach", "calm"],
  },
  {
    id: "vec-10",
    src: "https://plus.unsplash.com/premium_vector-1787701419851-475148d2a1aa?w=1000",
    title: "Celestial Moon & Stars Graphic",
    category: "vectors",
    type: "vector",
    tags: ["vector", "vectors", "illustration", "moon", "stars", "celestial", "space", "night", "mystic", "astronomy"],
  },

  // --- ADDITIONAL CURATED HIGH-QUALITY VISUALS ---
  {
    id: "gal-1",
    src: "https://images.unsplash.com/photo-1779896411979-35844de55d13?w=600",
    title: "Cinematic Warm Golden Forest",
    category: "nature",
    type: "photo",
    tags: ["nature", "forest", "sunlight", "golden", "scenic", "landscape"],
  },
  {
    id: "gal-2",
    src: "https://plus.unsplash.com/premium_photo-1789234847880-77edf6027a44?w=600",
    title: "Misty Sunrise Lake Pier",
    category: "nature",
    type: "photo",
    tags: ["nature", "lake", "pier", "water", "mist", "fog", "sunrise", "calm"],
  },
  {
    id: "gal-3",
    src: "https://images.unsplash.com/photo-1789283170426-1d1305571e26?w=600",
    title: "Nordic Fjord Reflections",
    category: "travel",
    type: "photo",
    tags: ["travel", "fjord", "mountains", "norway", "water", "nordic", "scenic", "blue"],
  },
  {
    id: "gal-4",
    src: "https://images.unsplash.com/photo-1785665615482-1cde2f5501ab?w=600",
    title: "Desert Sand Dunes at Twilight",
    category: "nature",
    type: "photo",
    tags: ["nature", "desert", "sand", "dunes", "twilight", "warm", "minimal"],
  },
  {
    id: "gal-5",
    src: "https://images.unsplash.com/photo-1785677535400-725b852ff2e1?w=600",
    title: "Mountain Highway Above the Clouds",
    category: "travel",
    type: "photo",
    tags: ["travel", "mountain", "clouds", "road", "highway", "sky", "altitude", "adventure"],
  },
  {
    id: "gal-6",
    src: "https://plus.unsplash.com/premium_photo-1784122279200-e528d1f78142?w=600",
    title: "Vibrant Tropical Palm Sunset",
    category: "travel",
    type: "photo",
    tags: ["travel", "sunset", "palm trees", "tropical", "beach", "orange", "vacation"],
  },
  {
    id: "gal-7",
    src: "https://images.unsplash.com/photo-1773332585687-85beb4da71ab?w=600",
    title: "Moody Foggy Ocean Shoreline",
    category: "nature",
    type: "photo",
    tags: ["nature", "ocean", "waves", "fog", "shore", "pacific", "moody", "coast"],
  },
  {
    id: "gal-8",
    src: "https://images.unsplash.com/photo-1789167871825-dbfb0745c067?w=600",
    title: "Abstract Liquid Color Droplet",
    category: "textures",
    type: "photo",
    tags: ["textures", "liquid", "macro", "water", "droplet", "colors", "macro", "abstract"],
  },
];

export const searchVisuals = (
  query: string,
  filterType: "all" | "photo" | "vector" = "all"
): SearchItem[] => {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return [];

  const tokens = cleanQuery.split(/\s+/).filter(Boolean);

  return searchCatalog.filter((item) => {
    if (filterType !== "all" && item.type !== filterType) {
      return false;
    }

    const searchableText = [
      item.title,
      item.category,
      item.type,
      ...item.tags,
    ]
      .join(" ")
      .toLowerCase();

    // Check if every typed word matches somewhere in the visual's metadata
    return tokens.every((token) => searchableText.includes(token));
  });
};
