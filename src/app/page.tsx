"use client"
import Card from "@/components/card/Card";
import { useState, useEffect } from 'react';

async function getSemesters() {
  const res = await fetch("http://localhost:3000/api/getData", {
    cache: "no-store",
  });
  const data = await res.json();
  return data || [];
}

export default function Page() {
  const [semesters, setSemesters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSemesters = async () => {
      const semesterData = await getSemesters();
      setSemesters(semesterData);
      setLoading(false);
    };

    fetchSemesters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1 className="title">The Life of a NUS Information Systems Student</h1>
      <div className="cardContainer">
        {semesters.map((semester) => (
          <Card
            key={semester.id}
            title={semester.title}
            description="Lorem ipsum dolor sit amet, consectetur adipisci elit..."
            imageUrl="/year1-sem1.jpg"
            link={`/semesters/${semester.id}/${encodeURIComponent(semester.title)}`}
          />
        ))}
      </div>
    </div>
  );
}
