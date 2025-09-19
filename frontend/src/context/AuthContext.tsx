import { createContext } from "react";


export type User = {
    id: number;
    username: string;
    email?: string;
} | null;

type AuthContextType = {
    user: User;
    loading: boolean;
    login: (credentials: { username: string; password: string }) => Promise<void>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


