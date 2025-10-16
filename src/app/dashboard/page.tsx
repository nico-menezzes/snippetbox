'use client'

import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/Button'
import { ProtectedRoute } from '@/components/ProtectedRoute'

export default function DashboardPage() {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="py-6 border-b border-snippet-border">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-snippet-text">
                  Dashboard
                </h1>
                <p className="text-snippet-textSecondary mt-1">
                  Bem-vindo, {user?.email}!
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleSignOut}
              >
                Sair
              </Button>
            </div>
          </header>

          {/* Content */}
          <main className="py-8">
            <div className="bg-snippet-surface rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-snippet-text mb-4">
                SnippetBox Dashboard
              </h2>
              <p className="text-snippet-textSecondary mb-6">
                Aqui você poderá gerenciar seus snippets de código.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-snippet-text mb-2">
                    Meus Snippets
                  </h3>
                  <p className="text-snippet-textSecondary text-sm">
                    Organize seus códigos favoritos
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-snippet-text mb-2">
                    Categorias
                  </h3>
                  <p className="text-snippet-textSecondary text-sm">
                    Organize por tags e categorias
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-soft">
                  <h3 className="font-semibold text-snippet-text mb-2">
                    Compartilhar
                  </h3>
                  <p className="text-snippet-textSecondary text-sm">
                    Compartilhe seus códigos
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
