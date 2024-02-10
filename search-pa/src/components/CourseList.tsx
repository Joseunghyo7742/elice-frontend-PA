'use client';

import { EliceCourseListResponse } from 'app/api/types';
import CourseCard from 'components/CourseCard';
import Pagenation from 'components/Pagenation/Pagenation';
import { MIN_PAGE_INDEX, limit } from 'constant';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

function CourseList() {
  const [page, setPage] = useState<number>(MIN_PAGE_INDEX);
  const offset = (page - 1) * limit; //페이지시작인덱스
  const searchParams = useSearchParams().toString(); //현재 params값을 가져오기 위함

  const { isLoading, data, error } = useQuery({
    queryKey: ['courses', searchParams, offset],
    queryFn: (): Promise<EliceCourseListResponse> =>
      fetch(`http://localhost:3000/api/courses/?${searchParams}&offset=${offset}`).then(res =>
        res.json(),
      ),
    // suspense: true,
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const handlePagenationClick = () => {
    if (scrollRef) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  //필터 변경 시, offset 초기화 필요.
  useEffect(() => {
    setPage(MIN_PAGE_INDEX);
  }, [searchParams]);

  if (isLoading) {
    return <></>;
  }
  if (error || !data) {
    return <div>에러가 발생했습니다.</div>;
  }
  //에러반환값이면?
  return (
    <div className="my-6">
      <div ref={scrollRef} className="text-xs font-semibold text-text-black mb-4">
        전체 {data?.course_count}개
      </div>
      <hr />
      <ul className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data?.courses.map(course => (
          <li key={course.id}>
            <CourseCard
              enrollType={course.enroll_type}
              isFree={course.is_free}
              logoFileUrl={course.logo_file_url}
              shortDescription={course.short_description}
              title={course.title}
            />
          </li>
        ))}
      </ul>
      <div onClick={handlePagenationClick} className="w-56 mx-auto mt-6">
        <Pagenation total={data?.course_count} limit={limit} page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default CourseList;
