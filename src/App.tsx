// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// // import { Badge } from "@/components/ui/badge";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import { Home, Image, Pencil, Compass as CompassIcon, Folder, Download, Bookmark, User, Languages, Menu, Search, ScanSearch, Sparkles, Flame, ArrowRight, TrendingUp, Plus, Globe, Lock, Check, X } from "lucide-react";
import { useState } from "react";
import ImageCard from "./ImageCard";
import Compass from "./Compass";
import NewFall from "./NewFall";
import Wallpapers from "./Wallpapers";
import ThreeDRender from "./ThreeDRenders";
import Nature from "./Nature";
import Textures from "./Textures";
import Film from "./Film";
import Architecture from "./Architecture";
import StreetPhotography from "./StreetPhotography";
import Experimental from "./Experimental";
import Travel from "./Travel";
import People from "./People";
import { searchVisuals, searchI18n } from "./searchCatalog";

const translations: Record<string, {
  searchPlaceholder: string;
  featured: string;
  newText: string;
  fall: string;
  wallpapers: string;
  renders: string;
  nature: string;
  textures: string;
  film: string;
  architecture: string;
  street: string;
  experimental: string;
  travel: string;
  people: string;
  heroSubtitle: string;
  illustrationsTitle: string;
  illustrationsSubtitle: string;
  trending: string;
  topContributors: string;
  topIllustrators: string;
  images: string;
  vectors: string;
  staffPick: string;
  photoOfTheWeek: string;
  featuredVector: string;
  curatedBy: string;
  photoOfTheDay: string;
  curated: string;
  spotlightTitle: string;
  spotlightDesc: string;
  exploreNature: string;
  featuredCollections: string;
  collectionsSub: string;
  creatorSpotlight: string;
  joinArtists: string;
  joinArtistsDesc: string;
  freeVisuals: string;
  downloads: string;
  freeLicense: string;
  trendingToday: string;
  trendingTodaySub: string;
  viewAll: string;
  collectionsTitle: string;
  collectionsDesc: string;
  newCollection: string;
  downloadsTitle: string;
  downloadsDesc: string;
  downloadAllZip: string;
  licenseTitle: string;
  unlimitedDownloads: string;
  licenseDesc: string;
  redownload: string;
  savedTitle: string;
  savedDesc: string;
  savedVisuals: string;
  login: string;
  welcomeBack: string;
  email: string;
  password: string;
  forgotPassword: string;
  loginBtn: string;
  noAccount: string;
  joinBtn: string;
  selectLanguage: string;
}> = {
  en: {
    searchPlaceholder: "Search photos and illustrations",
    featured: "Featured",
    newText: "New",
    fall: "Fall",
    wallpapers: "Wallpapers",
    renders: "3D Renders",
    nature: "Nature",
    textures: "Textures",
    film: "Film",
    architecture: "Architecture",
    street: "Street Photography",
    experimental: "Experimental",
    travel: "Travel",
    people: "People",
    heroSubtitle: "The internet's source for visuals.\nPowered by creators everywhere.",
    illustrationsTitle: "Illustrations & Vectors",
    illustrationsSubtitle: "Free illustrations and vectors.\nCrafted by world-class creators.",
    trending: "Trending:",
    topContributors: "Top-Contributors of the Month",
    topIllustrators: "Top Illustrators",
    images: "Images",
    vectors: "Vectors",
    staffPick: "Staff Pick",
    photoOfTheWeek: "Photo of the Week",
    featuredVector: "Featured Vector",
    curatedBy: "Curated by Visuals",
    photoOfTheDay: "Photo of the Day",
    curated: "Curated",
    spotlightTitle: "Yosemite Valley Mist & Reflection",
    spotlightDesc: "Captured during sunrise in the high Sierras. Visuals community choice of this week.",
    exploreNature: "Explore Nature",
    featuredCollections: "Featured Collections",
    collectionsSub: "Hand-picked visuals organized by visual storytellers",
    creatorSpotlight: "Creator Spotlight",
    joinArtists: "Join 350,000+ visual artists",
    joinArtistsDesc: "Share your photography and illustrations with millions of creators worldwide. Zero fees, endless inspiration.",
    freeVisuals: "Free Visuals",
    downloads: "Downloads",
    freeLicense: "Free License",
    trendingToday: "Trending Visuals Today",
    trendingTodaySub: "Fresh photos curated for your creative projects",
    viewAll: "View all photos",
    collectionsTitle: "Collections & Folders",
    collectionsDesc: "Organize, save, and curate your visual inspirations into custom projects.",
    newCollection: "New Collection",
    downloadsTitle: "Downloads History",
    downloadsDesc: "All downloaded high-resolution images & vector files ready for your creative projects.",
    downloadAllZip: "Download All (ZIP)",
    licenseTitle: "Commercial Free License",
    unlimitedDownloads: "Unlimited Free Downloads",
    licenseDesc: "All assets can be used freely for personal and commercial projects without attribution.",
    redownload: "Re-download",
    savedTitle: "Saved Visuals & Bookmarks",
    savedDesc: "Your curated inspiration gallery. Photos and vectors you've saved for later.",
    savedVisuals: "Saved Visuals",
    login: "Login",
    welcomeBack: "Welcome back.",
    email: "Email",
    password: "Password",
    forgotPassword: "Forgot your password?",
    loginBtn: "Login",
    noAccount: "Don't have an account?",
    joinBtn: "Join",
    selectLanguage: "Select your language",
  },
  es: {
    searchPlaceholder: "Buscar fotos e ilustraciones",
    featured: "Destacados",
    newText: "Nuevo",
    fall: "Otoño",
    wallpapers: "Fondos de pantalla",
    renders: "Renders 3D",
    nature: "Naturaleza",
    textures: "Texturas",
    film: "Película",
    architecture: "Arquitectura",
    street: "Fotografía callejera",
    experimental: "Experimental",
    travel: "Viajes",
    people: "Personas",
    heroSubtitle: "La fuente visual de internet.\nImpulsada por creadores de todo el mundo.",
    illustrationsTitle: "Ilustraciones y Vectores",
    illustrationsSubtitle: "Ilustraciones y vectores gratuitos.\nDiseñados por creadores de talla mundial.",
    trending: "Tendencias:",
    topContributors: "Principales Colaboradores del Mes",
    topIllustrators: "Mejores Ilustradores",
    images: "Imágenes",
    vectors: "Vectores",
    staffPick: "Elección del Equipo",
    photoOfTheWeek: "Foto de la Semana",
    featuredVector: "Vector Destacado",
    curatedBy: "Comisariado por Visuals",
    photoOfTheDay: "Foto del Día",
    curated: "Comisariado",
    spotlightTitle: "Niebla y Reflejo en el Valle de Yosemite",
    spotlightDesc: "Capturado durante el amanecer en las altas Sierras. Elección de la comunidad.",
    exploreNature: "Explorar Naturaleza",
    featuredCollections: "Colecciones Destacadas",
    collectionsSub: "Visuales seleccionados organizados por narradores visuales",
    creatorSpotlight: "Destacado de Creadores",
    joinArtists: "Únete a más de 350.000 artistas visuales",
    joinArtistsDesc: "Comparte tus fotos e ilustraciones con millones de creadores. Sin tarifas, inspiración infinita.",
    freeVisuals: "Visuales Gratis",
    downloads: "Descargas",
    freeLicense: "Licencia Gratuita",
    trendingToday: "Visuales en Tendencia Hoy",
    trendingTodaySub: "Fotos frescas seleccionadas para tus proyectos creativos",
    viewAll: "Ver todas las fotos",
    collectionsTitle: "Colecciones y Carpetas",
    collectionsDesc: "Organiza, guarda y gestiona tus inspiraciones visuales en proyectos personalizados.",
    newCollection: "Nueva Colección",
    downloadsTitle: "Historial de Descargas",
    downloadsDesc: "Todas las imágenes y vectores de alta resolución listos para tus proyectos.",
    downloadAllZip: "Descargar Todo (ZIP)",
    licenseTitle: "Licencia Comercial Gratuita",
    unlimitedDownloads: "Descargas Gratuitas Ilimitadas",
    licenseDesc: "Todos los recursos se pueden utilizar libremente para proyectos personales y comerciales sin atribución.",
    redownload: "Volver a descargar",
    savedTitle: "Visuales Guardados y Marcadores",
    savedDesc: "Tu galería de inspiración. Fotos y vectores que has guardado para más tarde.",
    savedVisuals: "Visuales Guardados",
    login: "Iniciar sesión",
    welcomeBack: "Bienvenido de nuevo.",
    email: "Correo electrónico",
    password: "Contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    loginBtn: "Iniciar sesión",
    noAccount: "¿No tienes una cuenta?",
    joinBtn: "Únete",
    selectLanguage: "Selecciona tu idioma",
  },
  de: {
    searchPlaceholder: "Fotos und Illustrationen suchen",
    featured: "Vorgestellt",
    newText: "Neu",
    fall: "Herbst",
    wallpapers: "Hintergründe",
    renders: "3D-Renders",
    nature: "Natur",
    textures: "Texturen",
    film: "Film",
    architecture: "Architektur",
    street: "Straßenfotografie",
    experimental: "Experimentell",
    travel: "Reisen",
    people: "Menschen",
    heroSubtitle: "Die Quelle des Internets für Visuals.\nVon Schöpfern weltweit angetrieben.",
    illustrationsTitle: "Illustrationen & Vektoren",
    illustrationsSubtitle: "Kostenlose Illustrationen und Vektoren.\nErstellt von erstklassigen Designern.",
    trending: "Beliebt:",
    topContributors: "Top-Mitwirkende des Monats",
    topIllustrators: "Top-Illustratoren",
    images: "Bilder",
    vectors: "Vektoren",
    staffPick: "Tipp der Redaktion",
    photoOfTheWeek: "Foto der Woche",
    featuredVector: "Vorgestellter Vektor",
    curatedBy: "Kuriert von Visuals",
    photoOfTheDay: "Foto des Tages",
    curated: "Kuriert",
    spotlightTitle: "Yosemite Valley Nebel & Reflexion",
    spotlightDesc: "Aufgenommen bei Sonnenaufgang in der Sierra Nevada. Wahl der Community dieser Woche.",
    exploreNature: "Natur erkunden",
    featuredCollections: "Ausgewählte Sammlungen",
    collectionsSub: "Handverlesene Visuals von visuellen Geschichtenerzählern",
    creatorSpotlight: "Schöpfer im Spotlight",
    joinArtists: "Schließe dich über 350.000 Künstlern an",
    joinArtistsDesc: "Teile deine Fotos und Illustrationen mit Millionen von Schöpfern weltweit.",
    freeVisuals: "Kostenlose Visuals",
    downloads: "Downloads",
    freeLicense: "Freie Lizenz",
    trendingToday: "Heute im Trend",
    trendingTodaySub: "Frische Fotos für deine kreativen Projekte",
    viewAll: "Alle Fotos ansehen",
    collectionsTitle: "Sammlungen & Ordner",
    collectionsDesc: "Organisiere, speichere und verwalte deine visuellen Inspirationen in eigenen Projekten.",
    newCollection: "Neue Sammlung",
    downloadsTitle: "Download-Verlauf",
    downloadsDesc: "Alle heruntergeladenen hochauflösenden Bilder und Vektordateien für deine Projekte.",
    downloadAllZip: "Alles herunterladen (ZIP)",
    licenseTitle: "Kostenlose kommerzielle Lizenz",
    unlimitedDownloads: "Unbegrenzte kostenlose Downloads",
    licenseDesc: "Alle Inhalte können frei für persönliche und kommerzielle Zwecke ohne Namensnennung genutzt werden.",
    redownload: "Erneut herunterladen",
    savedTitle: "Gespeicherte Visuals & Lesezeichen",
    savedDesc: "Deine persönliche Inspirationsgalerie. Für später gespeicherte Bilder.",
    savedVisuals: "Gespeicherte Visuals",
    login: "Anmelden",
    welcomeBack: "Willkommen zurück.",
    email: "E-Mail",
    password: "Passwort",
    forgotPassword: "Passwort vergessen?",
    loginBtn: "Anmelden",
    noAccount: "Noch kein Konto?",
    joinBtn: "Registrieren",
    selectLanguage: "Sprache auswählen",
  },
  fr: {
    searchPlaceholder: "Rechercher des photos et illustrations",
    featured: "En vedette",
    newText: "Nouveau",
    fall: "Automne",
    wallpapers: "Fonds d'écran",
    renders: "Rendus 3D",
    nature: "Nature",
    textures: "Textures",
    film: "Argentique",
    architecture: "Architecture",
    street: "Photographie de rue",
    experimental: "Expérimental",
    travel: "Voyage",
    people: "Personnes",
    heroSubtitle: "La source visuelle d'Internet.\nPropulsée par des créateurs du monde entier.",
    illustrationsTitle: "Illustrations & Vecteurs",
    illustrationsSubtitle: "Illustrations et vecteurs gratuits.\nConçus par des créateurs de talent.",
    trending: "Tendances :",
    topContributors: "Meilleurs contributeurs du mois",
    topIllustrators: "Meilleurs illustrateurs",
    images: "Images",
    vectors: "Vecteurs",
    staffPick: "Choix de l'équipe",
    photoOfTheWeek: "Photo de la semaine",
    featuredVector: "Vecteur en vedette",
    curatedBy: "Sélectionné par Visuals",
    photoOfTheDay: "Photo du jour",
    curated: "Sélection",
    spotlightTitle: "Brume et reflet dans la vallée de Yosemite",
    spotlightDesc: "Capturé au lever du soleil dans les hautes Sierras. Choix de la communauté.",
    exploreNature: "Explorer la nature",
    featuredCollections: "Collections en vedette",
    collectionsSub: "Visuels triés sur le volet par des conteurs visuels",
    creatorSpotlight: "Créateur à l'honneur",
    joinArtists: "Rejoignez 350 000+ artistes visuels",
    joinArtistsDesc: "Partagez vos photographies et illustrations avec des millions de créateurs.",
    freeVisuals: "Visuels gratuits",
    downloads: "Téléchargements",
    freeLicense: "Licence gratuite",
    trendingToday: "Visuels tendance aujourd'hui",
    trendingTodaySub: "Photos récentes sélectionnées pour vos projets créatifs",
    viewAll: "Voir toutes les photos",
    collectionsTitle: "Collections & Dossiers",
    collectionsDesc: "Organisez, enregistrez et gérez vos inspirations visuelles dans des projets.",
    newCollection: "Nouvelle collection",
    downloadsTitle: "Historique des téléchargements",
    downloadsDesc: "Tous vos fichiers haute résolution téléchargés prêts à l'emploi.",
    downloadAllZip: "Tout télécharger (ZIP)",
    licenseTitle: "Licence commerciale gratuite",
    unlimitedDownloads: "Téléchargements gratuits illimités",
    licenseDesc: "Tous les visuels sont utilisables librement pour des projets personnels et commerciaux.",
    redownload: "Retélécharger",
    savedTitle: "Visuels enregistrés & Favoris",
    savedDesc: "Votre galerie d'inspiration personnelle. Photos et vecteurs mis de côté.",
    savedVisuals: "Visuels enregistrés",
    login: "Connexion",
    welcomeBack: "Bon retour parmi nous.",
    email: "E-mail",
    password: "Mot de passe",
    forgotPassword: "Mot de passe oublié ?",
    loginBtn: "Connexion",
    noAccount: "Vous n'avez pas de compte ?",
    joinBtn: "Rejoindre",
    selectLanguage: "Choisissez votre langue",
  },
  id: {
    searchPlaceholder: "Cari foto dan ilustrasi",
    featured: "Unggulan",
    newText: "Baru",
    fall: "Musim Gugur",
    wallpapers: "Wallpaper",
    renders: "Render 3D",
    nature: "Alam",
    textures: "Tekstur",
    film: "Film",
    architecture: "Arsitektur",
    street: "Fotografi Jalanan",
    experimental: "Eksperimental",
    travel: "Perjalanan",
    people: "Orang",
    heroSubtitle: "Sumber visual internet.\nDiberdayakan oleh kreator di seluruh dunia.",
    illustrationsTitle: "Ilustrasi & Vektor",
    illustrationsSubtitle: "Ilustrasi dan vektor gratis.\nDibuat oleh desainer kelas dunia.",
    trending: "Tren:",
    topContributors: "Kontributor Terbaik Bulan Ini",
    topIllustrators: "Ilustrator Terbaik",
    images: "Gambar",
    vectors: "Vektor",
    staffPick: "Pilihan Staf",
    photoOfTheWeek: "Foto Minggu Ini",
    featuredVector: "Vektor Unggulan",
    curatedBy: "Dikurasi oleh Visuals",
    photoOfTheDay: "Foto Hari Ini",
    curated: "Terkurasi",
    spotlightTitle: "Kabut & Refleksi Lembah Yosemite",
    spotlightDesc: "Diambil saat matahari terbit di dataran tinggi Sierra. Pilihan komunitas minggu ini.",
    exploreNature: "Jelajahi Alam",
    featuredCollections: "Koleksi Unggulan",
    collectionsSub: "Visual pilihan yang disusun oleh pendongeng visual",
    creatorSpotlight: "Sorotan Kreator",
    joinArtists: "Bergabung dengan 350.000+ seniman visual",
    joinArtistsDesc: "Bagikan fotografi dan ilustrasi Anda kepada jutaan kreator di seluruh dunia.",
    freeVisuals: "Visual Gratis",
    downloads: "Unduhan",
    freeLicense: "Lisensi Gratis",
    trendingToday: "Visual Tren Hari Ini",
    trendingTodaySub: "Foto segar yang dikurasi untuk proyek kreatif Anda",
    viewAll: "Lihat semua foto",
    collectionsTitle: "Koleksi & Folder",
    collectionsDesc: "Atur, simpan, dan kelola inspirasi visual Anda ke dalam proyek khusus.",
    newCollection: "Koleksi Baru",
    downloadsTitle: "Riwayat Unduhan",
    downloadsDesc: "Semua aset resolusi tinggi yang diunduh siap untuk proyek Anda.",
    downloadAllZip: "Unduh Semua (ZIP)",
    licenseTitle: "Lisensi Gratis Komersial",
    unlimitedDownloads: "Unduhan Gratis Tanpa Batas",
    licenseDesc: "Semua aset dapat digunakan secara bebas untuk keperluan pribadi dan komersial.",
    redownload: "Unduh ulang",
    savedTitle: "Visual Tersimpan & Bookmark",
    savedDesc: "Galeri inspirasi pribadi Anda. Foto dan vektor yang Anda simpan untuk nanti.",
    savedVisuals: "Visual Tersimpan",
    login: "Masuk",
    welcomeBack: "Selamat datang kembali.",
    email: "Email",
    password: "Kata Sandi",
    forgotPassword: "Lupa kata sandi?",
    loginBtn: "Masuk",
    noAccount: "Belum punya akun?",
    joinBtn: "Daftar",
    selectLanguage: "Pilih bahasa Anda",
  },
  it: {
    searchPlaceholder: "Cerca foto e illustrazioni",
    featured: "In primo piano",
    newText: "Nuovo",
    fall: "Autunno",
    wallpapers: "Sfondi",
    renders: "Render 3D",
    nature: "Natura",
    textures: "Texture",
    film: "Pellicola",
    architecture: "Architettura",
    street: "Street Photography",
    experimental: "Sperimentale",
    travel: "Viaggi",
    people: "Persone",
    heroSubtitle: "La fonte visiva di internet.\nAlimentata da creatori di tutto il mondo.",
    illustrationsTitle: "Illustrazioni e Vettoriali",
    illustrationsSubtitle: "Illustrazioni e vettoriali gratuiti.\nCreati da designer internazionali.",
    trending: "Di tendenza:",
    topContributors: "Migliori Collaboratori del Mese",
    topIllustrators: "Migliori Illustratori",
    images: "Immagini",
    vectors: "Vettoriali",
    staffPick: "Scelta dello Staff",
    photoOfTheWeek: "Foto della Settimana",
    featuredVector: "Vettoriale in Primo Piano",
    curatedBy: "A cura di Visuals",
    photoOfTheDay: "Foto del Giorno",
    curated: "Curato",
    spotlightTitle: "Nebbia e riflesso nella Yosemite Valley",
    spotlightDesc: "Catturato all'alba nelle alte vette della Sierra. Scelta della community questa settimana.",
    exploreNature: "Esplora la Natura",
    featuredCollections: "Collezioni in Evidenza",
    collectionsSub: "Visual scelti a mano organizzati da storyteller visivi",
    creatorSpotlight: "Creatore in Primo Piano",
    joinArtists: "Unisciti a oltre 350.000 artisti visuali",
    joinArtistsDesc: "Condividi le tue fotografie e illustrazioni con milioni di creatori.",
    freeVisuals: "Visual Gratuiti",
    downloads: "Download",
    freeLicense: "Licenza Gratuita",
    trendingToday: "Visual di Tendenza Oggi",
    trendingTodaySub: "Nuove foto curate per i tuoi progetti creativi",
    viewAll: "Guarda tutte le foto",
    collectionsTitle: "Collezioni e Cartelle",
    collectionsDesc: "Organizza, salva e gestisci le tue ispirazioni in progetti personalizzati.",
    newCollection: "Nuova Collezione",
    downloadsTitle: "Cronologia Download",
    downloadsDesc: "Tutti i file ad alta risoluzione scaricati pronti per i tuoi progetti creativi.",
    downloadAllZip: "Scarica Tutto (ZIP)",
    licenseTitle: "Licenza Commerciale Gratuita",
    unlimitedDownloads: "Download Gratuiti Illimitati",
    licenseDesc: "Tutti i contenuti possono essere utilizzati liberamente per progetti personali e commerciali.",
    redownload: "Riscarica",
    savedTitle: "Visual Salvati e Segnalibri",
    savedDesc: "La tua bacheca personale. Foto e vettoriali salvati per dopo.",
    savedVisuals: "Visual Salvati",
    login: "Accedi",
    welcomeBack: "Bentornato.",
    email: "Email",
    password: "Password",
    forgotPassword: "Password dimenticata?",
    loginBtn: "Accedi",
    noAccount: "Non hai un account?",
    joinBtn: "Iscriviti",
    selectLanguage: "Seleziona la tua lingua",
  },
  ja: {
    searchPlaceholder: "写真やイラストを検索",
    featured: "おすすめ",
    newText: "新着",
    fall: "秋",
    wallpapers: "壁紙",
    renders: "3Dレンダリング",
    nature: "自然",
    textures: "テクスチャ",
    film: "フィルム",
    architecture: "建築",
    street: "ストリート写真",
    experimental: "実験的",
    travel: "旅行",
    people: "人物",
    heroSubtitle: "世界中のクリエイターが集まる\nビジュアルプラットフォーム。",
    illustrationsTitle: "イラスト & ベクター",
    illustrationsSubtitle: "世界中のデザイナーが作成した\n無料のイラストとベクター素材。",
    trending: "トレンド:",
    topContributors: "今月のトップ投稿者",
    topIllustrators: "トップイラストレーター",
    images: "画像",
    vectors: "ベクター",
    staffPick: "スタッフのおすすめ",
    photoOfTheWeek: "今週の写真",
    featuredVector: "注目のベクター",
    curatedBy: "Visualsによる厳選",
    photoOfTheDay: "今日の一枚",
    curated: "厳選",
    spotlightTitle: "ヨセミテ渓谷の朝霧と反射",
    spotlightDesc: "シエラネバダ山脈の日の出時に撮影。今週のコミュニティチョイス。",
    exploreNature: "自然を探索",
    featuredCollections: "注目のコレクション",
    collectionsSub: "ビジュアルストーリーテラーによって厳選された作品集",
    creatorSpotlight: "クリエイタースポットライト",
    joinArtists: "35万人以上のクリエイターに参加",
    joinArtistsDesc: "あなたの写真やイラストを世界中のクリエイターと共有しましょう。",
    freeVisuals: "無料ビジュアル",
    downloads: "ダウンロード",
    freeLicense: "無料ライセンス",
    trendingToday: "本日のトレンドビジュアル",
    trendingTodaySub: "クリエイティブプロジェクトに最適な最新の写真",
    viewAll: "すべての写真を見る",
    collectionsTitle: "コレクション & フォルダ",
    collectionsDesc: "インスピレーションを受けた作品を整理してカスタムプロジェクトに保存。",
    newCollection: "新規コレクション",
    downloadsTitle: "ダウンロード履歴",
    downloadsDesc: "ダウンロードした高解像度画像とベクター素材の履歴。",
    downloadAllZip: "すべてダウンロード (ZIP)",
    licenseTitle: "商用利用無料ライセンス",
    unlimitedDownloads: "無制限の無料ダウンロード",
    licenseDesc: "すべての素材は個人および商用プロジェクトでクレジット表記なしで自由に使用できます。",
    redownload: "再ダウンロード",
    savedTitle: "保存したビジュアル & ブックマーク",
    savedDesc: "あなた専用のインスピレーションギャラリー。後で見るために保存した作品。",
    savedVisuals: "保存済みビジュアル",
    login: "ログイン",
    welcomeBack: "おかえりなさい。",
    email: "メールアドレス",
    password: "パスワード",
    forgotPassword: "パスワードをお忘れですか？",
    loginBtn: "ログイン",
    noAccount: "アカウントをお持ちでないですか？",
    joinBtn: "登録",
    selectLanguage: "言語を選択",
  },
  ko: {
    searchPlaceholder: "사진 및 일러스트 검색",
    featured: "추천",
    newText: "신규",
    fall: "가을",
    wallpapers: "배경화면",
    renders: "3D 렌더링",
    nature: "자연",
    textures: "텍스처",
    film: "필름",
    architecture: "건축",
    street: "거리 사진",
    experimental: "실험적",
    travel: "여행",
    people: "인물",
    heroSubtitle: "전 세계 크리에이터가 만들어가는\n인터넷 비주얼의 원천.",
    illustrationsTitle: "일러스트 & 벡터",
    illustrationsSubtitle: "세계적인 디자이너들이 제작한\n무료 일러스트와 벡터 그래픽.",
    trending: "인기 검색어:",
    topContributors: "이달의 최고 기여자",
    topIllustrators: "최고의 일러스트레이터",
    images: "이미지",
    vectors: "벡터",
    staffPick: "에디터 추천",
    photoOfTheWeek: "이번 주의 사진",
    featuredVector: "추천 벡터",
    curatedBy: "Visuals 큐레이션",
    photoOfTheDay: "오늘의 사진",
    curated: "큐레이션",
    spotlightTitle: "요세미티 계곡의 아침 안개와 반영",
    spotlightDesc: "하이 시에라의 일출 순간을 포착. 이번 주 커뮤니티의 선택.",
    exploreNature: "자연 탐색하기",
    featuredCollections: "추천 컬렉션",
    collectionsSub: "비주얼 스토리텔러들이 엄선한 작품 컬렉션",
    creatorSpotlight: "크리에이터 스포트라이트",
    joinArtists: "35만 명 이상의 비주얼 아티스트와 함께하세요",
    joinArtistsDesc: "사진과 일러스트를 전 세계 수백만 명의 크리에이터와 공유하세요.",
    freeVisuals: "무료 비주얼",
    downloads: "다운로드",
    freeLicense: "무료 라이선스",
    trendingToday: "오늘의 인기 비주얼",
    trendingTodaySub: "창작 프로젝트를 위해 엄선된 최신 고화질 사진",
    viewAll: "모든 사진 보기",
    collectionsTitle: "컬렉션 & 폴더",
    collectionsDesc: "영감을 주는 비주얼을 나만의 맞춤 프로젝트로 정리하고 보관하세요.",
    newCollection: "새 컬렉션",
    downloadsTitle: "다운로드 기록",
    downloadsDesc: "다운로드한 모든 고해상도 이미지와 벡터 그래픽 파일 목록입니다.",
    downloadAllZip: "전체 다운로드 (ZIP)",
    licenseTitle: "상업용 무료 라이선스",
    unlimitedDownloads: "무제한 무료 다운로드",
    licenseDesc: "모든 에셋은 출처 표기 없이 개인 및 상업적 프로젝트에 자유롭게 사용 가능합니다.",
    redownload: "다시 다운로드",
    savedTitle: "저장된 비주얼 & 북마크",
    savedDesc: "나만의 시각적 무드보드. 나중에 보기 위해 저장한 작품들입니다.",
    savedVisuals: "저장된 비주얼",
    login: "로그인",
    welcomeBack: "다시 오신 것을 환영합니다.",
    email: "이메일",
    password: "비밀번호",
    forgotPassword: "비밀번호를 잊으셨나요?",
    loginBtn: "로그인",
    noAccount: "계정이 없으신가요?",
    joinBtn: "가입하기",
    selectLanguage: "언어 선택",
  },
  pt: {
    searchPlaceholder: "Pesquisar fotos e ilustrações",
    featured: "Destaques",
    newText: "Novo",
    fall: "Outono",
    wallpapers: "Papéis de parede",
    renders: "Renderizações 3D",
    nature: "Natureza",
    textures: "Texturas",
    film: "Filme",
    architecture: "Arquitetura",
    street: "Fotografia de rua",
    experimental: "Experimental",
    travel: "Viagens",
    people: "Pessoas",
    heroSubtitle: "A fonte visual da internet.\nMovida por criadores em todo o mundo.",
    illustrationsTitle: "Ilustrações & Vetores",
    illustrationsSubtitle: "Ilustrações e vetores gratuitos.\nCriados por designers de nível mundial.",
    trending: "Tendências:",
    topContributors: "Principais Colaboradores do Mês",
    topIllustrators: "Melhores Ilustradores",
    images: "Imagens",
    vectors: "Vetores",
    staffPick: "Escolha da Equipe",
    photoOfTheWeek: "Foto da Semana",
    featuredVector: "Vetor em Destaque",
    curatedBy: "Com curadoria de Visuals",
    photoOfTheDay: "Foto do Dia",
    curated: "Curadoria",
    spotlightTitle: "Névoa e reflexo no Vale de Yosemite",
    spotlightDesc: "Capturado durante o nascer do sol nas montanhas. Escolha da comunidade nesta semana.",
    exploreNature: "Explorar Natureza",
    featuredCollections: "Coleções em Destaque",
    collectionsSub: "Visuais selecionados organizados por contadores de histórias",
    creatorSpotlight: "Destaque do Criador",
    joinArtists: "Junte-se a mais de 350.000 artistas visuais",
    joinArtistsDesc: "Compartilhe suas fotos e ilustrações com milhões de criadores em todo o mundo.",
    freeVisuals: "Visuais Gratuitos",
    downloads: "Downloads",
    freeLicense: "Licença Gratuita",
    trendingToday: "Visuais em Alta Hoje",
    trendingTodaySub: "Fotos recentes selecionadas para seus projetos criativos",
    viewAll: "Ver todas as fotos",
    collectionsTitle: "Coleções & Pastas",
    collectionsDesc: "Organize, salve e gerencie suas inspirações visuais em projetos personalizados.",
    newCollection: "Nova Coleção",
    downloadsTitle: "Histórico de Downloads",
    downloadsDesc: "Todas as imagens e vetores de alta resolução baixados para seus projetos.",
    downloadAllZip: "Baixar Tudo (ZIP)",
    licenseTitle: "Licença Comercial Gratuita",
    unlimitedDownloads: "Downloads Gratuitos Ilimitados",
    licenseDesc: "Todos os ativos podem ser usados livremente para projetos pessoais e comerciais sem atribuição.",
    redownload: "Baixar novamente",
    savedTitle: "Visuais Salvos & Favoritos",
    savedDesc: "Sua galeria de inspiração pessoal. Fotos e vetores salvos para ver mais tarde.",
    savedVisuals: "Visuais Salvos",
    login: "Entrar",
    welcomeBack: "Bem-vindo de volta.",
    email: "E-mail",
    password: "Senha",
    forgotPassword: "Esqueceu sua senha?",
    loginBtn: "Entrar",
    noAccount: "Não tem uma conta?",
    joinBtn: "Cadastre-se",
    selectLanguage: "Selecione seu idioma",
  },
};

const App = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  const [activeTab, setActiveTab] = useState("featured");
  const [language, setLanguage] = useState("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState<"all" | "photo" | "vector">("all");
  const t = translations[language] || translations.en;
  const searchInfo = searchI18n[language] || searchI18n.en;
  const searchResults = searchVisuals(searchQuery, searchFilter);
  const totalMatchingAll = searchVisuals(searchQuery, "all");
  const photoCount = totalMatchingAll.filter((x) => x.type === "photo").length;
  const vectorCount = totalMatchingAll.filter((x) => x.type === "vector").length;

  const suggestedTags = [
    "Nature",
    "Wallpapers",
    "3D Renders",
    "Architecture",
    "Travel",
    "Animals",
    "Vectors",
    "Street",
    "Textures",
    "People",
    "Fall",
  ];

  const renderSearchResults = () => (
    <div className="space-y-6 mt-6 max-w-6xl">
      {/* Search Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <button
              onClick={() => setSearchQuery("")}
              className="hover:text-black font-semibold underline cursor-pointer"
            >
              ← {searchInfo.clear}
            </button>
            <span>•</span>
            <span className="font-medium text-gray-600">{searchInfo.searchResults}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            "{searchQuery}"
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {searchResults.length} {searchInfo.foundVisuals}
          </p>
        </div>

        {/* Filter Pills: All / Photos / Vectors */}
        <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-full self-start sm:self-auto">
          <button
            onClick={() => setSearchFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
              searchFilter === "all" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
            }`}
          >
            {searchInfo.all} ({totalMatchingAll.length})
          </button>
          <button
            onClick={() => setSearchFilter("photo")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
              searchFilter === "photo" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
            }`}
          >
            {searchInfo.photos} ({photoCount})
          </button>
          <button
            onClick={() => setSearchFilter("vector")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
              searchFilter === "vector" ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
            }`}
          >
            {searchInfo.vectors} ({vectorCount})
          </button>
        </div>
      </div>

      {/* Suggested Tags */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="text-gray-400 font-medium whitespace-nowrap">{searchInfo.suggestions}</span>
        {suggestedTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSearchQuery(tag)}
            className={`px-3 py-1 rounded-full border transition cursor-pointer whitespace-nowrap ${
              searchQuery.toLowerCase() === tag.toLowerCase()
                ? "bg-black text-white border-black font-semibold"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Results Grid or Empty State */}
      {searchResults.length > 0 ? (
        <div className="columns-3 gap-4 mt-6">
          {searchResults.map((item) => (
            <ImageCard key={item.id} src={item.src} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-gray-50 rounded-3xl border border-gray-200 mt-6">
          <div className="w-14 h-14 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            <Search size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-800">
            {searchInfo.noResults} "{searchQuery}"
          </h3>
          <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
            {searchInfo.tryDifferent}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 justify-center max-w-lg mx-auto">
            {["Nature", "Wallpapers", "3D Renders", "Architecture", "Travel", "Animals", "Vectors", "Textures"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-1.5 bg-white border border-gray-300 hover:border-black rounded-full text-xs font-medium text-gray-700 transition cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-6 px-6 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition cursor-pointer"
          >
            {searchInfo.clear}
          </button>
        </div>
      )}
    </div>
  );

  const imageList = [
    "https://images.unsplash.com/photo-1779896411979-35844de55d13?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1789234847880-77edf6027a44?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1789283170426-1d1305571e26?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1785665615482-1cde2f5501ab?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1785677535400-725b852ff2e1?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1784122279200-e528d1f78142?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1773332585687-85beb4da71ab?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1789167871825-dbfb0745c067?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1789320639631-6c85daad9b46?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1781577247221-65f5a7245a38?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1772927322083-f69800bec312?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1788201253619-10d2c2765821?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1786014767804-cdb91136a324?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1789353287713-05b85ac6a3c3?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1779896412420-d37179cdffb9?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1774021804386-daa60d7a6043?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1754919768963-593c7ed41bb3?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1753983551670-da8e9979654f?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1789026720705-badd35b03595?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1789020583608-881a80c3257e?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1788961138963-2874477b72cd?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1773332598501-f8612761781a?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1788713170354-7ae96795ec11?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1789349050765-5f6227d041e2?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1756879545781-7b8265e2be45?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1788998765211-acd56d4ce4fa?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1787765977827-44dcefaefdaf?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1779896412277-c4fd15c7a89c?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1789348982785-9a5e3931d8d2?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1701212775991-84be75728f12?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1786476432042-e39ccac289f1?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1783476992464-cc7f65c4a71f?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1788328916107-4d0e4bf134c8?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1773332611516-93826171cef2?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1784822756561-effe1bc35144?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1788296817269-8df0458ab799?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_photo-1777050572108-7a54edd71e00?w=600&auto=format&fit=crop&q=60"
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
  const pencilList = [
    "https://plus.unsplash.com/premium_vector-1788539735429-ee06b07e41be?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1786978508333-c34b70e67d3c?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1785935813452-58dda750a155?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1787927565537-1d2dba71bb52?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788838128143-f7732aa4492b?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1787667962871-08f824c1482c?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788450279365-92e538a5ce20?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1788008722451-9d435072ab37?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1788041125904-878193b23d3a?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1787701419851-475148d2a1aa?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788445597327-5e8cc787abd4?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1786544532495-429605da6c3c?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788350339715-c2d1e1e7deda?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788807364660-b6bcdd3fbcd2?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1787886927631-9a55c632177a?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1786646375026-f1f3a95242a2?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788689770481-2484b517e364?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1787785607753-dad7b9a05489?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788344265539-ab3699771d21?w=1000&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1788178181411-e34dbf62a3be?w=1000&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788807364643-07267cb31a84?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1788151712293-6b90f3230686?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1787926825912-3c227828f57e?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1787342262905-3d333b91052d?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788552817594-0c0adf7d0aae?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788560465235-b9bd6ffaba9e?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788252397293-9e17530e2428?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788521593906-fdc4a04b88ce?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1788668641589-4616b4921b6b?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1788830857190-bddec5584892?w=600&auto=format&fit=crop&q=60",
    "https://plus.unsplash.com/premium_vector-1787691788414-22b376443691?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/vector-1787342975759-e382e07f6059?w=600&auto=format&fit=crop&q=60",
  ];

  const categoryImages = {
    stock: [
      "https://images.unsplash.com/photo-1612899326681-66508905b4ce?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1584268212459-cdcf2008b87a?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1584301618889-6b85178c61d4?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1584802547882-3499a2bb917a?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1584722721847-e97a39c902e0?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    ],

    nature: [
      "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1507980062492-714282f31ee0?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1532010940201-c31e6beacd39?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1493219686142-5a8641badc78?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    ],

    travel: [
      "https://images.unsplash.com/photo-1543325768-c2650cc0d8cf?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1524242109383-e349707a106b?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    ],

    animals: [
      "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://plus.unsplash.com/premium_photo-1694198818362-0fa024ded2b2?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1470107355970-2ace9f20ab15?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1450052590821-8bf91254a353?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1606024496931-5376c8ffbe88?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1522628037257-f925ec1e03df?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    ],

    colors: [
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1520176501380-9a174bf7c783?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1548504778-b14db6c34b04?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1445197138520-6099f1c07aa0?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      "https://images.unsplash.com/photo-1525663018617-37753d540108?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    ],
  };

  const collectionsData = [
    {
      title: "Minimalist Architecture",
      count: 24,
      isPrivate: false,
      cover: "https://images.unsplash.com/photo-1612899326681-66508905b4ce?w=600&auto=format&fit=crop&q=60",
      thumbnails: [
        "https://images.unsplash.com/photo-1584268212459-cdcf2008b87a?w=300&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1584301618889-6b85178c61d4?w=300&auto=format&fit=crop&q=60",
      ],
      updated: "2 days ago",
    },
    {
      title: "Wilderness & Deep Woods",
      count: 42,
      isPrivate: false,
      cover: "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?w=600&auto=format&fit=crop&q=60",
      thumbnails: [
        "https://images.unsplash.com/photo-1507980062492-714282f31ee0?w=300&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1532010940201-c31e6beacd39?w=300&auto=format&fit=crop&q=60",
      ],
      updated: "Yesterday",
    },
    {
      title: "Cinematic Street Moods",
      count: 18,
      isPrivate: true,
      cover: "https://images.unsplash.com/photo-1543325768-c2650cc0d8cf?w=600&auto=format&fit=crop&q=60",
      thumbnails: [
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1527333656061-ca7adf608ae1?w=300&auto=format&fit=crop&q=60",
      ],
      updated: "3 days ago",
    },
    {
      title: "Vibrant Color Gradients",
      count: 31,
      isPrivate: false,
      cover: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=60",
      thumbnails: [
        "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=300&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1520176501380-9a174bf7c783?w=300&auto=format&fit=crop&q=60",
      ],
      updated: "1 week ago",
    },
    {
      title: "Fauna & Wildlife",
      count: 27,
      isPrivate: false,
      cover: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?w=600&auto=format&fit=crop&q=60",
      thumbnails: [
        "https://plus.unsplash.com/premium_photo-1694198818362-0fa024ded2b2?w=300&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1470107355970-2ace9f20ab15?w=300&auto=format&fit=crop&q=60",
      ],
      updated: "2 weeks ago",
    },
    {
      title: "Brand Moodboard 2026",
      count: 15,
      isPrivate: true,
      cover: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=600&auto=format&fit=crop&q=60",
      thumbnails: [
        "https://images.unsplash.com/photo-1584802547882-3499a2bb917a?w=300&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1584722721847-e97a39c902e0?w=300&auto=format&fit=crop&q=60",
      ],
      updated: "Just now",
    },
  ];

  const downloadsData = [
    {
      title: "Alpine Mist Sunrise",
      creator: "Nathan Anderson",
      res: "5472 × 3648",
      size: "4.8 MB",
      format: "JPG",
      date: "Today, 10:15 AM",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Golden Hour Ocean Horizon",
      creator: "Sean Oulashin",
      res: "6000 × 4000",
      size: "6.2 MB",
      format: "JPG",
      date: "Yesterday",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Modern Architectural Curves",
      creator: "Simone Hutsch",
      res: "4000 × 5000",
      size: "3.9 MB",
      format: "JPG",
      date: "Oct 5, 2026",
      src: "https://images.unsplash.com/photo-1612899326681-66508905b4ce?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Abstract Vector Floral",
      creator: "Elena Mozhvilo",
      res: "4000 × 4000",
      size: "1.8 MB",
      format: "SVG",
      date: "Oct 3, 2026",
      src: "https://images.unsplash.com/vector-1786978508333-c34b70e67d3c?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Misty Pine Forest",
      creator: "Luca Bravo",
      res: "5184 × 3456",
      size: "5.4 MB",
      format: "JPG",
      date: "Oct 2, 2026",
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Geometric Color Harmony",
      creator: "Pawel Czerwinski",
      res: "3840 × 2160",
      size: "3.1 MB",
      format: "PNG",
      date: "Sep 28, 2026",
      src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=60",
    },
  ];

  const bookmarkedImages = [
    "https://images.unsplash.com/photo-1789283170426-1d1305571e26?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1785665615482-1cde2f5501ab?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1502809737437-1d85c70dd2ca?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1543325768-c2650cc0d8cf?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1773332585687-85beb4da71ab?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1789167871825-dbfb0745c067?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1779896411979-35844de55d13?w=600&auto=format&fit=crop&q=60",
  ];

  const iconStyle = "relative p-3 rounded-lg hover:bg-gray-200 cursor-pointer after:absolute after:right-0 after:top-1 after:h-10 after:w-1  after:rounded-full after:scale-y-0 hover:after:scale-y-100 after:transition-transform";
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 flex flex-col w-20 h-screen items-center shadow-md bg-white z-50">
        <div className="flex flex-col gap-3">
          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("featured");
              setSearchQuery("");
            }}
          >
            <Home size={28} />
          </div>

          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("image");
              setActiveTab("featured");
              setSearchQuery("");
            }}
          >
            <Image size={28} />
          </div>

          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("pencil");
              setActiveTab("featured");
              setSearchQuery("");
            }}
          >
            <Pencil size={28} />
          </div>
        </div>
        <hr className="w-10 my-4 border-gray-300" />
        <div className="flex flex-col gap-3">
          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("compass");
              setActiveTab("featured");
              setSearchQuery("");
            }}
          >
            <CompassIcon size={28} />
          </div>
          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("folder");
              setActiveTab("featured");
              setSearchQuery("");
            }}
          >
            <Folder size={28} />
          </div>
          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("download");
              setActiveTab("featured");
              setSearchQuery("");
            }}
          >
            <Download size={28} />
          </div>
        </div>
        <hr className="w-10 my-4 border-gray-300" />
        <div
          className={iconStyle}
          onClick={() => {
            setActiveIcon("bookmark");
            setActiveTab("featured");
            setSearchQuery("");
          }}
        >
          <Bookmark size={28} />
        </div>
        <div className="flex flex-col gap-3 mt-20">
          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("login");
              setActiveTab("featured");
              setSearchQuery("");
            }}
          >
            <User size={28} />
          </div>
          <div
            className={iconStyle}
            onClick={() =>
              setActiveIcon(activeIcon === "languages" ? "" : "languages")
            }
          >
            <Languages size={28} />
          </div>
          <div
            className={iconStyle}
            onClick={() =>
              setActiveIcon(activeIcon === "menu" ? "" : "menu")
            }
          >
            <Menu size={28} />
          </div>
        </div>
      </div>
      <div className="flex-1 ml-20 p-6 overflow-y-auto">
        <div className="relative w-full max-w-5xl">
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 "
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setSearchQuery("");
            }}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-full bg-gray-100 border-0 py-3 pl-10 pr-12 outline-none focus:outline-none focus:ring-0"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black p-1 cursor-pointer transition"
              title={searchInfo.clear}
            >
              <X size={18} />
            </button>
          ) : (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-600 cursor-pointer">
              <ScanSearch size={18} />
            </div>
          )}
        </div>
        <div className="flex gap-3 overflow-x-auto whitespace-nowrap mt-4 items-start">
          <button
            onClick={() => {
              setActiveIcon("image");
              setActiveTab("featured");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform ${activeTab === "featured"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.featured}
          </button>
          <div
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("fall");
            }}
            className={`relative flex flex-col cursor-pointer px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform
    ${activeTab === "fall"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            <span className="text-sm font-medium">{t.newText}</span>
            <span className="text-xs text-gray-500">{t.fall}</span>
          </div>
          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("wallpapers");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform
    ${activeTab === "wallpapers"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.wallpapers}
          </button>

          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("render");
            }}
            className={`relative px-2 py-2 rounded-lg transition after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black after:origin-left after:transition-transform ${activeTab === "render"
              ? "after:scale-x-100"
              : "after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.renders}
          </button>


          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("nature");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform ${activeTab === "nature"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.nature}
          </button>
          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("textures");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform ${activeTab === "textures"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.textures}
          </button>
          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("film");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform ${activeTab === "film"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.film}
          </button>
          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("architecture");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform ${activeTab === "architecture"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.architecture}
          </button>
          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("street");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform ${activeTab === "street"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.street}
          </button>
          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("experimental");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform ${activeTab === "experimental"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.experimental}
          </button>
          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("travel");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform ${activeTab === "travel"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.travel}
          </button>
          <button
            onClick={() => {
              setActiveIcon("home");
              setActiveTab("people");
            }}
            className={`relative px-2 py-2 rounded-lg transition
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black
    after:origin-left after:transition-transform ${activeTab === "people"
                ? "after:scale-x-100"
                : "hover:bg-gray-200 after:scale-x-0 hover:after:scale-x-100"
              }`}
          >
            {t.people}
          </button>
        </div>
        <hr className="w-full my-6 border-gray-300 " />


        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "featured" && (

            <div className="px-6 mt-6">
              <div className="flex justify-between items-start gap-8">
                {/* Left Side Content */}
                <div className={`flex-1 ${(activeIcon === "image" || activeIcon === "pencil") ? "pt-12" : "pt-2"}`}>
                  <div className="text-4xl font-bold">
                    {activeIcon === "pencil" ? t.illustrationsTitle : "Ramprasad"}
                  </div>
                  <pre className="font-sans text-lg text-gray-700 mt-2">
                    {activeIcon === "pencil"
                      ? t.illustrationsSubtitle
                      : t.heroSubtitle}
                  </pre>

                  <div className="relative w-full max-w-xl mt-6 mb-4">
                    <Search
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <input
                      type="text"
                      placeholder={t.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") setSearchQuery("");
                      }}
                      className="w-full rounded-full bg-gray-100 py-3 pl-11 pr-12 outline-none"
                    />
                    {searchQuery ? (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black p-1 cursor-pointer transition"
                        title={searchInfo.clear}
                      >
                        <X size={18} />
                      </button>
                    ) : (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-600 cursor-pointer">
                        <ScanSearch size={18} />
                      </div>
                    )}
                  </div>

                  {activeIcon === "home" && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
                      <span className="font-medium text-gray-700 flex items-center gap-1">
                        <TrendingUp size={16} /> {t.trending}
                      </span>
                      {[
                        { label: t.nature, search: "Nature" },
                        { label: t.wallpapers, search: "Wallpapers" },
                        { label: t.travel, search: "Travel" },
                        { label: t.renders, search: "3D Renders" },
                        { label: t.architecture, search: "Architecture" },
                        { label: t.street, search: "Street" },
                      ].map((item) => (
                        <button
                          key={item.search}
                          onClick={() => setSearchQuery(item.search)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-xs font-medium transition cursor-pointer"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>


                <div className="flex gap-4 shrink-0">

                  <div className="w-64 h-80 rounded-2xl border p-5 bg-white shadow-sm flex flex-col justify-between">
                    <div>
                      <h2 className="text-sm font-semibold mb-4">
                        {activeIcon === "pencil" ? t.topIllustrators : t.topContributors}
                      </h2>
                      <div className="space-y-3">
                        {topContributors.map((user, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="font-medium text-sm leading-tight">{user.name}</h3>
                              <p className="text-gray-500 text-xs">
                                {user.photos} {activeIcon === "pencil" ? t.vectors : t.images}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-sm relative group">
                    <img
                      src={
                        activeIcon === "pencil"
                          ? "https://images.unsplash.com/vector-1786978508333-c34b70e67d3c?w=500"
                          : activeIcon === "image"
                            ? "https://images.unsplash.com/photo-1789283170426-1d1305571e26?w=500"
                            : "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500"
                      }
                      alt="Featured visual"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-xs font-semibold text-white/90">
                        {activeIcon === "pencil"
                          ? t.featuredVector
                          : activeIcon === "image"
                            ? t.photoOfTheWeek
                            : t.staffPick}
                      </span>
                      <p className="text-xs text-white/70">{t.curatedBy}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        {activeIcon === "home" && activeTab === "featured" && (
          searchQuery.trim() !== "" ? renderSearchResults() : (
          <div className="space-y-12 mt-6 max-w-6xl">
            {/* Spotlight Banner / Photo of the Day */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-80 group">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80"
                alt="Spotlight"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/30">
                    <Sparkles size={14} className="text-yellow-300" /> {t.photoOfTheDay}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/80 backdrop-blur-md text-white">
                    <Flame size={14} /> {t.curated}
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">{t.spotlightTitle}</h2>
                <p className="text-sm text-gray-200 mt-1 max-w-xl">
                  {t.spotlightDesc}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <button
                    onClick={() => setActiveTab("nature")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition shadow cursor-pointer text-sm"
                  >
                    {t.exploreNature} <ArrowRight size={16} />
                  </button>
                  <span className="text-xs text-gray-300">Photo by Ramprasad Visuals • 84.5k Views</span>
                </div>
              </div>
            </div>

            {/* Curated Collections Showcase */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">{t.featuredCollections}</h3>
                  <p className="text-sm text-gray-500">{t.collectionsSub}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { title: "Nature & Wilderness", count: "12.4k visuals", img: categoryImages.nature[0], tab: "nature" },
                  { title: "World Wanderlust", count: "9.8k visuals", img: categoryImages.travel[0], tab: "travel" },
                  { title: "Wildlife & Fauna", count: "15.1k visuals", img: categoryImages.animals[0], tab: "nature" },
                  { title: "Color Harmonies", count: "7.6k visuals", img: categoryImages.colors[0], tab: "textures" },
                  { title: "Studio & Stock", count: "21.3k visuals", img: categoryImages.stock[0], tab: "wallpapers" },
                ].map((col, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(col.tab)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-4/5 shadow-sm hover:shadow-md transition-all"
                  >
                    <img
                      src={col.img}
                      alt={col.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                      <h4 className="font-bold text-sm leading-tight group-hover:underline">{col.title}</h4>
                      <p className="text-xs text-gray-300 mt-0.5">{col.count}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Creators Spotlight Banner */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">{t.creatorSpotlight}</span>
                <h3 className="text-2xl font-bold">{t.joinArtists}</h3>
                <p className="text-gray-300 text-sm max-w-lg">
                  {t.joinArtistsDesc}
                </p>
              </div>
              <div className="flex gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                  <div className="text-2xl font-bold text-white">5.2M+</div>
                  <div className="text-xs text-gray-300">{t.freeVisuals}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                  <div className="text-2xl font-bold text-white">120M+</div>
                  <div className="text-xs text-gray-300">{t.downloads}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-gray-300">{t.freeLicense}</div>
                </div>
              </div>
            </div>

            {/* Daily Visual Inspiration Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">{t.trendingToday}</h3>
                  <p className="text-sm text-gray-500">{t.trendingTodaySub}</p>
                </div>
                <button
                  onClick={() => setActiveIcon("image")}
                  className="text-sm font-semibold text-gray-700 hover:text-black flex items-center gap-1 cursor-pointer"
                >
                  {t.viewAll} <ArrowRight size={16} />
                </button>
              </div>

              <div className="columns-3 gap-4">
                {[
                  ...categoryImages.stock.slice(1, 4),
                  ...categoryImages.nature.slice(1, 4),
                  ...categoryImages.travel.slice(1, 4),
                  ...categoryImages.animals.slice(1, 4),
                  ...categoryImages.colors.slice(1, 4),
                ].map((img, index) => (
                  <ImageCard key={index} src={img} />
                ))}
              </div>
            </div>
          </div>
          )
        )}


        {searchQuery.trim() !== "" &&
          activeTab !== "featured" &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil" ||
            activeIcon === "compass" ||
            activeIcon === "folder" ||
            activeIcon === "download" ||
            activeIcon === "bookmark") &&
          renderSearchResults()}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "fall" && <NewFall />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "wallpapers" && <Wallpapers />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "render" && <ThreeDRender />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "nature" && <Nature />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "textures" && <Textures />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "film" && <Film />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "architecture" && <Architecture />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "street" && <StreetPhotography />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "experimental" && <Experimental />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "travel" && <Travel />}

        {!searchQuery.trim() &&
          (activeIcon === "home" ||
            activeIcon === "image" ||
            activeIcon === "pencil") &&
          activeTab === "people" && <People />}

        {!searchQuery.trim() && activeIcon === "compass" && <Compass />}

        {activeIcon === "image" && activeTab === "featured" && (
          searchQuery.trim() !== "" ? renderSearchResults() : (
            <div className="columns-3 gap-4 mt-6">
              {imageList.map((img, index) => (
                <ImageCard key={index} src={img} />
              ))}
            </div>
          )
        )}
        {activeIcon === "pencil" && activeTab === "featured" && (
          searchQuery.trim() !== "" ? renderSearchResults() : (
            <div className="columns-3 gap-4 mt-6">
              {pencilList.map((img, index) => (
                <ImageCard key={index} src={img} />
              ))}
            </div>
          )
        )}

        {!searchQuery.trim() && activeIcon === "folder" && (
          <div className="px-6 py-6 space-y-8 max-w-6xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-2xl text-black">
                  <Folder size={26} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{t.collectionsTitle}</h1>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {t.collectionsDesc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition cursor-pointer shadow-sm">
                  <Plus size={16} /> {t.newCollection}
                </button>
              </div>
            </div>

            {/* Folder Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionsData.map((col, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer"
                >
                  {/* Photo Collage Thumbnail */}
                  <div className="h-48 grid grid-cols-3 gap-1 p-1 bg-gray-100">
                    <div className="col-span-2 h-full overflow-hidden rounded-l-xl">
                      <img
                        src={col.cover}
                        alt={col.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1 h-full">
                      <div className="h-1/2 overflow-hidden rounded-tr-xl">
                        <img
                          src={col.thumbnails[0]}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="h-1/2 overflow-hidden rounded-br-xl">
                        <img
                          src={col.thumbnails[1]}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:underline">{col.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{col.count} visuals • Updated {col.updated}</p>
                      </div>
                      <span className="flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                        {col.isPrivate ? <Lock size={12} /> : <Globe size={12} />}
                        {col.isPrivate ? "Private" : "Public"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!searchQuery.trim() && activeIcon === "download" && (
          <div className="px-6 py-6 space-y-8 max-w-6xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-2xl text-black">
                  <Download size={26} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{t.downloadsTitle}</h1>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {t.downloadsDesc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition cursor-pointer shadow-sm">
                  <Download size={16} /> {t.downloadAllZip}
                </button>
              </div>
            </div>

            {/* License & Stats Banner */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">{t.licenseTitle}</span>
                <h3 className="text-xl font-bold mt-1">{t.unlimitedDownloads}</h3>
                <p className="text-gray-300 text-sm mt-0.5">{t.licenseDesc}</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-xl font-bold">24</div>
                  <div className="text-xs text-gray-300">{t.downloads}</div>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-2 text-center">
                  <div className="text-xl font-bold">100%</div>
                  <div className="text-xs text-gray-300">{t.freeLicense}</div>
                </div>
              </div>
            </div>

            {/* Downloads List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloadsData.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium">
                      {item.format}
                    </span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-900 leading-tight">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">By {item.creator} • {item.date}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-600">
                      <span>{item.res} • {item.size}</span>
                      <a
                        href={item.src}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-black hover:underline cursor-pointer"
                      >
                        <Download size={14} /> {t.redownload}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!searchQuery.trim() && activeIcon === "bookmark" && (
          <div className="px-6 py-6 space-y-8 max-w-6xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-100 rounded-2xl text-black">
                  <Bookmark size={26} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">{t.savedTitle}</h1>
                  <p className="text-sm text-gray-500 mt-0.5">
                    {t.savedDesc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-700">
                  {bookmarkedImages.length} {t.savedVisuals}
                </span>
              </div>
            </div>

            {/* Bookmarks Gallery */}
            <div className="columns-3 gap-4">
              {bookmarkedImages.map((img, index) => (
                <ImageCard key={index} src={img} />
              ))}
            </div>
          </div>
        )}
        {activeIcon === "login" && (
          <div className="min-h-[80vh] flex items-center justify-center">
            <div className="w-full max-w-md  p-8 ">
              <h1 className="text-3xl font-bold text-center">{t.login}</h1>
              <p className="text-gray-500 mt-1 text-center">{t.welcomeBack}</p>

              <form className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.email}</label>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium">{t.password}</label>

                    <button
                      type="button"
                      className="text-sm underline text-gray-600 hover:text-black"
                    >
                      {t.forgotPassword}
                    </button>
                  </div>

                  <input
                    type="password"
                    placeholder=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800"
                >
                  {t.loginBtn}
                </button>
              </form>

              <div className="text-center text-sm text-gray-600 mt-6">
                {t.noAccount}{" "}
                <span className="font-semibold cursor-pointer hover:underline">
                  {t.joinBtn}
                </span>
              </div>
            </div>
          </div>
        )}

        {activeIcon === "languages" && (
          <div className="fixed left-24 top-[340px] z-50 w-[290px] rounded-2xl border bg-white p-5 shadow-2xl">
            <h2 className="text-lg font-bold mb-4">{t.selectLanguage}</h2>

            <ul className="space-y-1.5 text-sm text-gray-700">
              {[
                { code: "en", label: "English" },
                { code: "es", label: "Español" },
                { code: "de", label: "Deutsch" },
                { code: "fr", label: "Français" },
                { code: "id", label: "Bahasa Indonesia" },
                { code: "it", label: "Italiano" },
                { code: "ja", label: "日本語" },
                { code: "ko", label: "한국어" },
                { code: "pt", label: "Português (Brasil)" },
              ].map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setActiveIcon("");
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition ${
                    language === lang.code
                      ? "bg-black text-white font-medium"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span>{lang.label}</span>
                  {language === lang.code && <Check size={16} />}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeIcon === "menu" && (
          <div className="fixed left-24 top-[300px] z-50 w-[720px] rounded-2xl border bg-white p-8 shadow-2xl">
            <div className="grid grid-cols-3 gap-8">

              <div>
                <h2 className="mb-3 font-bold">Company</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>About</li>
                  <li>Advertise</li>
                  <li>History</li>
                  <li>Join the team</li>
                  <li>Blog</li>
                  <li>Press</li>
                  <li>Contact us</li>
                  <li>Help Center</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 font-bold">Product</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Developers / API</li>
                  <li>Unsplash Dataset</li>
                  <li>Unsplash for iOS</li>
                  <li>Apps & Plugins</li>
                  <li>Unsplash Studio</li>
                  <li>Product Placement Ads</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 font-bold">Community</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Become a Contributor</li>
                  <li>Collections</li>
                  <li>Trends</li>
                  <li>Unsplash Awards</li>
                  <li>Stats</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>

  );
};

export default App