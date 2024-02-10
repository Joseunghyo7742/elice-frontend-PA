import Loading from 'app/courses/loading';
import CourseList from 'components/CourseList';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import SearchInput from 'components/SearchInput';
import { Suspense } from 'react';

export default function CourseSearch() {
  return (
    <>
      {/* SearchArea */}
      <section>
        <SearchInput />
        <SearchFilter />
      </section>
      {/* SearchLists */}
      <section>
        {/* <Suspense fallback={<Loading />}> */}
          <CourseList />
        {/* </Suspense> */}
      </section>
    </>
  );
}
