import { create } from "zustand"
import { persist } from "zustand/middleware"

interface State {
	prompts: string[]
}

const INITIAL_STATE: State = {
	prompts: [],
}

interface Actions {
	setPrompts: (value: string) => void
}

export const useGenerateStore = create(
	persist<State & Actions>(
		(set, get) => ({
			prompts: INITIAL_STATE.prompts,
			setPrompts: (value: string) => {
				const savedPrompts = get().prompts
				set(state => ({ prompts: [...savedPrompts, value] }))
			},
		}),
		{
			name: "generate-store",
		}
	)
)
