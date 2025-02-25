import { NextResponse } from 'next/server';

/*
export async function POST(req: Request) {
  try {
    const { inputValue } = await req.json();

    if (!inputValue || typeof inputValue !== 'string') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const response = await fetch('http://localhost:8080/api/user-input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputValue }),
    });

    const result = await response.json();
    return NextResponse.json(result, { status: response.status });
  } catch (error) {
    console.error('Error sending input to Go backend:', error);
    return NextResponse.json({ error: 'Failed to save input' }, { status: 500 });
  }
}
  */

export async function GET() {
  try {
    const response = await fetch('http://localhost:8080/api/semesters', {
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

