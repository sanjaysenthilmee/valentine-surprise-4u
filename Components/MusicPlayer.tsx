"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const songs = [
  { title: "Listen Carefully ❤️", src: "/Music/intro-song.mp3" },
  { title: "This song for you diii ponne 💕", src: "/Music/love_feel.mp3" },
  { title: "Ithu Yeipdii 💖", src: "/Music/Final-Touch.mp3" },
  { title: "En Kanmani 🤗", src: "/Music/mayakkam_enna.mp3" },
  { title: "Usure Neethane 😘", src: "/Music/Usure.mp3" },
  { title: "Unnoda Paarvai 😘", src: "/Music/uthamaputhiran.mp3" },
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const nextSong = () => {
    if (currentIndex === songs.length - 1) {
      // Last song reached
      setIsFinished(true);
      setIsPlaying(false);
      audioRef.current?.pause();
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setIsPlaying(true);
  };

  const prevSong = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
    setIsPlaying(true);
  };
  return (
    <div className="mt-6 text-center">
      <audio ref={audioRef} src={songs[currentIndex].src} />

      {/* 🎁 FINAL CARD */}
      {showCard ? (
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">For You ❤️</h2>

          <Image
            src="/Music/HugGif.gif"
            alt="Love Gif"
            className="w-full rounded-xl mb-4"
            width={700}
            height={700}
          />

          <p className="text-slate-700 font-bold text-xl mt-3">
            கள்ளிப்பால் ஊற்றிக் கொள்ள தவறிய அழகி டி நீ....😅🤗
          </p>

          <p className="text-pink-400 mt-2">Miss You Da Chello 🤗 🤗 🤗 </p>
        </div>
      ) : !isFinished ? (
        <>
          <p className="text-pink-600 font-semibold mb-3">
            🎵 {songs[currentIndex].title}
          </p>

          <div className="flex justify-center gap-6">
            <button
              onClick={prevSong}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg"
            >
              ⏮ Prev
            </button>

            <button
              onClick={togglePlay}
              className="px-6 py-2 bg-green-400 text-white rounded-lg"
            >
              {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>

            <button
              onClick={nextSong}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg"
            >
              ⏭ Next
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => setShowCard(true)}
          className="mt-4 px-6 py-3 bg-pink-600 text-white rounded-xl text-lg font-semibold hover:bg-pink-700 transition"
        >
          💌 Please Click Here ❤️
        </button>
      )}
    </div>
  );
}
