import FilterRow from 'components/SearchFilter/FilterRow';

function SearchFilter() {
  return (
    <>
      <div className="w-full border-t border-border-gray ">
        <FilterRow name="유형" filterCondition="courseType" />
        <FilterRow name="진행 방식" filterCondition="format" />
        <FilterRow name="분야" filterCondition="category" />
        <FilterRow name="난이도" filterCondition="level" />
        <FilterRow name="언어" filterCondition="programmingLanguage" />
        <FilterRow name="가격" filterCondition="price" />
      </div>
    </>
  );
}

export default SearchFilter;
