import { CreditTitleDto } from "@repo/common";
import Link from "next/link";
import { Paths } from "@/lib/Paths";
import TitlesPoster from "@/ui/titles/TitlesPoster";

export default function TitleAvatar({ title }: { title: CreditTitleDto }) {
  return (
    <Link href={Paths.title(title.id)} passHref
          className="link link-hover overflow-hidden group">
      <div className="flex items-center gap-4">
        <TitlesPoster title={title} images={title.images} width={144} height={216}/>
        <div>
          <div className="font-bold">{title.name}</div>
        </div>
      </div>
    </Link>
  );
};
