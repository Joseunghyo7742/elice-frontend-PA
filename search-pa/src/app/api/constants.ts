type FilteringKeywordMap = {
  [key: string]: {
    [key: string]: { name: string; value: object[] | object };
  };
};

export const FILTERING_KEYWORD_MAP: FilteringKeywordMap = {
  courseType: {
    '1': {
      value: { $or: [{ course_type: 0 }, { course_type: 2 }] },
      name: '과목',
    },
    '2': { value: { course_type: 1 }, name: '챌린지' },
    '3': { value: { course_type: 3 }, name: '테스트' },
  },

  format: {
    '4': { value: { course_type: 0 }, name: '자유 선택형' },
    '5': { value: { course_type: 2 }, name: '순차 완료형' },
  },
  category: {
    '6': { value: { tag_id: 12 }, name: '프로그래밍 기초' },
    '7': { value: { tag_id: 13 }, name: '데이터 분석' },
    '8': { value: { tag_id: 14 }, name: '웹' },
    '9': { value: { tag_id: 22 }, name: '인공지능' },
    '10': { value: { tag_id: 23 }, name: '알고리즘' },
  },
  level: {
    '11': { value: { tag_id: 100 }, name: '입문' },
    '12': { value: { tag_id: 101 }, name: '초급' },
    '13': { value: { tag_id: 102 }, name: '중급' },
    '14': { value: { tag_id: 103 }, name: '고급' },
    '15': { value: { tag_id: 104 }, name: '심화' },
  },
  programmingLanguage: {
    '16': { value: { tag_id: 7 }, name: 'C' },
    '17': { value: { tag_id: 8 }, name: 'C++' },
    '18': { value: { tag_id: 9 }, name: '자바' },
    '19': { value: { tag_id: 10 }, name: '파이썬' },
    '20': { value: { tag_id: 19 }, name: '자바스크립트' },
    '21': { value: { tag_id: 20 }, name: 'R' },
    '22': { value: { tag_id: 21 }, name: 'HTML/CSS' },
    '23': { value: { tag_id: 24 }, name: 'SQL' },
    '24': { value: { tag_id: 25 }, name: '아두이노' },
    '25': { value: { tag_id: 26 }, name: '스크래치' },
    '26': { value: { tag_id: 28 }, name: '코틀린' },
    '27': { value: { tag_id: 29 }, name: '스위프트' },
  },
  price: {
    '26': {
      value: { enroll_type: 0, is_free: true },
      name: '무료',
    },
    '27': {
      value: { enroll_type: 0, is_free: false },
      name: '유료',
    },
    '28': { value: { enroll_type: 4 }, name: '구독' },
    '29': { value: { enroll_type: 6 }, name: '크레딧' },
  },
};
