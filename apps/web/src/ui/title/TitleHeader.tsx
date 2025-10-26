import { TitleDto } from "@repo/common";
import { TitleDateUtils } from "~/ui/title/TitleDateUtils";
import RatingDisplay from "~/ui/common/RatingDisplay";

export default function TitleHeader({ titleDto }: { titleDto: TitleDto }) {
  return (
    <div
      class="flex justify-between items-star ">
      <div class="flex flex-col gap-2">
        <div class="text-5xl font-semibold mb-1">{titleDto.name}</div>
        <div class="text-md text-neutral-200 opacity-70">
          {titleDto.type}
          <span class="mx-1">·</span>
          {TitleDateUtils.getYearRange(titleDto.premiere)}
          <span class="mx-1">·</span>
          TV-MA
          <span class="mx-1">·</span>
          50m
        </div>
      </div>
      <div class="flex gap-8 items-center">
        <div class="text-center">
          <RatingDisplay ratings={titleDto.ratings}/>
        </div>
      </div>
    </div>
  );
}
