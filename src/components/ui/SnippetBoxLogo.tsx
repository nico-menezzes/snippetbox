import React from 'react'

interface SnippetBoxLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const SnippetBoxLogo: React.FC<SnippetBoxLogoProps> = ({ 
  className = '', 
  size = 'lg' 
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-[5.625rem] h-[5.625rem]',
    xl: 'w-32 h-32'
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Logo SVG baseado no design do Figma */}
      <svg 
        className="w-full h-full text-white drop-shadow-lg" 
        fill="currentColor" 
        viewBox="0 0 32 32"
      >
        {/* Cubo 3D com efeito de brilho */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Face frontal do cubo */}
        <path d="M16 4L4 10v12c0 6.627 5.373 12 12 12s12-5.373 12-12V10L16 4z" fill="white" filter="url(#glow)"/>
        
        {/* Face superior */}
        <path d="M16 6L26 12v10c0 4.418-3.582 8-8 8V18c0-1.105-.895-2-2-2s-2 .895-2 2v8c-4.418 0-8-3.582-8-8V12l10-6z" fill="white" opacity="0.8"/>
        
        {/* Detalhes internos */}
        <path d="M12 16h8v2h-8z" fill="rgba(0,0,0,0.3)"/>
        <path d="M14 12h4v1h-4z" fill="rgba(0,0,0,0.2)"/>
        <path d="M14 20h4v1h-4z" fill="rgba(0,0,0,0.2)"/>
      </svg>
    </div>
  )
}

export default SnippetBoxLogo