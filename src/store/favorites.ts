import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      ids: [],
      addFavorite: (id) => set((state) => ({ 
        ids: [...state.ids, id] 
      })),
      removeFavorite: (id) => set((state) => ({ 
        ids: state.ids.filter(favId => favId !== id) 
      })),
      isFavorite: (id) => get().ids.includes(id),
    }),
    {
      name: 'favorites-storage',
    }
  )
);