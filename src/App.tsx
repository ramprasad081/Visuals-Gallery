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

import { Home, Image, Pencil, Compass as CompassIcon, Folder, Download, Bookmark, User, Languages, Menu, Search, ScanSearch, } from "lucide-react";
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

const App = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  const [activeTab, setActiveTab] = useState("featured");
  const [language, setLanguage] = useState("en");

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
            }}
          >
            <Home size={28} />
          </div>

          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("image");
              setActiveTab("featured");
            }}
          >
            <Image size={28} />
          </div>

          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("pencil");
              setActiveTab("featured");
            }}
          >
            <Pencil size={28} />
          </div>
        </div>
        <hr className="w-10 my-4 border-gray-300" />
        <div className="flex flex-col gap-3">
          {/* <div className={iconStyle} onClick={() =>setActiveIcon("compass")}><Compass size={28} /></div> */}
          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("compass");
              setActiveTab("featured");
            }}
          >
            <CompassIcon size={28} />
          </div>
          <div className={iconStyle} onClick={() => setActiveIcon("folder")}><Folder size={28} /></div>
          <div className={iconStyle} onClick={() => setActiveIcon("download")}><Download size={28} /></div>
        </div>
        <hr className="w-10 my-4 border-gray-300" />
        <div className={iconStyle} onClick={() => setActiveIcon("bookmark")}><Bookmark size={28} /></div>
        <div className="flex flex-col gap-3 mt-20">
          {/* <div className={iconStyle} onClick={() =>setActiveIcon("user")}><User size={28} /></div> */}
          <div
            className={iconStyle}
            onClick={() => {
              setActiveIcon("login");
              setActiveTab("featured");
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
            placeholder="Search photos and illustrations"
            className="w-full rounded-full bg-gray-100 border-0 py-3 pl-10 pr-4 outline-none focus:outline-none focus:ring-0"

          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-600 cursor-pointer">
            <ScanSearch size={18} />
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto whitespace-nowrap mt-4 items-start">
          <button className="relative px-2 py-2 hover:bg-gray-200 rounded-lg transition after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform">
            Featured
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
            <span className="text-sm font-medium">New</span>
            <span className="text-xs text-gray-500">Fall</span>
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
            Wallpapers
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
            3D Renders
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
            Nature
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
            Textures
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
            Film
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
            Architecture
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
            Street Photography
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
            Experimental
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
            Travel
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
            People
          </button>
        </div>
        <hr className="w-full my-6 border-gray-300 " />


        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "featured" && (

            <>
              <div className=" text-4xl font-bold ml-12 mt-40">Ramprasad</div>
              <pre className="font-sans text-lg ml-10">
                {"The internet's source for visuals.\nPowered by creators everywhere."}
              </pre>


              <div className="relative w-full max-w-5xl mb-6">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Search photos and illustrations"
                  className="w-170 rounded-full bg-gray-100 py-3 pl-11 pr-20 outline-none"
                />
                <div className="absolute right-4 top-1/3 -translate-x-38/2 flex items-center gap-2 text-gray-600 cursor-pointer">
                  <ScanSearch size={18} />

                </div>

              </div>
            </>
          )}


        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "fall" && <NewFall />}

        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "wallpapers" && <Wallpapers />}

        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "render" && <ThreeDRender />}

        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "nature" && <Nature />}

        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "textures" && <Textures />}

        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "film" && <Film />}

        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "architecture" && <Architecture />}


        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "street" && <StreetPhotography />}
        
        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "experimental" && <Experimental />}

        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "travel" && <Travel />}

        {(activeIcon === "home" ||
          activeIcon === "image" ||
          activeIcon === "pencil") &&
          activeTab === "people" && <People />}

        {activeIcon === "compass" && <Compass />}

        {activeIcon === "image" && (
          <div className="columns-3 gap-4 mt-6">
            {imageList.map((img, index) => (
              <ImageCard key={index} src={img} />
            ))}
          </div>
        )}
        {activeIcon === "pencil" && (
          <div className="columns-3 gap-4 mt-6">
            {pencilList.map((img, index) => (
              <ImageCard key={index} src={img} />
            ))}
          </div>
        )}
        {activeIcon === "login" && (
          <div className="min-h-[80vh] flex items-center justify-center">
            <div className="w-full max-w-md  p-8 ">
              <h1 className="text-3xl font-bold text-center">Login</h1>
              <p className="text-gray-500 mt-1 text-center">Welcome back.</p>

              <form className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-medium">Password</label>

                    <button
                      type="button"
                      className="text-sm underline text-gray-600 hover:text-black"
                    >
                      Forgot your password?
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
                  Login
                </button>
              </form>

              <div className="text-center text-sm text-gray-600 mt-6">
                Don't have an account?{" "}
                <span className="font-semibold cursor-pointer hover:underline">
                  Join
                </span>
              </div>
            </div>
          </div>
        )}

        {activeIcon === "languages" && (
          <div className="fixed left-24 top-[340px] z-50 w-[280px] rounded-2xl border bg-white p-5 shadow-2xl">
            <h2 className="text-lg font-bold mb-4">Select your language</h2>

            <ul className="space-y-3 text-sm text-gray-700">
              <li onClick={() => setLanguage("de")}>Deutsch</li>
              <li onClick={() => setLanguage("en")}>English</li>
              <li onClick={() => setLanguage("es")}>Español</li>
              <li onClick={() => setLanguage("fr")}>Français</li>
              <li onClick={() => setLanguage("id")}>Bahasa Indonesia</li>
              <li onClick={() => setLanguage("it")}>Italiano</li>
              <li onClick={() => setLanguage("ja")}>日本語</li>
              <li onClick={() => setLanguage("ko")}>한국어</li>
              <li onClick={() => setLanguage("pt")}>Português (Brasil)</li>
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