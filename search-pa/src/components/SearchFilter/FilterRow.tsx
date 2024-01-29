import { FILTERING_KEYWORD_MAP } from 'app/api/constants';
import Chip from 'components/SearchFilter/Chip';
import React from 'react';

type FilterConditionType =
  | 'courseType'
  | 'format'
  | 'category'
  | 'level'
  | 'programmingLanguage'
  | 'price';
interface Props {
  name: string;
  filterCondition: FilterConditionType;
}

function FilterRow({ name, filterCondition }: Props) {
  const chipList = Object.entries(FILTERING_KEYWORD_MAP[filterCondition]);

  return (
    <div className="flex border-b border-l border-r border-border-gray ">
      <div className="flex justify-start pl-2 items-center border-r min-w-20 text-xs bg-table-title-bg text-text-black font-semibold">
        <h3>{name}</h3>
      </div>
      <div className="flex-1 flex flex-wrap px-4 py-2 bg-white">
        {chipList.map(([id, chip]) => {
          return (
            <Chip
              key={id}
              id={id}
              name={chip.name}
              value={chip.value}
              filterCondition={filterCondition}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FilterRow;
