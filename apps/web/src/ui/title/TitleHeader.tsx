import { TitleDto } from "@repo/common";
import TitleDetails from "@/ui/titles/TitleDetails";
import StreamerLogo from "@/lib/streamer/StreamerLogo";
import AppLine from "@/ui/layout/AppLine";
import TitleRatings from "@/ui/title/TitleRatings";

export default function TitleHeader({ title }: { title: TitleDto }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex justify-between">
        <div className="flex flex-col gap-2">
          <AppLine>
            <div className="text-5xl font-semibold mb-1">{title.name}</div>
          </AppLine>
        </div>
        <div className="flex gap-4 items-center">
          <TitleRatings ratings={title.ratings}/>
          <StreamerLogo streamer={title.streamer}/>
        </div>
      </div>
      <TitleDetails title={title}/>
    </div>
  );
}