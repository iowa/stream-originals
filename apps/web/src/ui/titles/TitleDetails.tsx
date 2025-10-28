import { TitleDto } from "@repo/common";
import { TitleUtils } from "@/lib/title/TitleUtils";
import { capitalCase } from "text-case";

export default function TitleDetails({ titleDto }: { titleDto: TitleDto }) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span>{TitleUtils.getYearRange(titleDto.premiere)}</span>
      <span>{TitleUtils.runtime(titleDto.runtimeSeconds)}</span>
      <span>{capitalCase(titleDto.type)}</span>
    </div>
  );
};
