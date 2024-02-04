import { FILTERING_KEYWORD_MAP } from 'app/api/constants';

//URL params를 API Query String 형식으로 바꿔주는 함수
interface Params {
  [key: string]: string[];
}
interface FilterConditions {
  $and: object[];
}
interface QueryData {
  $or: object[];
}
const DEFAULT_FILTER = [
  { $or: [{ status: 2 }, { status: 3 }, { status: 4 }] },
  { is_datetime_enrollable: true },
];

export function getApiQueryString(filter_obj: Params) {
  const filterConditions: FilterConditions = {
    $and: [...DEFAULT_FILTER],
  };
  const { category, courseType, format, keyword, level, price, programmingLanguage } = filter_obj;
  //객체 돌면서 FILTERING_KEYWORD_MAP에 맵핑되는 key-> 배열 돌면서 그것의 value값을 넣어주면된다.
  //객체를 도는 대신 구조분해할당을 쓴다. 할당되지않는 건 undefined
  if (keyword) {
    filterConditions.$and.push({ title: `%${keyword[0]}%` });
  } else {
    filterConditions.$and.push({ title: '%%' });
  }
  if (category) {
    const query_data = convertParams('category', category);
    filterConditions.$and.push(query_data);
  }
  if (courseType) {
    const query_data = convertParams('courseType', courseType);
    filterConditions.$and.push(query_data);
  }
  if (format) {
    const query_data = convertParams('format', format);
    filterConditions.$and.push(query_data);
  }
  if (level) {
    const query_data = convertParams('level', level);
    filterConditions.$and.push(query_data);
  }
  if (price) {
    const query_data = convertParams('price', price);
    filterConditions.$and.push(query_data);
  }
  if (programmingLanguage) {
    const query_data = convertParams('programmingLanguage', programmingLanguage);
    filterConditions.$and.push(query_data);
  }
  return filterConditions;
}

export function convertParams(filterType: string, filterData: string[]) {
  const queryData: QueryData = {
    $or: [],
  };
  const filterObj = FILTERING_KEYWORD_MAP[filterType];
  filterData.map((data: string) => {
    queryData.$or.push(filterObj[data].value);
  });
  return queryData;
}
