import { TitleDto } from "@repo/common";
import TitleRatings from "@/ui/title/header/TitleRatings";
import TitleDetails from "@/ui/titles/TitleDetails";

export default function TitleHeader({ title }: { title: TitleDto }) {
  return (
    <div
      className="flex justify-between items-star ">
      <div className="flex flex-col gap-2">
        <div className="text-5xl font-semibold mb-1">{title.name}</div>
        <TitleDetails titleDto={title}/>
      </div>
      <div className="flex gap-8 items-center">
        <div className="text-center">
          <TitleRatings ratings={title.ratings}/>
        </div>
      </div>
    </div>
  );
}