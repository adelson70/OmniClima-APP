import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

const secureStorageAdapter: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        return await SecureStore.getItemAsync(name);
    },
    setItem: async (name: string, value: string): Promise<void> => {
        return await SecureStore.setItemAsync(name, value);
    },
    removeItem: async (name: string): Promise<void> => {
        return await SecureStore.deleteItemAsync(name);
    },
};

interface UserData {
    id: string | null;
    fisrtName: string | null;
    lastName: string | null;
    email: string | null;
    admin: boolean | null;
}

interface AuthState {
    token: string | null;
    user: UserData | null;
    publicKey: string | null;
    privateKey: string | null;
    isAuthenticated: boolean;
    isHydrated: boolean;

    setAuthData: (token: string, user: UserData) => void;
    setKeypair: (publicKey: string, privateKey: string) => void;
    setHydrated: (state: boolean) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            publicKey: null,
            privateKey: null,
            isAuthenticated: false,
            isHydrated: false,

            setAuthData: (token, user) => set({
                token: token,
                user: user,
                isAuthenticated: true
            }),

            setKeypair: (publicKey, privateKey) => set({ publicKey, privateKey }),
            setHydrated: (state) => set({ isHydrated: state }),

            logout: () => set({
                token: null,
                user: null,
                isAuthenticated: false
            }),
        }),
        {
            name: 'omniclima-auth-secure-storage',
            storage: createJSONStorage(() => secureStorageAdapter),
            onRehydrateStorage: (state) => {
                return () => state?.setHydrated(true);
            },
        }
    )
);