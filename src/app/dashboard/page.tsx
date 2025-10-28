'use client'

import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Sidebar } from '@/components/ui/Sidebar'
import { Binoculars } from 'phosphor-react'
import { SnippetCard } from '@/components/ui/SnippetCard'

export default function DashboardPage() {
  const { user, signOut } = useAuth()

  // Mock data para demonstração
  const snippets = [
    {
      id: 1,
      title: "Responsive Navigation Menu",
      tags: ["HTML", "CSS", "JavaScript"],
      previewImage: undefined
    },
    {
      id: 2,
      title: "Modal Dialog Component",
      tags: ["React", "TypeScript", "CSS"],
      previewImage: undefined
    },
    {
      id: 3,
      title: "Form Validation Helper",
      tags: ["JavaScript", "Validation", "Utility"],
      previewImage: undefined
    },
    {
      id: 4,
      title: "Dark Mode Toggle",
      tags: ["CSS", "JavaScript", "Theme"],
      previewImage: undefined
    },
    {
      id: 5,
      title: "API Fetch Utility",
      tags: ["JavaScript", "API", "Async"],
      previewImage: undefined
    },
    {
      id: 6,
      title: "CSS Grid Layout",
      tags: ["CSS", "Layout", "Grid"],
      previewImage: undefined
    },
    {
      id: 7,
      title: "Local Storage Manager",
      tags: ["JavaScript", "Storage", "Utility"],
      previewImage: undefined
    },
    {
      id: 8,
      title: "Button Component Styles",
      tags: ["CSS", "Components", "UI"],
      previewImage: undefined
    },
    {
      id: 9,
      title: "Date Picker Widget",
      tags: ["JavaScript", "Date", "Widget"],
      previewImage: undefined
    }
  ]

  const [searchTerm, setSearchTerm] = React.useState('')
  const [filteredSnippets, setFilteredSnippets] = React.useState<typeof snippets>([])

  const handleSignOut = async () => {
    await signOut()
  }

  // Filtrar snippets baseado no termo de busca
  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredSnippets(snippets)
    } else {
      const filtered = snippets.filter(snippet =>
        snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        snippet.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      setFilteredSnippets(filtered)
    }
  }, [searchTerm])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSnippetClick = (snippetId: number) => {
    console.log('Snippet clicked:', snippetId)
  }

  return (
    <ProtectedRoute>
      <div className="bg-neutral-100 content-stretch flex items-start relative size-full">
        
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 ml-[110px]">
          
          {/* Header Section */}
          <div className="h-[207px] overflow-clip relative shrink-0 w-[1334px]">
            
            {/* Search Bar */}
            <div className="absolute left-[1015px] top-[44px] w-[257px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full h-[48px] px-4 pr-12 bg-white border-[0.5px] border-[rgba(0,0,0,0.10)] border-solid rounded-[8px] font-['PP_Mori:Regular',sans-serif] text-[16px] text-[#1b1a18] placeholder-[#878784] focus:outline-none focus:ring-2 focus:ring-[#1b1a18] focus:ring-opacity-20"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Binoculars size={20} className="text-[#878784]" weight="regular" />
                </div>
              </div>
            </div>
            
            {/* Title and Subtitle */}
            <div className="absolute contents left-0 top-0">
              <p className="absolute font-['PP_Mori:SemiBold',sans-serif] inset-[20.77%_51.47%_55.07%_3.98%] leading-[normal] not-italic text-[#1b1a18] text-[48px]">
                Hey Nico - that's your box
              </p>
              <p className="absolute font-['PP_Mori:Regular',sans-serif] inset-[60.39%_86.17%_27.54%_3.98%] leading-[normal] not-italic text-[#878784] text-[24px]">
                20 snippets
              </p>
              
              {/* Top Line */}
              <div className="absolute h-0 left-0 top-0 w-[1330px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <div className="w-full h-[1px] bg-[rgba(0,0,0,0.10)]"></div>
                </div>
              </div>
              
              {/* Bottom Line */}
              <div className="absolute h-0 left-0 top-[207px] w-[1330px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <div className="w-full h-[1px] bg-[rgba(0,0,0,0.10)]"></div>
                </div>
              </div>
            </div>
            
            {/* View Toggle */}
            <div className="absolute bg-[#f9f9f9] border-[0.5px] border-[rgba(0,0,0,0.2)] border-solid h-[32px] left-[1165px] rounded-[4px] top-[100px] w-[106px]">
              <div className="h-[32px] overflow-clip relative rounded-[inherit] w-[106px]">
                <div className="absolute left-[12px] size-[24px] top-[4px]">
                  <svg className="w-full h-full text-[#1b1a18]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Snippets Grid */}
          <div className="gap-[20px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[787px] relative shrink-0 w-[910px]">
            {filteredSnippets.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                title={snippet.title}
                tags={snippet.tags}
                previewImage={snippet.previewImage}
                onClick={() => handleSnippetClick(snippet.id)}
              />
            ))}
          </div>
          
        </div>
      </div>
    </ProtectedRoute>
  )
}
