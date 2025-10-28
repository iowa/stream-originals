import { TitleDto } from "@repo/common";
import { TitleUtils } from "@/lib/title/TitleUtils";
import TitleRating from "@/ui/title/header/TitleRating";

export default function TitleHeader({ titleDto }: { titleDto: TitleDto }) {
  return (
    <div
      className="flex justify-between items-star ">
      <div className="flex flex-col gap-2">
        <div className="text-5xl font-semibold mb-1">{titleDto.name}</div>
        <div className="text-md">
          {titleDto.type}
          <span className="mx-1">·</span>
          {TitleUtils.getYearRange(titleDto.premiere)}
          <span className="mx-1">·</span>
          50m
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className="text-center">
          <TitleRating ratings={titleDto.ratings}/>
        </div>
      </div>
    </div>
  );
}