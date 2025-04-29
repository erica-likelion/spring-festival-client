import ImageTextIconFrame from '@/components/image-text-icon-frame/ImageTextIconFrame';
import Notification from '@/components/notification/Notification';
import Tabs from '@/components/tabs/Tabs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Performance() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState<string>('1일차');
  return (
    <>
      {/* top nav */}
      <div>
        <p>오늘의 공연</p>
        <Notification title="미성년자 입장 제한 안내" />
      </div>
      <div>
        <p>공연 시작 17:00시</p>
        {/* 아이콘 */}
      </div>
      <Tabs
        tabs={['1일차', '2일차', '3일차']}
        activeTab={selectedDay}
        onTabClick={setSelectedDay}
      />
      <div>
        {/* 캐러셀 */}
        <div>
          <p>뉴진스</p>
          <div>
            {/* 시계 */}
            <p>21:00~22:00</p>
          </div>
          <div>
            {/* 종 */}
            <p>알림 받기</p>
          </div>
        </div>
      </div>
      <div>
        <p>공연 유의사항</p>
        <ImageTextIconFrame
          image=""
          title="전체 타임 테이블 확인하기"
          description="공연 일정 한 번에 확인하기"
          onClick={() => navigate('/performance/timetable')}
        />
        <ImageTextIconFrame
          image=""
          title="❗️공연 유의사항 보러가기"
          description="공연 보기 전 필독!"
          onClick={() => navigate('/main/notice/details')}
        />
      </div>
    </>
  );
}
