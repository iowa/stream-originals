import { TitleCreditWithCredit } from "@repo/common";
import Image from "next/image"
import Link from "next/link";
import { Paths } from "@/lib/Paths";
import { AppCons } from "@/ui/app/AppCons";

export default function CreditAvatar({ credit }: { credit: TitleCreditWithCredit }) {
  return (
    <Link href={Paths.credit(credit.creditId)} passHref
          className="link link-hover overflow-hidden group">
      <div className="flex items-center gap-4">
        {credit.credit.imageUrl ?
          <div className="avatar">
            <div className="w-36 rounded">
              <Image
                src={credit.credit.imageUrl || ''}
                alt={`${credit.credit.name}_avatar`}
                fill={true}
                className="group-hover:brightness-90"
              />
            </div>
          </div>
          :
          <div className="flex  justify-center items-center h-36 w-36">
            {AppCons.NO_IMAGE}
          </div>
        }
        <div>
          <div className="font-bold">{credit.credit.name}</div>
        </div>
      </div>
    </Link>
  );
};
