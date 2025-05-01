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
        setBounds(bounds: LatLngBounds): void;
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

      class MapTypeControl implements MapControl {}
      class ZoomControl implements MapControl {}

      enum ControlPosition {
        TOPRIGHT = 2,
        RIGHT = 4,
      }

      enum MapTypeId {
        ROADMAP = 'ROADMAP',
        SKYVIEW = 'SKYVIEW',
        HYBRID = 'HYBRID',
      }

      class LatLng {
        constructor(latitude: number, longitude: number);
        toString(): string;
      }

      class LatLngBounds {
        constructor(sw: LatLng, ne: LatLng);
        toString(): string;
      }

      class Marker {
        constructor(options: MarkerOptions);
        setPosition(position: LatLng): void;
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

      namespace event {
        function addListener(
          target: object, // 'any' 대신 'object' 사용
          type: string,
          handler: (e?: unknown) => void, // Function 대신 구체적인 함수 타입
        ): void;
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

export {};
