import styled from 'styled-components';

// 마커와 라벨을 포함하는 컨테이너
export const MarkerContainer = styled.div<{ $isSelected?: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  left: 0;
  top: 0;

  /* 마커 아이콘 높이의 100% + 라벨을 고려한 조정 */
  transform: ${(props) =>
    props.$isSelected
      ? 'translate(-50%, calc(-3.66rem))'
      : 'translate(-50%, calc(-2.5rem))'}; /* 아이콘 높이만큼만 위로 이동, 라벨은 아래에 위치 */
`;

// 마커 아이콘
export const MarkerIcon = styled.img<{ $isSelected?: boolean }>`
  width: ${(props) => (props.$isSelected ? '3.66rem' : '2.5rem')};
  height: ${(props) => (props.$isSelected ? '3.66rem' : '2.5rem')};
  flex-shrink: 0;
  filter: drop-shadow(0 2px 2px rgb(0 0 0 / 30%));
  display: block;
  margin: 0 auto; /* 가운데 정렬 */
  position: relative;
  z-index: 1;
  pointer-events: auto; /* 마커 클릭 가능하도록 설정 */
  cursor: pointer;
`;

// 마커 텍스트 라벨
export const MarkerLabel = styled.div<{ $isSelected?: boolean }>`
  margin-top: 6px; /* 아이콘과의 간격 */
  padding: 0px 4px;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  text-align: center;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: auto; /* 텍스트는 클릭 가능하도록 */
  display: ${(props) => (props.$isSelected ? 'inline-block' : 'none')}; /* 선택된 경우에만 표시 */
  position: relative;
  z-index: 2000;
  text-shadow:
    0 0 1px #fff,
    0 0 2px #fff,
    1px 0 0 #fff,
    -1px 0 0 #fff,
    0 1px 0 #fff,
    0 -1px 0 #fff,
    1px 1px 0 #fff,
    -1px -1px 0 #fff; /* 흰색 테두리 효과 */
`;
