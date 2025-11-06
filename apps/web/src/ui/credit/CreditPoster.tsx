import Image from "next/image";
import { Credit } from "@repo/common";
import AppImageOff from "@/ui/layout/AppImageOff";

export default function CreditPoster({ credit, width, height }: {
  credit: Credit,
  width: number,
  height: number
}) {
  return (
    <div className="py-4 px-4">
      <div style={{ width: width, height: height, position: 'relative' }}>
        {credit.imageUrl ?
          <Image
            src={credit.imageUrl}
            alt={`${credit.name}_poster`}
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
