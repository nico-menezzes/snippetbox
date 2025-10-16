'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export function Input({ 
  className, 
  label, 
  error, 
  helperText, 
  id, 
  ...props 
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-snippet-text"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full px-4 py-3 border border-snippet-border rounded-lg",
          "bg-white text-snippet-text placeholder-snippet-textSecondary",
          "focus:outline-none focus:ring-2 focus:ring-snippet-accent focus:border-transparent",
          "transition-colors duration-200",
          error && "border-error focus:ring-error",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-error">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-snippet-textSecondary">{helperText}</p>
      )}
    </div>
  )
}

// Função utilitária para combinar classes (se não existir)
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}
