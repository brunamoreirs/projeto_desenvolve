"use client";

import { useState } from "react";

interface LikeButtonProps {
  initialLikes?: number;
}

export default function LikeButton({ initialLikes = 0 }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleLike}
        className={`
          flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200
          ${isLiked 
            ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
            : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
          }
          ${isAnimating ? 'transform scale-110' : ''}
        `}
      >
        <svg 
          className={`w-5 h-5 transition-colors duration-200 ${isAnimating ? 'animate-pulse' : ''}`}
          fill={isLiked ? "currentColor" : "none"}
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
          />
        </svg>
        <span className="font-medium">{likes}</span>
      </button>
      {isAnimating && (
        <span className="text-sm text-gray-500 animate-fade-in">
          {isLiked ? 'Obrigado!' : ''}
        </span>
      )}
    </div>
  );
}

