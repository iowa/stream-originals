import { Title } from "@repo/common";
import { TitleUtils } from "@/lib/title/TitleUtils";

export default function TitleDetails({ title }: { title: Title }) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span>{TitleUtils.getYearRange(title.premiere, title.finale)}</span>
      <span>{TitleUtils.runtime(title.runtimeSeconds)}</span>
      <span>{TitleUtils.formatTypeDetails(title)}</span>
    </div>
  );
};
