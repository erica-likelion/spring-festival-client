import * as S from './ImageTextFrame.styles';
import { ImageTextFrameWithTimeProps } from './ImageTextFrame.types';
import ClockIcon from '@/assets/icons/clock.svg?react';

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
 * @param {string} [width] - 프레임 너비 (예: "100%", "10rem" 등)
 * @param {boolean} [activeStyle] - 활성화 스타일 여부 (기본값: true)
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
  width,
  activeStyle = true,
}: ImageTextFrameWithTimeProps) {
  return (
    <S.Container onClick={onClick} $width={width} $activeStyle={activeStyle}>
      <S.Image src={image} alt={title} />
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
            <ClockIcon width="1.25rem" height="1.25rem" />
            <S.Time>{time}</S.Time>
          </S.TimeWrap>
          {canPickup && <S.Pickup>포장 가능</S.Pickup>}
        </S.ContentsFooter>
      </S.ContentsWrap>
    </S.Container>
  );
}
