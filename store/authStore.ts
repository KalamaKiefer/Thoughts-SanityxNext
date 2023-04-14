import { create } from "zustand"

interface AuthProps {
	likes: number
	setLikes: (numLikes: number) => void
	increaseLikes: () => void
	decreaseLikes: () => void
}

export const useAuthStore = create<AuthProps>()((set) => ({
	likes: 0,
	setLikes: (numLikes) => set((state) => ({ likes: numLikes })),
	increaseLikes: () => set((state: any) => ({ likes: state.likes + 1 })),
	decreaseLikes: () => set((state: any) => ({ likes: state.likes - 1 })),
}))
