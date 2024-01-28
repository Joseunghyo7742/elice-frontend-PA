'use client';

import { EliceCourseListResponse, EliceCourse } from 'app/api/types';
import CourseCard from 'components/CourseCard';
import { useEffect, useState } from 'react';

function CourseList() {
  const [courses, setCourses] = useState<EliceCourse[]>([]);
  const [courseCount, setCourseCount] = useState<number>(0);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/courses/?offset=0&count=20`);
        const response: EliceCourseListResponse = await res.json();
        console.log('response', response);
        setCourses(response.courses);
        setCourseCount(response.course_count);
      } catch (error) {
        console.log('에러', error);
      }
    };

    getCourses();
  }, []);
  return (
    <div className="my-6 ">
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
    </div>
  );
}

export default CourseList;
