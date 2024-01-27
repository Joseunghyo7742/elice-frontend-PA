import CourseList from 'components/CourseList';
import SearchFilter from 'components/SearchFilter';
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
