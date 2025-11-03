import Image from "next/image";
import { ImageOff } from "lucide-react";
import { Credit } from "@repo/common";

export default function CreditPoster({ credit, width, height }: {
  credit: Credit,
  width: number,
  height: number
}) {
  return (
    <div className="py-4 px-4">
      <div style={{ width: width, height: height, position: 'relative' }}>
        {credit.primaryImageUrl ?
          <Image
            src={credit.primaryImageUrl}
            alt={`${credit.name}_poster`}
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
