import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { LocalDokyfile, Dokyfile } from '../types'
import { dockerfilePlaceholder, promptPlaceholder } from '@/data/placeholders'

interface State {
  currentDokyfile: Dokyfile
  localDokyfiles: LocalDokyfile[]
  apikey: string
  generating: boolean
}
interface Actions {
  setCurrentDokyfile: (value: Dokyfile) => void
  setLocalDokyfiles: (value: LocalDokyfile) => void
  setGenerating: (value: boolean) => void
  setApikey: (value: string) => void
}

const INITIAL_STATE: State = {
  currentDokyfile: { prompt: promptPlaceholder, dockerfile: dockerfilePlaceholder },
  localDokyfiles: [],
  apikey: '',
  generating: false,
}

export const useGenerateStore = create(
  persist<State & Actions>(
    (set, get) => ({
      currentDokyfile: INITIAL_STATE.currentDokyfile,
      localDokyfiles: INITIAL_STATE.localDokyfiles,
      apikey: INITIAL_STATE.apikey,
      generating: INITIAL_STATE.generating,
      setCurrentDokyfile: value => {
        set({ currentDokyfile: value })
      },
      setLocalDokyfiles: value => {
        const dokyfiles = get().localDokyfiles
        set({ localDokyfiles: [...dokyfiles, value] })
      },
      setApikey: value => {
        set({ apikey: value })
      },
      setGenerating: value => {
        set({ generating: value })
      },
    }),
    {
      name: 'dokyfile-generate-store',
    },
  ),
)
