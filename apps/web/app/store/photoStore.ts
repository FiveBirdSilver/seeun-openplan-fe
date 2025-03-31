import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PhotoState {
  photo: string | null
  hasViewed: boolean
  setHasViewed: (viewed: boolean) => void
  setPhoto: (photo: string) => void
}

export const usePhotoStore = create<PhotoState>()(
  persist(
    (set) => ({
      photo: null,
      hasViewed: false,
      setPhoto: (photo: string) => set({ photo }),
      setHasViewed: (viewed: boolean) => set({ hasViewed: viewed }),
    }),
    {
      name: 'photo-storage',
    }
  )
)
