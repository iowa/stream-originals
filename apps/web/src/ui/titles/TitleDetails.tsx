import { TitleType } from "@repo/common";
import { TitleUtils } from "@/lib/title/TitleUtils";
import { capitalCase } from "text-case";

export default function TitleDetails({ premiere, runtimeSeconds, type }: {
  premiere: string | null,
  runtimeSeconds: number | null,
  type: TitleType
}) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span>{TitleUtils.getYearRange(premiere)}</span>
      <span>{TitleUtils.runtime(runtimeSeconds)}</span>
      <span>{capitalCase(type)}</span>
    </div>
  );
};
