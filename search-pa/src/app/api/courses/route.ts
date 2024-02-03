import { EliceCourseListResponse } from 'app/api/types';
import { getApiQueryString } from 'app/api/utils';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const DATA_SOURCE_URL = 'https://api-rest.elice.io/org/academy/course/list/';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const offset = searchParams.get('offset');
  const filter_obj: { [key: string]: string[] } = {};
  //offset은 제외해야함.
  //필수 입력값인 offset 체크
  if (!offset) {
    return NextResponse.json({ error: 'offset is required' }, { status: 400 });
  }

  // filter_obj 객체화
  for (const [key] of searchParams.entries()) {
    if (key === 'offset' ) continue;
    const values = searchParams.getAll(key);
    filter_obj[key] = values;
  }
  console.log(filter_obj);  //{ courseType: [ '1' ], format: [ '4', '5' ] }

  const filter_conditions = JSON.stringify(getApiQueryString(filter_obj));
  const urlWithParams = new URL(DATA_SOURCE_URL);
  urlWithParams.searchParams.append('offset', offset);
  urlWithParams.searchParams.append('filter_conditions', filter_conditions);
  urlWithParams.searchParams.append('count', '20');

  console.log(urlWithParams);
  const res = await fetch(urlWithParams, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const courses: EliceCourseListResponse = await res.json();
  return NextResponse.json(courses);
}
