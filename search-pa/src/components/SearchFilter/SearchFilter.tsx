import { FITERING_KEYWORD_MAP } from 'app/api/constants';
import Chip from 'components/SearchFilter/Chip';

type FilterNameType = {
  [key: string]: string;
};
const FilterName: FilterNameType = {
  courseType: '유형',
  format: '진행 방식',
  category: '분야',
  level: '난이도',
  programmingLanguage: '언어',
  price: '가격',
};
const FilteringData = FITERING_KEYWORD_MAP;

function SearchFilter() {
  return (
    <>
      <div className="w-full border-t border-border-gray ">
        {Object.entries(FilteringData).map(([categoryKey, categoryValues]) => {
          return (
            <div className="flex border-b border-l border-r border-border-gray " key={categoryKey}>
              <div className="flex justify-start pl-2 items-center border-r min-w-20 text-xs bg-table-title-bg text-text-black font-semibold">
                <h3>{FilterName[categoryKey]}</h3>
              </div>
              <div className="flex-1 flex flex-wrap px-4 py-2 bg-white">
                {Object.entries(categoryValues).map(([keyNum, { value, name }]) => {
                  return <Chip queryCategory={categoryKey} keyNum={keyNum} value={value} name={name} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SearchFilter;
