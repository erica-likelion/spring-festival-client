/**
 * @file kakao-maps.d.ts
 * @description Kakao Maps API TypeScript Declaration File
 */
declare global {
  namespace kakao {
    namespace maps {
      class Map {
        constructor(container: HTMLElement, options: MapOptions);
        setCenter(position: LatLng): void;
        getCenter(): LatLng;
        setLevel(level: number): void;
        getLevel(): number;
        setBounds(bounds: LatLngBounds, padding?: number): void;
        getBounds(): LatLngBounds;
        addControl(control: MapControl, position: ControlPosition): void;
        setDraggable(draggable: boolean): void;
        setZoomable(zoomable: boolean): void;
        relayout(): void;
      }

      interface MapOptions {
        center: LatLng;
        level: number;
        draggable?: boolean;
        zoomable?: boolean;
        scrollwheel?: boolean;
        mapTypeId?: MapTypeId;
      }

      class LatLng {
        constructor(latitude: number, longitude: number);
        toString(): string;
        getLat(): number;
        getLng(): number;
        equals(latlng: LatLng): boolean;
      }

      class LatLngBounds {
        constructor(sw?: LatLng, ne?: LatLng);
        toString(): string;
        extend(position: LatLng): LatLngBounds; // 위치를 포함하도록 경계 확장
        getSouthWest(): LatLng; // 남서쪽 좌표 반환
        getNorthEast(): LatLng; // 북동쪽 좌표 반환
      }

      class Marker {
        constructor(options: MarkerOptions);
        setPosition(position: LatLng): void;
        getPosition(): LatLng; // 마커의 위치 반환
        setMap(map: Map | null): void;
      }

      interface MarkerOptions {
        position: LatLng;
        map?: Map;
        image?: MarkerImage;
        title?: string;
        clickable?: boolean;
      }

      class MarkerImage {
        constructor(src: string, size: Size, options?: MarkerImageOptions);
      }

      interface MarkerImageOptions {
        offset?: Point;
      }

      class Size {
        constructor(width: number, height: number);
      }

      class Point {
        constructor(x: number, y: number);
      }

      class CustomOverlay {
        constructor(options: CustomOverlayOptions);
        setMap(map: Map | null): void;
        setPosition(position: LatLng): void;
        setContent(content: HTMLElement | string): void;
        getPosition(): LatLng;
        getContent(): HTMLElement;
        getMap(): Map;
      }

      interface CustomOverlayOptions {
        content: HTMLElement | string;
        map?: Map;
        position: LatLng;
        xAnchor?: number;
        yAnchor?: number;
        zIndex?: number;
      }

      class MapObject {
        setMap(map: Map | null): void;
        getMap(): Map | null;
      }

      class Polygon extends MapObject {
        constructor(options: PolygonOptions);
        getPath(): LatLng[];
        setPath(path: LatLng[]): void;
        getOptions(): PolygonOptions;
        setOptions(options: PolygonOptions): void;
      }

      interface PolygonOptions {
        path?: LatLng[];
        strokeWeight?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeStyle?: StrokeStyles;
        fillColor?: string;
        fillOpacity?: number;
        map?: Map;
      }

      type StrokeStyles =
        | 'solid'
        | 'shortdash'
        | 'shortdot'
        | 'shortdashdot'
        | 'shortdashdotdot'
        | 'dot'
        | 'dash'
        | 'dashdot'
        | 'longdash'
        | 'longdashdot'
        | 'longdashdotdot';

      namespace event {
        function addListener(target: object, type: string, handler: (e?: unknown) => void): number;

        function removeListener(listenerId: number): void;
      }

      function load(callback: () => void): void;
    }
  }
}

// 글로벌 카카오 객체 확장
declare global {
  interface Window {
    kakao: typeof kakao;
  }
}

/**
 * Kakao Map 훅에서 사용하는 옵션 타입
 * 지도 옵션을 더 간단하게 전달하기 위한 인터페이스
 */
export interface KakaoMapOptions {
  /** 지도 컨테이너에 대한 참조 */
  mapRef?: React.RefObject<HTMLDivElement | null> | undefined;
  /** 지도 중심 좌표 (위도/경도) */
  center?: {
    lat: number;
    lng: number;
  };
  /** 지도 확대 레벨 */
  level?: number;
  /** 지도 드래그 가능 여부 */
  draggable?: boolean;
  /** 지도 확대/축소 가능 여부 */
  zoomable?: boolean;
  /** 마우스 휠로 확대/축소 가능 여부 */
  scrollwheel?: boolean;
  /** 바텀시트가 열려있는지 여부 */
  isBottomSheetOpen?: boolean;
}

export {};
