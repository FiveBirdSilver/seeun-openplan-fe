import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PhotoState {
  photo: string | null;
  setPhoto: (photo: string) => void;
}

export const usePhotoStore = create<PhotoState>()(
  persist(
    (set) => ({
      photo: null,
      setPhoto: (photo) => set({ photo }),
    }),
    { name: 'photo-storage' }
  )
);