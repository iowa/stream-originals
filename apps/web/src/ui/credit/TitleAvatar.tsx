import { CreditTitleDto } from "@repo/common";
import TitlesPoster from "@/ui/titles/TitlesPoster";
import { TitleUtils } from "@/lib/title/TitleUtils";
import Link from "next/link";
import { Paths } from "@/lib/Paths";

export default function TitleAvatar({ title }: { title: CreditTitleDto }) {
  return (
    <Link href={Paths.title(title.id)}>
      <div className="card card-side bg-base-100 shadow-sm">
        <div className="flex items-center">
          <TitlesPoster title={title} width={144} height={216}/>
        </div>
        <div className="card-body">
          <h2 className="card-title text-sm">{title.name}</h2>
          <span>{TitleUtils.getYearRange(title.premiere)}</span>
        </div>
      </div>
    </Link>
  );
};
