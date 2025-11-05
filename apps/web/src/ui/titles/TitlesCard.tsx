"use client"

import { TitleListDto } from "@repo/common";
import TitlesPoster from "@/ui/titles/TitlesPoster";
import TitleInterests from "@/ui/titles/TitleInterests";
import { AppConstants } from "@/lib/AppConstants";
import TitleDetails from "@/ui/titles/TitleDetails";
import TitlesCredits from "@/ui/titles/TitlesCredits";
import StreamerLogo from "@/lib/streamer/StreamerLogo";
import { Paths } from "@/lib/Paths";
import { useRouter } from "next/navigation";
import TitleRatings from "@/ui/title/TitleRatings";

export function TitlesCard({ title }: { title: TitleListDto }) {
  const router = useRouter();

  return (
    <div className="card card-side bg-base-100 border-1 border-base-300 shadow-sm cursor-pointer card-sm rounded-none"
         onClick={e => {
           const target = e.target as HTMLElement;
           if (target.closest("a")) return;
           router.push(Paths.title(title.id));
         }}
    >
      <div className="flex items-center">
        <TitlesPoster title={title} images={title.images} width={100.8} height={151.2}/>
      </div>
      <div className="card-body">
        <div className="flex">
          <h2 className="card-title grow ">{title.name}</h2>
          <StreamerLogo streamer={title.streamer}/>
        </div>
        <TitleDetails title={title}/>
        <TitleRatings ratings={title.ratings}/>
        <TitleInterests interests={title.interests} withSubgenres={false}/>
        <div className="text-sm text-foreground leading-relaxed">
          {title.plot || AppConstants.NOT_AVAILABLE}
        </div>
        <TitlesCredits title={title}/>
      </div>
    </div>
  );
}