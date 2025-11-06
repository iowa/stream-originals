import Image from "next/image";
import { Title } from "@repo/common";
import AppImageOff from "@/ui/layout/AppImageOff";

export default function TitlesPoster({ title, width, height }: {
  title: Title,
  width: number,
  height: number
}) {
  return (
    <div className="py-4 px-4">
      <div style={{ width: width, height: height, position: 'relative' }}>
        {title.imageUrl ?
          <Image
            src={title.imageUrl}
            alt={`${title.name}_poster`}
            fill
            style={{ objectFit: 'cover' }}
          />
          :
          <div className="flex items-center justify-center w-full h-full">
            <AppImageOff/>
          </div>
        }
      </div>
    </div>
  );
}
