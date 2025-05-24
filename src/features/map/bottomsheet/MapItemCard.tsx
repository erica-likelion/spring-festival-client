import { ImageTextFrameWithTime } from '@/components/image-text-frame';
import { MapDataItem } from '@/constants/map/MapData';

interface MapItemCardProps {
  item: MapDataItem;
  onItemClick?: (item: MapDataItem) => void;
}

export function MapItemCard({ item, onItemClick }: MapItemCardProps) {
  return (
    <ImageTextFrameWithTime
      image={item.image}
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
