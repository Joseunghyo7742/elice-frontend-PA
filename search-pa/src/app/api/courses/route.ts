import { EliceCourseListResponse } from 'app/api/types';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const DATA_SOURCE_URL = 'https://api-rest.elice.io/org/academy/course/list/';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const offset = searchParams.get('offset');
  const count = searchParams.get('count');
  const filter_conditions = searchParams.get('filter_conditions');

  if (!offset || !count) {
    return NextResponse.json({ error: 'offset and count are required' }, { status: 400 });
  }

  const urlWithParams = new URL(DATA_SOURCE_URL);
  urlWithParams.searchParams.append('offset', offset);
  urlWithParams.searchParams.append('count', count);
  if (filter_conditions) urlWithParams.searchParams.append('filter_conditions', filter_conditions);

  const res = await fetch(urlWithParams.toString(), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const courses: EliceCourseListResponse = await res.json();
  return NextResponse.json(courses);
}
