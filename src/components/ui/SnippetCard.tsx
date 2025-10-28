import React from 'react'
import { ArrowUpRight } from 'phosphor-react'

interface SnippetCardProps {
  title: string
  tags: string[]
  previewImage?: string
  className?: string
  onClick?: () => void
}

export const SnippetCard: React.FC<SnippetCardProps> = ({ 
  title, 
  tags, 
  previewImage,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`group bg-white border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid h-[200px] lg:h-[249px] rounded-[8px] w-full cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] ${className}`}
      onClick={onClick}
    >
      <div className="h-full overflow-clip relative rounded-[inherit] w-full">
        
        {/* Preview Area */}
        <div className="absolute h-[120px] lg:h-[161px] left-[9px] overflow-clip rounded-[4px] top-[9px] w-[calc(100%-18px)]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[4px]">
            <div className="absolute bg-white inset-0 rounded-[4px]" />
            {previewImage ? (
              <img 
                alt="" 
                className="absolute max-w-none object-cover rounded-[4px] size-full" 
                src={previewImage} 
              />
            ) : (
              <div className="absolute bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] inset-0 rounded-[4px] flex items-center justify-center">
                <svg className="w-12 h-12 lg:w-16 lg:h-16 text-[#999]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Tags */}
          <div className="absolute top-[8px] left-[8px] flex gap-1 flex-wrap">
            {tags.map((tag, index) => (
              <div 
                key={index}
                className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.42)] h-[21px] overflow-clip rounded-[2px] px-[5px] flex items-center"
              >
                <p className="font-['PP_Mori:Regular',sans-serif] leading-[normal] not-italic text-[12px] text-nowrap text-white whitespace-pre">
                  {tag}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Title and Action Button */}
        <div className="absolute bottom-0 left-0 right-0 h-[67px] border-t-[0.5px] border-[rgba(0,0,0,0.10)] border-solid flex items-center justify-between px-[0.6rem] py-[12px]">
          <p className="font-['PP_Mori:Regular',sans-serif] leading-[1.3] not-italic text-[#1b1a18] text-[16px] flex-1 pr-2">
            {title}
          </p>
          <div className="shrink-0 w-[1.5rem] h-[1.5rem] bg-[#F3F3F3] rounded-[2px] flex items-center justify-center group-hover:opacity-100 opacity-30 transition-opacity duration-200">
            <ArrowUpRight size={12} className="text-[#1b1a18]" weight="regular" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default SnippetCard
