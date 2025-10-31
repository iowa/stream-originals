import Image from "next/image";
import { ImageOff } from "lucide-react";
import { Title, TitleImage } from "@repo/common";

export default function TitlesPoster({ title, images, width, height }: {
  title: Title,
  images: TitleImage[],
  width: number,
  height: number
}) {
  const titleImage = images.find(value => value.type === 'poster');
  return (
    <div className="py-4 px-4">
      <div style={{ width: width, height: height, position: 'relative' }}>
        {titleImage ?
          <Image
            src={titleImage.url}
            alt={`${title.name}_poster`}
            fill
            style={{ objectFit: 'cover' }}
          />
          :
          <ImageOff size={48} className="text-gray-400"/>
        }
      </div>
    </div>
  );
}
