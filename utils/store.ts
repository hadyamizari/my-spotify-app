import {create} from 'zustand'

export type StoreOptions = {
  isDark: boolean
  switchIsDark: (dark: boolean) => void

  token: string
  setToken: (token: string) => void
}

export const useStore = create<StoreOptions>()((set) => ({
  isDark: false,
  switchIsDark: () => set((state) => ({...state, isDark: !state.isDark})),

  token: '',
  setToken: () => set((state) => ({...state, token: state.token}))
}))
