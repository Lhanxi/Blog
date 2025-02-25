"use client"
import Card from "@/components/card/Card";
import { useState, useEffect } from 'react';

async function getMessage() {
  const res = await fetch("http://localhost:3000/api/getData", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.posts || [];
}

export default function Page() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getMessage();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1 className="title">The Life of a NUS Information Systems Student</h1>
      <div className="cardContainer">
        <Card
          title="Year 1 Semester 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisci elit..."
          imageUrl="/year1-sem1.jpg"
        />
        <Card
          title="Year 1 Semester 2"
          description="Lorem ipsum dolor sit amet, consectetur adipisci elit... Lorem ipsum dolor sit amet, consectetur adipisci elit... Lorem ipsum dolor sit amet, consectetur adipisci elit... Lorem ipsum dolor sit amet, consectetur adipisci elit... Lorem ipsum dolor sit amet, consectetur adipisci elit..."
          imageUrl="/year1-sem2.jpg"
        />
        <Card
          title="Year 2 Semester 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisci elit..."
          imageUrl="/year1-sem1.jpg"
        />
        <Card
          title="Year 2 Semester 2"
          description="Lorem ipsum dolor sit amet, consectetur adipisci elit..."
          imageUrl="/year1-sem2.jpg"
        />
      </div>
    </div>
  );
}
