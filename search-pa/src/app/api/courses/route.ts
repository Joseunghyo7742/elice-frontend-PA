import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const DATA_SOURCE_URL = 'https://api-rest.elice.io/org/academy/course/list/';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const offset = searchParams.get('offset');
  const count = searchParams.get('count');
  const urlWithParams = new URL(DATA_SOURCE_URL);
  if (offset) urlWithParams.searchParams.append('offset', offset);
  if (count) urlWithParams.searchParams.append('count', count);

  const res = await fetch(urlWithParams.toString(), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const courses = await res.json();
  return NextResponse.json(courses);
}
