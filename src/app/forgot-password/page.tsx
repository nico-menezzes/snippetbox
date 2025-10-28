'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { SnippetBoxLogo } from '@/components/ui/SnippetBoxLogo'

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
        setMessage('Password reset email sent! Check your inbox.')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-[100dvh] max-h-[100dvh] bg-neutral-100 flex">
      {/* Seção Esquerda - Formulário */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md flex flex-col items-center">
          <h1 className="text-[32px] font-semibold text-snippet-text mb-4 text-center">
            Reset password
          </h1>
          <p className="text-snippet-textSecondary mb-8 text-center">
            Enter your email and we'll send you a link to reset your password
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {message && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                {message}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[16px] font-normal text-snippet-text">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full h-[48px] bg-white border border-[#cecece] border-[0.5px] rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-snippet-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!email || loading}
              className="w-full h-[56px] bg-[#1b1a18] border border-[#3b3a37] border-[0.5px] rounded-lg text-white text-[18px] font-normal hover:bg-[#3b3a37] focus:outline-none focus:ring-2 focus:ring-snippet-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                <>
                  Send reset link
                  <svg className="w-4 h-4 ml-2 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center">
            <Link 
              href="/login"
              className="text-sm text-snippet-textSecondary hover:text-snippet-text transition-colors"
            >
              ← Back to login
            </Link>
          </div>
        </div>
      </div>

      {/* Seção Direita - Boas-vindas */}
      <div className="hidden lg:flex flex-1 bg-[#1b1a18] items-center justify-center relative">
        <div className="text-center flex flex-col items-center">
          {/* Logo do SnippetBox */}
          <div className="mb-8">
            <SnippetBoxLogo size="lg" />
          </div>
          
          <h2 className="text-[32px] font-semibold text-white max-w-[12rem]">
            Welcome to Snippet Box
          </h2>
        </div>
        
        {/* Efeito de blur na parte inferior */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120%] h-40 blur-[50px] bg-gradient-to-t from-white via-transparent to-[rgba(249,248,247,0)]" />
      </div>
    </div>
  )
}
