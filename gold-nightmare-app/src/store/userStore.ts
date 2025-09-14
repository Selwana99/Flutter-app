import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the shape of the User object
interface User {
  name: string;
  email: string;
  points: number;
  licenseType: string;
}

// Define the shape of the store's state and actions
interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  deductPoints: (amount: number) => void;
  addPoints: (amount: number) => void;
  setUser: (user: User | null) => void;
}

// Create the store with persistence middleware
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      isAuthenticated: false,

      // Actions
      login: (userData) => set({ user: userData, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      deductPoints: (amount) =>
        set((state) => {
          if (state.user) {
            return { user: { ...state.user, points: state.user.points - amount } };
          }
          return state;
        }),
      addPoints: (amount) =>
        set((state) => {
          if (state.user) {
            return { user: { ...state.user, points: state.user.points + amount } };
          }
          return state;
        }),
      // A utility action to hydrate the user from the storage
      setUser: (user) => set({ user, isAuthenticated: !!user }),
    }),
    {
      name: 'gold-nightmare-user-session', // unique name for localStorage item
      storage: createJSONStorage(() => localStorage),
    }
  )
);
