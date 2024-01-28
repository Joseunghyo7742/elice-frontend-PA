import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import { FaRegCalendar } from 'react-icons/fa6';

interface Props {
  title: string;
  isFree: boolean;
  enrollType: number;

  logoFileUrl: string | null;
  shortDescription: string;
}
function CourseCard({ enrollType, isFree, logoFileUrl, shortDescription, title }: Props) {
  return (
    <div className="flex flex-col h-[338px] w-[296px] rounded-lg bg-white py-7 px-6 shadow-md">
      <div className="flex flex-col gap-1">
        <span className="font-bold text-xs text-elice-purple">프로그래밍 기초</span>
        <h3
          className="h-14 font-bold text-text-black text-lg leading-[1.6] overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {title}
        </h3>
        <p
          className="h-12 mb-4 overflow-hidden text-sm text-text-gray leading-[1.6] "
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {shortDescription}
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center space-x-2">
            <BsGraphUp size={24} />
            <p className="text-text-icon-gray text-xs font-medium">난이도 : 미설정</p>
          </li>
          <li className="flex items-center space-x-2">
            <MdOutlineComputer size={24} />
            <p className="text-text-icon-gray text-xs font-medium">수업 : 온라인</p>
          </li>
          <li className="flex items-center space-x-2">
            <FaRegCalendar size={24} />
            <p className="text-text-icon-gray text-xs font-medium">기간 : 무제한</p>
          </li>
        </ul>
        <div className="w-[52px] h-[52px]">
          {logoFileUrl ? <img src={logoFileUrl} alt="Logo" /> : null}
        </div>
      </div>
      <hr />
      <div className="mt-4">
        {enrollType === 0 && isFree && (
          <span className="text-xs font-bold text-green-600">무료</span>
        )}
        {enrollType === 0 && !isFree && (
          <span className="text-xs font-bold text-elice-purple">유료</span>
        )}
        {enrollType === 4 && <span className="text-xs font-bold text-elice-purple">구독</span>}
        {enrollType === 5 && (
          <span className="text-xs font-bold text-elice-purple">관리자 등록</span>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
