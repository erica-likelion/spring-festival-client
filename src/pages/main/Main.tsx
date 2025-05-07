import { Link } from 'react-router-dom';
import ipadImage from '@/assets/images/performance/day1-newjeans.webp';

export default function LostList() {
  const item = {
    imageUrl: ipadImage,
    name: '아이패드',
    isDeliveredToStaff: true,
    location: '잔디공원 앞 흔들그네',
    day: '1일차',
    time: '16:00~18:00',
    description: '아이패드 배경화면이 굉장히 귀여움',
  };

  return (
    <Link to="/main/lost/post" state={item}>
      <div>
        <img src={item.imageUrl} alt={item.name} width={100} />
        <p>{item.name}</p>
      </div>
    </Link>
  );
}
