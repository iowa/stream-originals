import Link from "next/link";
import { TitleListDto } from "@repo/common";
import TitlesPoster from "@/ui/titles/TitlesPoster";
import TitleRating from "@/ui/title/header/TitleRating";
import TitleInterests from "@/ui/titles/TitleInterests";
import { AppConstants } from "@/lib/AppConstants";
import TitleDetails from "@/ui/titles/TitleDetails";
import TitlesCredits from "@/ui/titles/TitlesCredits";
import StreamerLogo from "@/lib/streamer/StreamerLogo";

export function TitleListItem({ title }: { title: TitleListDto }) {
  return (
    <Link href={`/title/${title.id}`}>
      <div className="card card-side bg-base-100 shadow-sm">
        <div className="flex items-center">
          <TitlesPoster title={title} images={title.images} width={144} height={216}/>
        </div>
        <div className="card-body">
          <div className="flex">
            <h2 className="card-title grow ">{title.name}</h2>
            <StreamerLogo streamer={title.streamer}/>
          </div>
          <TitleDetails titleDto={title}/>
          <TitleRating ratings={title.ratings}/>
          <TitleInterests interests={title.interests} isSubgenre={false}/>
          <p className="text-sm text-foreground leading-relaxed">
            {title.plot || AppConstants.NOT_AVAILABLE}
          </p>
          <TitlesCredits title={title}/>
        </div>
      </div>
    </Link>
  );
}