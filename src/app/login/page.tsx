"use client"
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch("http://localhost:4000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.text())
            .then((token) => {
                localStorage.setItem("token", token);
                router.push("/admin");
            })
            .catch(() => alert("Invalid credentials"));
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                placeholder="Username"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
}

