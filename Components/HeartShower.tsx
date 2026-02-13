/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

type Heart = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
};

export default function HeartShower() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  // all emojis you want
  const emojis = [
    "❤️",
    "💕",
    "😘",
    "💖",
    "💗",
    "😍",
    "💘",
    "💝",
    "💞",
    "🥰",
    "💓",
    "💜",
    "🤍",
    "🤪",
  ];

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 16 + Math.random() * 20,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `fall ${heart.duration}s linear ${heart.delay}s infinite`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}
