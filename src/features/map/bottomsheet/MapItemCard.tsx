import { ImageTextFrameWithTime } from '@/components/image-text-frame';
import { useImagePath } from '@/hooks/useImagePath';
import { MapDataItem } from '@/constants/map/MapData';

interface MapItemCardProps {
  item: MapDataItem;
  onItemClick?: (item: MapDataItem) => void;
}

export function MapItemCard({ item, onItemClick }: MapItemCardProps) {
  const imagePath = useImagePath(item.image, item.subtitle === '주점' ? 'booth' : 'map');

  return (
    <ImageTextFrameWithTime
      image={imagePath}
      title={item.title}
      subtitle={item.subtitle}
      time={item.time}
      path={item.path}
      onClick={() => {
        if (onItemClick && item.lat && item.lng) {
          onItemClick(item);
        }
      }}
    />
  );
}
