import Card from './Card';
import * as S from './Card.styles';
import { MainEventData } from '@/constants/main/MainEvent';

export default function Carousels() {
  return (
    <S.Container>
      {MainEventData.map((event) => (
        <Card
          key={event.id}
          isSun={event.isSun}
          tags={event.tags}
          title={event.title}
          startTime={event.startTime}
          endTime={event.endTime}
        />
      ))}
    </S.Container>
  );
}
