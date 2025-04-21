import * as S from './ImageTextFrame.styles';
import { ImageTextFrameWithTimeProps } from './ImageTextFrame.types';

/**
 * 이미지와 텍스트, 시간, 포장가능 여부를 함께 표시하는 프레임 컴포넌트
 *
 * @component
 * @param {string} image - 표시할 이미지 URL
 * @param {string} title - 주요 제목
 * @param {string} subtitle - 부제목
 * @param {string} time - 시간 정보 텍스트
 * @param {boolean} [canPickup] - 포장 가능 여부 (기본값: false)
 * @param {Function} [onClick] - 프레임 클릭 시 실행할 콜백 함수
 * @returns {React.ReactElement} 이미지와 텍스트, 시간 정보가 포함된 프레임 컴포넌트
 *
 * @example
 * // 기본 사용법
 * <ImageTextFrameWithTime
 *   image="/path/to/image.webp"
 *   title="기가막힌주점"
 *   subtitle="주점"
 *   time="16:00-23:00"
 *   canPickup={true}
 *   onClick={() => handleClick()}
 * />
 */
export default function ImageTextFrameWithTime({
  image,
  title,
  subtitle,
  time,
  canPickup = false,
  onClick,
}: ImageTextFrameWithTimeProps) {
  return (
    <S.Container onClick={onClick}>
      <S.Image src={image} alt="" />
      <S.ContentsWrap>
        <S.TitleWrap>
          <S.Title>{title}</S.Title>
          {subtitle && (
            <>
              <S.TitleDivider />
              <S.SubTitle>{subtitle}</S.SubTitle>
            </>
          )}
        </S.TitleWrap>
        <S.ContentsFooter>
          <S.TimeWrap>
            <S.TimeIcon src="src/assets/icons/clock.svg" />
            <S.Time>{time}</S.Time>
          </S.TimeWrap>
          {canPickup && <S.Pickup>포장 가능</S.Pickup>}
        </S.ContentsFooter>
      </S.ContentsWrap>
    </S.Container>
  );
}
