'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // Modo de desenvolvimento - permite acesso direto ao dashboard
  const isDevelopment = process.env.NODE_ENV === 'development'
  const skipAuth = isDevelopment && mounted && window.location.search.includes('skipAuth=true')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !skipAuth && !loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router, skipAuth, mounted])

  // Evita hidratação inconsistente
  if (!mounted) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1b1a18]"></div>
      </div>
    )
  }

  if (loading && !skipAuth) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1b1a18]"></div>
      </div>
    )
  }

  if (!user && !skipAuth) {
    return null
  }

  return <>{children}</>
}
