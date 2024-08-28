import { New } from "@/modules/news/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string | null) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: "auth-storage__news",
      getStorage: () => localStorage,
    }
  )
);

interface NewsState {
  news: Array<New>;
  addNew: (newLy: New) => void;
  addNews: (news: Array<New>) => void;
}

export const useNewsStore = create<NewsState>((set) => ({
  news: [],
  addNew: (newNew) =>
    set((state) => ({
      news: [...state.news, newNew],
    })),
  addNews: (newNews) =>
    set((state) => ({
      news: [...state.news, ...newNews],
    })),
}));
