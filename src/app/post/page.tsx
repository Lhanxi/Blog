"use client"

import { useEffect, useState } from "react";

type PostData = {
    id: number;
    input_value: string;
    created_at: string;
};

export default function Post() {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("/api/getData");
                if (response.ok) {
                    const result = await response.json();
                    setPosts(result.data);
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h1>Post Data</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.input_value}
                    </li>
                ))}
            </ul>
        </div>
    );
}
