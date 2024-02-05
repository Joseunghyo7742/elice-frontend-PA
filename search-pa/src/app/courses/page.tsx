import CourseList from 'components/CourseList';
import Pagenation from 'components/Pagenation/Pagenation';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import SearchInput from 'components/SearchInput';

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
        <CourseList />
      </section>
    </>
  );
}
