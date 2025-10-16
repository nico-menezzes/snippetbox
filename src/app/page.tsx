'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function Home() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-snippet-accent"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-snippet-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-snippet-text">
              SnippetBox
            </h1>
            <div className="flex gap-4">
              <Link href="/login">
                <Button variant="ghost">
                  Entrar
                </Button>
              </Link>
              <Link href="/signup">
                <Button>
                  Criar conta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-snippet-text mb-6">
            Organize seus snippets de código
          </h2>
          <p className="text-xl text-snippet-textSecondary mb-8 max-w-2xl mx-auto">
            Salve, organize e compartilhe seus trechos de código favoritos em HTML, CSS e JavaScript de forma segura e intuitiva.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg">
                Começar agora
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg">
                Já tenho conta
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-snippet-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl">💾</span>
            </div>
            <h3 className="text-xl font-semibold text-snippet-text mb-2">
              Salve rapidamente
            </h3>
            <p className="text-snippet-textSecondary">
              Adicione novos snippets em segundos com syntax highlighting automático
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-snippet-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl">🏷️</span>
            </div>
            <h3 className="text-xl font-semibold text-snippet-text mb-2">
              Organize por tags
            </h3>
            <p className="text-snippet-textSecondary">
              Categorize seus códigos com tags e encontre rapidamente o que precisa
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-snippet-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-xl">🔗</span>
            </div>
            <h3 className="text-xl font-semibold text-snippet-text mb-2">
              Compartilhe facilmente
            </h3>
            <p className="text-snippet-textSecondary">
              Gere links para compartilhar seus snippets com outros desenvolvedores
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-snippet-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-snippet-textSecondary">
            <p>&copy; 2024 SnippetBox. Feito para desenvolvedores.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
