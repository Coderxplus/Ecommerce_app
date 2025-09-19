import { AuthContext, User } from "./AuthContext";
import { useState, useEffect, ReactNode } from "react";
import API from "../axios/axiosSetup";
import { login as apiLogin, logout as apiLogout } from "../axios/auth";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const access = localStorage.getItem("access_token");
        if (access) {
            API.get("/api/auth/me/")
                .then((res) => setUser(res.data))
                .catch(() => {
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("refresh_token");
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (credentials: { username: string; password: string }) => {
        await apiLogin(credentials);
        const res = await API.get("/api/auth/me/");
        setUser(res.data);
    };

    const logout = async () => {
        await apiLogout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}