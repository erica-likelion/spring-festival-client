import Details from './performance/Details';
import TestImage from '@/assets/images/performance/day1-newjeans.webp';

export default function Performance() {
  const data = {
    backgroundUrl: TestImage,
    singer: '뉴진스',
    time: '21:00~22:00',
    description:
      'NewJeans는 대한민국의 걸그룹이다. 민지, 하니, 다니엘, 해린, 혜인 5인조로 구성되어 있다. 민희진이 프로듀싱을 맡았으며, 이들은 1990년대와 2000년대의 복고풍 레트로 음악 스타일을 현대적 시대에 맞게 재구성한 그룹이다.',
    songList: [
      { image: TestImage, name: 'OMG' },
      { image: TestImage, name: 'Hype' },
      { image: TestImage, name: 'Ditto' },
      { image: TestImage, name: 'Attention' },
      { image: TestImage, name: 'Cookie' },
    ],
  };
  return (
    <>
      {/**공연 */}
      <Details
        backgroundUrl={data.backgroundUrl}
        singer={data.singer}
        time={data.time}
        description={data.description}
        songList={data.songList}
      />
    </>
  );
}
