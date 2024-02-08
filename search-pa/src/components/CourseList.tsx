'use client';

import { EliceCourseListResponse, EliceCourse } from 'app/api/types';
import CourseCard from 'components/CourseCard';
import Pagenation from 'components/Pagenation/Pagenation';
import { limit } from 'constant';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function CourseList() {
  //페이지 변경 시, offset 초기화 필요.
  const [courses, setCourses] = useState<EliceCourse[]>([]);
  const [courseCount, setCourseCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * limit; //페이지시작인덱스
  const searchParams = useSearchParams().toString(); //현재 params값을 가져오기 위함

  const getCourse = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/courses/?${searchParams}&offset=${offset}`);
      const response: EliceCourseListResponse = await res.json();
      setCourses(response.courses);
      setCourseCount(response.course_count);
    } catch (error) {
      console.log('에러');
    }
  };
  useEffect(() => {
    getCourse();
  }, [searchParams, page]);

  return (
    <div className="my-6">
      <div className="text-xs font-semibold text-text-black mb-4">전체 {courseCount}개</div>
      <hr />
      <ul className="mt-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {courses.map(course => (
          <li>
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
      <div className="w-56 mx-auto mt-6">
        <Pagenation total={courseCount} limit={limit} page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default CourseList;
