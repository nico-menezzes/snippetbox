// Mock Supabase para desenvolvimento
export const supabase = {
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
      // Mock de login - aceita qualquer email/senha para desenvolvimento
      if (email && password) {
        return {
          data: {
            user: {
              id: 'mock-user-id',
              email,
              user_metadata: { name: 'Usuário Mock' }
            },
            session: {
              access_token: 'mock-token',
              user: {
                id: 'mock-user-id',
                email,
                user_metadata: { name: 'Usuário Mock' }
              }
            }
          },
          error: null
        }
      }
      return { data: null, error: { message: 'Credenciais inválidas' } }
    },
    signUp: async ({ email, password, options }: any) => {
      // Mock de cadastro
      return {
        data: {
          user: {
            id: 'mock-user-id',
            email,
            user_metadata: options?.data || {}
          },
          session: null
        },
        error: null
      }
    },
    signOut: async () => ({ error: null }),
    resetPasswordForEmail: async (email: string) => {
      console.log('Mock: Email de recuperação enviado para', email)
      return { error: null }
    },
    onAuthStateChange: (callback: any) => {
      // Mock do listener de mudanças de auth
      return { data: { subscription: { unsubscribe: () => {} } } }
    }
  }
}

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
