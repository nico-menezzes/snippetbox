'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { resetPassword } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      const { error } = await resetPassword(email)
      
      if (error) {
        setError(error.message)
      } else {
        setMessage('Email de recuperação enviado! Verifique sua caixa de entrada.')
      }
    } catch (err) {
      setError('Ocorreu um erro inesperado. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-snippet-text mb-2">
            SnippetBox
          </h1>
          <h2 className="text-2xl font-semibold text-snippet-textSecondary mb-6">
            Recuperar senha
          </h2>
          <p className="text-snippet-textSecondary">
            Digite seu email e enviaremos um link para redefinir sua senha
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {message && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              {message}
            </div>
          )}

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
          />

          <Button
            type="submit"
            className="w-full"
            loading={loading}
            disabled={!email}
          >
            Enviar link de recuperação
          </Button>
        </form>

        {/* Footer */}
        <div className="text-center">
          <Link 
            href="/login"
            className="text-snippet-accent hover:text-blue-600 font-medium transition-colors"
          >
            ← Voltar para o login
          </Link>
        </div>
      </div>
    </div>
  )
}
