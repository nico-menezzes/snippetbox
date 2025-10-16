import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para o banco de dados
export interface User {
  id: string
  email: string
  name: string
  created_at: string
  updated_at: string
}

export interface Snippet {
  id: string
  user_id: string
  name: string
  description: string
  code: string
  language: 'html' | 'css' | 'javascript'
  tags: string[]
  is_public: boolean
  created_at: string
  updated_at: string
}

export interface Category {
  id: string
  name: string
  color: string
  user_id: string
  created_at: string
}
