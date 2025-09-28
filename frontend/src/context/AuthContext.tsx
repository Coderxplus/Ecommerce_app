import { createContext } from "react";


export interface User {
        id: number;
        username: string;
        email: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (credentials: { username: string; password: string }) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);


