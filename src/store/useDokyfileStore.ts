import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Dokyfile } from '../types'
import { dockerfilePlaceholder, promptPlaceholder } from '@/data/placeholders'

interface State {
  currentDokyfile: Dokyfile
}
interface Actions {
  setCurrentDokyfile: (value: Dokyfile) => void
}

const INITIAL_STATE: State = {
  currentDokyfile: { prompt: promptPlaceholder, dockerfile: dockerfilePlaceholder },
}

export const useDokyfileStore = create(
  persist<State & Actions>(
    (set, get) => ({
      currentDokyfile: INITIAL_STATE.currentDokyfile,
      setCurrentDokyfile: value => {
        set({ currentDokyfile: value })
      },
    }),
    {
      name: 'dokyfile-store',
    },
  ),
)
