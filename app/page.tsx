"use client";

import HeartShower from "@/Components/HeartShower";
import MusicPlayer from "@/Components/MusicPlayer";
import { useState } from "react";

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 });
  const [noText, setNoText] = useState("No 😢");

  const messages = [
    "Why are you trying to click NO? 😒",
    "No is not an option 😤",
    "Just click YES already ❤️",
    "Stop chasing me 😂",
    "You can't escape love 💘",
    "Oiii Paithiyakariii 😡",
    "Seriously? NO?? 🤨",
    "Be nice... click YES 😌",
    "I will keep running 😜",
    "Don't break my heart 💔",
  ];

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 500) - 350;
    const randomY = Math.floor(Math.random() * 500) - 350;

    setNoPosition({
      top: randomY,
      left: randomX,
    });

    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setNoText(randomMsg);
  };

  // ❤️ Greeting card after YES
  if (showCard) {
    return (
      <>
        {" "}
        <HeartShower />
        <div className="h-screen flex items-center justify-center bg-pink-100">
          <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
            <h1 className="text-3xl font-bold text-pink-600 mb-4">
              Happy Valentine’s Day ❤️
            </h1>
            <p className="text-gray-700 text-lg">
              You just made my day special 💖 <br />
              Thank you for choosing YES 😍
            </p>

            {/* 🎵 Music Player */}
            <MusicPlayer />
          </div>
        </div>
      </>
    );
  }

  // 💘 Main Page
  return (
    <div className="flex justify-center items-center h-screen bg-pink-50 relative overflow-hidden">
      <HeartShower />

      <div className="bg-white w-150 h-80 flex flex-col items-center justify-center border rounded-2xl shadow-2xl">
        <div className="text-center space-y-4 mb-12 px-4">
          <h1 className="text-4xl font-bold text-pink-600">
            Will you be my Valentine? 💘
          </h1>

          <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
            You mean more to me than words (or code) can say 💖 And the NO
            button? It clearly disagrees 😌❤️
          </p>
        </div>

        <div className="relative w-80 flex justify-between items-center">
          {/* YES BUTTON */}
          <button
            onClick={() => setShowCard(true)}
            className="px-8 py-3 bg-pink-500 text-white rounded-xl text-lg font-semibold hover:bg-pink-600 transition"
          >
            Yes ❤️
          </button>

          {/* MOVING NO BUTTON */}
          <div
            onMouseEnter={moveNoButton}
            style={{
              position: "absolute",
              right: 0,
              transform: `translate(${noPosition.left}px, ${noPosition.top}px)`,
            }}
            className="transition-all duration-200"
          >
            <button className="px-6 py-3 bg-white rounded-xl text-slate-950 text-sm font-semibold whitespace-nowrap min-w-30 text-center border border-gray-300">
              {noText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
