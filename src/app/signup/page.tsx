'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { SnippetBoxLogo } from '@/components/ui/SnippetBoxLogo'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { signUp } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Basic validations
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      const { error } = await signUp(email, password, name)
      
      if (error) {
        setError(error.message)
      } else {
        router.push('/dashboard')
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
          <h1 className="text-[32px] font-semibold text-snippet-text mb-6 text-center">
            Signup
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-[16px] font-normal text-snippet-text">
                Full name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full h-[48px] bg-white border border-[#cecece] border-[0.5px] rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-snippet-primary focus:border-transparent transition-colors"
                required
              />
            </div>

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

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-[16px] font-normal text-snippet-text">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-[48px] bg-white border border-[#cecece] border-[0.5px] rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-snippet-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-[16px] font-normal text-snippet-text">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-[48px] bg-white border border-[#cecece] border-[0.5px] rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-snippet-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!name || !email || !password || !confirmPassword || loading}
              className="w-full h-[56px] bg-[#1b1a18] border border-[#3b3a37] border-[0.5px] rounded-lg text-white text-[18px] font-normal hover:bg-[#3b3a37] focus:outline-none focus:ring-2 focus:ring-snippet-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating account...
                </div>
              ) : (
                <>
                  Create account
                  <svg className="w-4 h-4 ml-2 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-snippet-textSecondary">
              Already have an account?{' '}
              <Link 
                href="/login"
                className="text-snippet-text hover:underline font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
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
