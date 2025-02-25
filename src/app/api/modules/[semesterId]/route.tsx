import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const segments = request.nextUrl.pathname.split('/');
    const semesterId = segments[segments.length - 1];

    if (!semesterId) {
        return NextResponse.json({ error: 'Missing semesterId' }, { status: 400 });
    }

    try {
        const response = await fetch(`http://localhost:8080/posts/${semesterId}`, {
            method: 'GET',
        });

        if (!response.ok) {
            console.error('Failed to fetch data from Go backend');
            return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
        }

        const result = await response.json();
        return NextResponse.json(result, { status: response.status });
    } catch (error) {
        console.error('Error fetching data from Go backend:', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
