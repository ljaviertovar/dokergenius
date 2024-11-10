import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LocalDokyfile, Dokyfile } from '../types'
import { dockerfilePlaceholder, promptPlaceholder } from '@/data/placeholders'

interface State {
  currentDokyfile: Dokyfile
  localDokyfiles: LocalDokyfile[]
}
interface Actions {
  setCurrentDokyfile: (value: Dokyfile) => void
  setLocalDokyfiles: (value: LocalDokyfile) => void
}

const INITIAL_STATE: State = {
  currentDokyfile: { prompt: promptPlaceholder, dockerfile: dockerfilePlaceholder },
  localDokyfiles: [],
}

export const useGenerateStore = create(
  persist<State & Actions>(
    (set, get) => ({
      currentDokyfile: INITIAL_STATE.currentDokyfile,
      localDokyfiles: INITIAL_STATE.localDokyfiles,
      setCurrentDokyfile: value => {
        set({ currentDokyfile: value })
      },
      setLocalDokyfiles: value => {
        const dokyfiles = get().localDokyfiles
        set({ localDokyfiles: [...dokyfiles, value] })
      },
    }),
    {
      name: 'dokyfile-generate-store',
    },
  ),
)
