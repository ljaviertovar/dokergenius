import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  step: number
  currentDokyfile?: string
}
interface Actions {
  setStep: (value: number) => void
}

const INITIAL_STATE: State = {
  step: 1,
}

export const useCreateStore = create(
  persist<State & Actions>(
    (set, get) => ({
      step: INITIAL_STATE.step,
      setStep: value => {
        set({ step: value })
      },
    }),
    {
      name: 'dokyfile-create-store',
    },
  ),
)
