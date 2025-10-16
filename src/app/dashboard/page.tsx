'use client'

import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
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
                <h1 className="text-3xl font-bold text-black">
                  Dashboard
                </h1>
                <p className="text-gray-600 mt-1">
                  Welcome, {user?.email}!
                </p>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign out
              </button>
            </div>
          </header>

          {/* Content */}
          <main className="py-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-black mb-4">
                SnippetBox Dashboard
              </h2>
              <p className="text-gray-600 mb-6">
                Here you'll be able to manage your code snippets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-black mb-2">
                    My Snippets
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Organize your favorite code
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-black mb-2">
                    Categories
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Organize by tags and categories
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-black mb-2">
                    Share
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Share your code
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
