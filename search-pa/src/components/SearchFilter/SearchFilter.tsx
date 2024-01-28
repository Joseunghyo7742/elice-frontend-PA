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
const FilterData = {
  courseType: ['과목', '챌린지', '테스트'],
  format: ['자유 선택형', '순차 완료형'],
  category: ['프로그래밍 기초', '데이터 분석', '웹', '인공지능', '알고리즘'],
  level: ['입문', '초급', '중급', '고급'],
  programmingLanguage: [
    'C',
    'C++',
    '자바',
    '파이썬',
    '자바스크립트',
    'R',
    'HTML/CSS',
    'SQL',
    '아두이노',
    '스크래치',
  ],
  price: ['무료', '유료', '구독'],
};

function SearchFilter() {
  return (
    <>
      <div className="w-full border-t border-border-gray ">
        {Object.entries(FilterData).map(([type, values], idx) => {
          return (
            <div className="flex border-b border-l border-r border-border-gray " key={idx}>
              <div className="flex justify-start pl-2 items-center border-r min-w-20 text-xs bg-table-title-bg text-text-black font-semibold">
                <h3>{FilterName[type]}</h3>
              </div>
              <div className="flex-1 flex flex-wrap px-4 py-2 bg-white">
                {values.map(chip => {
                  return <Chip queryCategory={type} name={chip} />;
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
