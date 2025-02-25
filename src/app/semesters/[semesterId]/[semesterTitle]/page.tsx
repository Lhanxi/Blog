"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Module {
    id: number;
    title: string;
    lecturer: string;
    overview: string;
    topics: string;
    assessments: string;
    remarks: string;
}

interface SemesterPageProps {
    semesterId: string;
    semesterTitle: string;
}

const SemesterPage = () => {
    const { semesterId, semesterTitle } = useParams();

    const [modules, setModules] = useState<Module[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchModules = async () => {
            const res = await fetch(`http://localhost:3000/api/modules/${semesterId}`);
            const modulesData = await res.json();
            setModules(modulesData);
            setLoading(false);
        };

        fetchModules();
    }, [semesterId, semesterTitle]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>{semesterTitle} (ID: {semesterId})</h1>
            <div>
                {modules.length === 0 ? (
                    <p>No modules available for this semester.</p>
                ) : (
                    modules.map((module) => (
                        <div key={module.id}>
                            <h2>{module.title}</h2>
                            <p>{module.lecturer}</p>
                            <Link href={`/modules/${module.id}`}>
                                Continue Reading →
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SemesterPage;
