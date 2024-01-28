'use client';
import { IoIosSearch } from 'react-icons/io';
import useDebounce from 'hooks/useDebounce';
import { useEffect, useState } from 'react';

function SearchInput() {
  const [inputValue, setInputValue] = useState('');
  const debouncedSearch = useDebounce(inputValue, 300);

  // useEffect(() => {
  //   if (debouncedSearch) {
  //     const filter_conditions = JSON.stringify({
  //       $and: [{ title: `%${debouncedSearch}%` }],
  //     });
  //   }
  // });
  return (
    <div className="my-3 bg-white overflow-hidden py-3 flex items-center border rounded border-box-border focus-within:border-elice-purple ">
      <IoIosSearch className="mx-4 text-text-black" size="16px" />
      <input
        className="flex-1 text-sm placeholder:text-[gray] outline-none"
        type="text"
        placeholder="배우고 싶은 언어, 기술을 검색해보세요"
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
