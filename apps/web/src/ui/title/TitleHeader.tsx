import TitleDetails from "@/ui/titles/TitleDetails";
import StreamerLogo from "@/lib/streamer/StreamerLogo";
import AppLine from "@/ui/app/AppLine";
import TitleRatings from "@/ui/title/TitleRatings";
import { Title, TitleRatingPatchDto } from "@repo/common";

export default function TitleHeader({ title, ratings, titleSize }: {
  title: Title,
  ratings: TitleRatingPatchDto[]
  titleSize: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex justify-between">
        <div className="flex flex-col gap-2">
          <AppLine>
            <div className={`font-semibold mb-1 ${titleSize}`}>{title.name}</div>
          </AppLine>
        </div>
        <div className="flex gap-4 items-center">
          <TitleRatings ratings={ratings}/>
          <StreamerLogo streamer={title.streamer}/>
        </div>
      </div>
      <TitleDetails title={title}/>
    </div>
  );
}