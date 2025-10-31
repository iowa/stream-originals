import { TitleCreditWithCredit } from "@repo/common";
import Image from "next/image"
import { ImageOff } from "lucide-react";

export default function CreditAvatar({ credit }: { credit: TitleCreditWithCredit }) {
  return (
    <div className="flex items-center gap-4">
      {credit.credit.primaryImageUrl ?
        <div className="avatar">
          <div className="w-36 rounded">
            <Image
              src={credit.credit.primaryImageUrl || ''}
              alt={`${credit.credit.name}_avatar`}
              fill={true}
            />
          </div>
        </div>
        :
        <div className="flex  justify-center items-center">
          <ImageOff size={48} className="h-36 w-36 text-gray-400"/>
        </div>
      }
      <div>
        <div className="font-bold">{credit.credit.name}</div>
      </div>
    </div>

  );
};
