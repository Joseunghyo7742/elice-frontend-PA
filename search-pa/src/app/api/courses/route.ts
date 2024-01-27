import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { EliceCourseListParams, EliceCourseListResponse } from 'app/api/types';
const DATA_SOURCE_URL = 'https://api-rest.elice.io/org/academy/course/list/';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const params: EliceCourseListParams = Object.fromEntries(searchParams.entries());

  const urlWithParams = new URL(DATA_SOURCE_URL);
  // const res = await fetch(urlWithParams.toString(), {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  // const courses = await res.json();
  return NextResponse.json(obj);
}
