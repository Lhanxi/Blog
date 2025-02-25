"use client"

import { useState } from "react";

export default function Blog() {

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const response = await fetch("/api/getData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ inputValue }),
            });
            if (response.ok) {
                alert("Input saved successfully!");
                setInputValue("");
            } else {
                alert("Failed to save input");
            }
        } catch (error) {
            console.error("Error saving input:", error);
        }
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <h1>
                    Blog
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative w-[400px]">
                        <input
                            className="w-full h-12 pl-3 pr-16 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            placeholder="Type here..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-slate-800 py-2 px-4 border border-transparent text-sm text-white rounded shadow-sm hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div >
        </>
    );
};