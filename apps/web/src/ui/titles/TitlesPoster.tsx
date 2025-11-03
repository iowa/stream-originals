import Image from "next/image";
import { ImageOff } from "lucide-react";
import { Title, TitleImage } from "@repo/common";
import { TitleUtils } from "@/lib/title/TitleUtils";
import AppImageOff from "@/ui/layout/AppImageOff";

export default function TitlesPoster({ title, images, width, height }: {
  title: Title,
  images: TitleImage[],
  width: number,
  height: number
}) {
  const titlePoster = TitleUtils.titlePoster(images);
  return (
    <div className="py-4 px-4">
      <div style={{ width: width, height: height, position: 'relative' }}>
        {titlePoster ?
          <Image
            src={titlePoster.url}
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
