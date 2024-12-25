import React from "react";

interface ButtonProps {
  path: string; // The path to the sound file
  text: string; // The text for the button
  className?: string; // Optional className for additional styling
  volume?: number;
}

const SoundButton: React.FC<ButtonProps> = ({
  path,
  text,
  className,
  volume = 1,
}) => {
  const playSound = () => {
    const audio = new Audio(path);
    audio.volume = volume;
    audio.play();
  };

  return (
    <button
      onClick={playSound}
      className={`px-3 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default SoundButton;
