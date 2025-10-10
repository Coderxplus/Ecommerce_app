import { useState, useEffect, ReactNode } from "react";
import API from "../axios/axiosSetup";
import { logout as apiLogout } from "../axios/auth";
import { AuthContext, User } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const access = localStorage.getItem("access_token") || sessionStorage.getItem("access_token");

        if (access) {
            API.get("/auth/me", {
                headers: {
                    Authorization: `Bearer ${access}`,
                },
            })
                .then((res) => {
                    console.log("✅ Authenticated user:", res.data);
                    setUser(res.data);
                })
                .catch((err) => {
                    console.error("❌ Auth check failed:", err.response?.data || err.message);
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("refresh_token");
                    sessionStorage.removeItem("access_token");
                    sessionStorage.removeItem("refresh_token");
                    setUser(null);
                })
                .finally(() => setLoading(false));
        } else {
            console.log("ℹ️ No tokens found, skipping auth check");
            setLoading(false);
        }
    }, []);


    const logout = async () => {
        try {
            await apiLogout();
        } finally {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            setUser(null);
        }
    };


    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
