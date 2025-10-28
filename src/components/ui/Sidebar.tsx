import React, { useState } from 'react'
import { Cube, UserCircle, GearSix, Plus, List } from 'phosphor-react'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-20 bg-[#1b1a18] text-white p-3 rounded-lg hover:bg-[#3b3a37] transition-colors"
      >
        <List size={24} weight="regular" />
      </button>

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 z-10 bg-[#f9f9f9] border border-[rgba(0,0,0,0.21)] border-solid h-[100dvh] w-[110px] rounded-br-[8px] rounded-tr-[8px] pb-[2.5rem]
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:h-screen
        ${className}
      `}>
        <div className="h-full overflow-clip relative rounded-[inherit] w-[110px] flex flex-col items-center justify-center gap-6">
          
          {/* Logo Cube */}
          <div className="bg-[#e7e7e7] overflow-clip rounded-[4px] size-[54px] flex items-center justify-center">
            <Cube size={32} className="text-[#1b1a18]" weight="fill" />
          </div>

          {/* User Circle Icon */}
          <div className="overflow-clip rounded-[4px] size-[54px] flex items-center justify-center hover:bg-[#e7e7e7] transition-colors cursor-pointer">
            <UserCircle size={32} className="text-[#1b1a18] opacity-20" weight="regular" />
          </div>

          {/* Settings Gear Icon */}
          <div className="overflow-clip rounded-[4px] size-[54px] flex items-center justify-center hover:bg-[#e7e7e7] transition-colors cursor-pointer">
            <GearSix size={32} className="text-[#1b1a18] opacity-20" weight="regular" />
          </div>

        </div>
        
        {/* Plus Icon - Botão de adicionar snippet - Fixo na parte de baixo */}
        <div className="absolute bottom-[2.5rem] left-1/2 translate-x-[-50%] bg-[#1b1a18] overflow-clip rounded-[55px] size-[54px] flex items-center justify-center hover:bg-[#3b3a37] transition-colors cursor-pointer">
          <Plus size={32} className="text-white" weight="regular" />
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[5]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
