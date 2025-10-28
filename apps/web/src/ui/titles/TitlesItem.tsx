import Link from "next/link";
import { TitleListDto } from "@repo/common";
import TitlesPoster from "@/ui/titles/TitlesPoster";
import TitleRating from "@/ui/title/header/TitleRating";
import TitleInterests from "@/ui/titles/TitleInterests";
import { AppConstants } from "@/lib/AppConstants";
import TitleDetails from "@/ui/titles/TitleDetails";

export function TitlesItem({ title }: { title: TitleListDto }) {
  return (
    <Link href={`/title/${title.id}`}>
      <div className="card card-side bg-base-100 shadow-sm">
        <div>
          <TitlesPoster title={title}/>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title.name}</h2>
          <TitleDetails titleDto={title}/>
          <TitleRating ratings={title.ratings}/>
          <TitleInterests interests={title.interests} isSubgenre={false}/>
          <p className="text-sm text-foreground leading-relaxed">
            {title.plot || AppConstants.NOT_AVAILABLE}
          </p>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </Link>
  );
}