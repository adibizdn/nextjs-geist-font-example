import React from 'react';

interface DTGLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function DTGLogo({ className = "", width = 400, height = 120 }: DTGLogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg 
        width={width} 
        height={height * 0.7} 
        viewBox="0 0 400 84" 
        className="mb-2"
      >
        {/* Dotted pattern on the left */}
        <defs>
          <pattern id="dots" patternUnits="userSpaceOnUse" width="4" height="4">
            <circle cx="2" cy="2" r="1" fill="#1f2937" />
          </pattern>
        </defs>
        
        {/* Background */}
        <rect width="400" height="84" fill="transparent" />
        
        {/* Dotted pattern area */}
        <rect x="0" y="0" width="60" height="84" fill="url(#dots)" />
        
        {/* Letter D */}
        <path 
          d="M 80 10 L 80 74 L 120 74 C 140 74 155 59 155 42 C 155 25 140 10 120 10 Z M 100 25 L 120 25 C 128 25 135 32 135 42 C 135 52 128 59 120 59 L 100 59 Z" 
          fill="white"
        />
        
        {/* Letter T */}
        <rect x="180" y="10" width="80" height="15" fill="white" />
        <rect x="215" y="10" width="15" height="64" fill="white" />
        
        {/* Letter G */}
        <path 
          d="M 290 10 C 270 10 255 25 255 42 C 255 59 270 74 290 74 C 305 74 318 65 322 52 L 302 52 L 302 37 L 340 37 L 340 52 C 335 70 315 84 290 84 C 260 84 235 64 235 42 C 235 20 260 0 290 0 C 315 0 335 14 340 32 L 320 32 C 318 20 305 10 290 10 Z" 
          fill="white"
        />
        
        {/* Teal curved background elements */}
        <path 
          d="M 70 0 Q 150 0 200 42 Q 150 84 70 84 Z" 
          fill="#0d9488" 
          opacity="0.8"
        />
        <path 
          d="M 200 0 Q 280 0 330 42 Q 280 84 200 84 Z" 
          fill="#0891b2" 
          opacity="0.6"
        />
        <path 
          d="M 330 0 Q 380 0 400 42 Q 380 84 330 84 Z" 
          fill="#0e7490" 
          opacity="0.4"
        />
      </svg>
      
      <div className="text-sm font-semibold tracking-widest text-gray-300 uppercase">
        Digital Twin Geotechnical Monitoring
      </div>
    </div>
  );
}
