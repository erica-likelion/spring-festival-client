/**
 * 바텀시트 위치 및 크기 관련 상수
 *
 * @module BottomSheetOptions
 */

/**
 * 바텀 시트가 최대로 올라 갔을 때의 Y좌표 값 (화면 최상단에서 떨어진 정도)
 * 상단에 항상 일정 영역을 남겨두기 위한 값입니다.
 * @constant {number}
 */
export const MIN_Y = 124;

/**
 * 바텀 시트가 최대로 내려갔을 때의 Y좌표 값
 * 화면 하단에서 시작하는 위치를 결정합니다.
 * @constant {number}
 */
export const MAX_Y = window.innerHeight - 260;

/**
 * 바텀시트의 높이
 * 전체 화면 높이(100vh)로 설정하여 콘텐츠가 많을 경우 스크롤이 가능하도록 합니다.
 * @constant {string}
 */
export const BOTTOM_SHEET_HEIGHT = '100vh';
