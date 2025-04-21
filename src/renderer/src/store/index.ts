import { create } from 'zustand'
import { createTabSlice, TabSlice } from './slices'

export const useAppStore = create<TabSlice>((...args) => ({
  ...createTabSlice(...args)
}))
export type AppStore = ReturnType<typeof useAppStore>
