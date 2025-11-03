import { CreditTitleDto } from "@repo/common";
import Image from "next/image"
import { ImageOff } from "lucide-react";
import Link from "next/link";
import { Paths } from "@/lib/Paths";
import { TitleUtils } from "@/lib/title/TitleUtils";

export default function TitleAvatar({ title }: { title: CreditTitleDto }) {
  const titlePoster = TitleUtils.titlePoster(title.images);
  return (
    <Link href={Paths.title(title.id)} passHref
          className="link link-hover overflow-hidden group">
      <div className="flex items-center gap-4">
        {titlePoster ?
          <div className="avatar">
            <div className="w-36 rounded">
              <Image
                src={titlePoster.url}
                alt={`${title.name}_poster`}
                fill={true}
                className="group-hover:brightness-90"
              />
            </div>
          </div>
          :
          <div className="flex  justify-center items-center">
            <ImageOff size={48} className="h-36 w-36 text-gray-400 group-hover:brightness-90"/>
          </div>
        }
        <div>
          <div className="font-bold">{title.name}</div>
        </div>
      </div>
    </Link>
  );
};
