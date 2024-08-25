"use client";

import { useState } from "react";

const storyParagraphs = [
  "Long ago, in the Forgotten Kingdom, there lived a fearless warrior named Eldrin. His mission was to retrieve the Lost Crown of Ages, a relic of great power that had been hidden for centuries. With a loyal wolf named Fenrir by his side, Eldrin embarked on an epic journey.",
  "On the first leg of their journey, Eldrin and Fenrir encountered a haunted castle. The castle loomed on the horizon, its towers shrouded in mist. As Eldrin entered, the air grew cold, and whispers filled the halls. Ghostly figures materialized, their mournful cries echoing through the corridors. Drawing his sword, Eldrin battled the restless spirits, his resolve unshaken. With each step forward, he banished the ghosts, finding a hidden passage that led them out.",
  "On the second leg of their journey, they faced a treacherous mountain pass. The pass was narrow and steep, with jagged rocks and icy winds threatening their every step. Eldrin carefully navigated the path, using his strength to climb over boulders and avoid falling into the chasms below. Fenrir, with his keen senses, guided them safely through the blinding snowstorm until they reached the other side.",
  "On the third leg of their journey, they encountered an ancient dragon. The dragon's lair was deep within the mountains, where the air was thick with smoke and the ground trembled with each of its breaths. As Eldrin approached, the dragon's eyes glowed like embers, and it unleashed a torrent of fire. With Fenrir by his side, Eldrin dodged the flames and struck the beast with a powerful blow. After a fierce battle, the dragon was defeated, leaving behind a trail of gold and a clue to the next part of the journey.",
  "On the fourth leg of their journey, they faced a mysterious sorcerer. The sorcerer appeared in a flash of light, his robes flowing and his eyes glowing with dark power. He challenged Eldrin to a duel of wits and magic. Summoning all his courage, Eldrin faced the sorcerer, countering each spell with one of his own. The battle of minds raged on until Eldrin's resolve broke the sorcerer's concentration, leading to his defeat.",
  "On the fifth leg of their journey, they entered a labyrinthine cave. The cave was a maze of tunnels and dead ends, with darkness that seemed to swallow all light. Using a map found in the dragon's hoard, Eldrin and Fenrir navigated the twisting passages. They encountered traps and pitfalls, but their determination saw them through. At the centre of the labyrinth, they found a hidden chamber, revealing another piece of the puzzle.",
  "On the sixth leg of their journey, they traversed a cursed forest. The forest was alive with malevolent energy, its trees twisted and gnarled, and the air thick with an unnatural fog. Every step Eldrin took was met with resistance, as the forest itself seemed to conspire against them. Fenrir led the way, his senses guiding them through the maze of vines and thorns. As they reached the heart of the forest, the curse began to weaken, and they broke free of its grip.",
  "After overcoming countless trials, Eldrin and Fenrir finally reached the deepest chamber of the Forgotten Kingdom. There, bathed in a soft, ethereal light, was the Lost Crown of Ages, resting upon a pedestal of stone. As Eldrin approached, he could feel the power emanating from the crown, a power that had been lost to time. He took the crown in his hands, feeling its weight and the responsibility that came with it.",
  "With the Lost Crown of Ages in his possession, Eldrin knew that his quest was finally complete. He returned to the kingdom, where he was hailed as a hero and crowned as the new ruler. Under his reign, the kingdom flourished, and the story of his epic journey was told for generations to come.",
];

export default function Home() {
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = (text: string) => {
    if (utterance) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
    }

    const newUtterance = new SpeechSynthesisUtterance(text);
    setUtterance(newUtterance);

    newUtterance.onend = () => setIsPlaying(false);
    newUtterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(newUtterance);
    setIsPlaying(true);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-black text-white p-8 flex flex-col items-center">
      {/* Voice Controls */}
      <div className="mt-4 mb-12 space-x-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => speak(storyParagraphs.join(" "))}
          disabled={isPlaying}
        >
          Play VoiceOver
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded"
          onClick={stop}
          disabled={!isPlaying}
        >
          Stop VoiceOver
        </button>
      </div>

      {/* Story Container */}
      <div className="max-w-4xl mx-auto space-y-6 bg-gray-800 bg-opacity-60 rounded-lg p-8 shadow-lg slide-in">
        {storyParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-lg leading-relaxed fade-in"
            style={{ animationDelay: `${index * 0.5}s` }} // Apply staggered delay for each paragraph
            onClick={() => speak(paragraph)} // Speak the paragraph on click
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Style tag to define custom animations */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .slide-in {
          animation: slideIn 1s ease-out forwards;
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
