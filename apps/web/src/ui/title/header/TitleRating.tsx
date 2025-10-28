import { Star } from "lucide-react";
import { TitleRatingPatchDto } from "@repo/common";
import { TitleUtils } from "@/lib/title/TitleUtils";
import { AppConstants } from "@/lib/AppConstants";

export default function TitleRating({ ratings }: { ratings: TitleRatingPatchDto[] }) {
  if (!ratings?.length) {
    return (
      <div className="flex items-center gap-2">
        <TitleRatingItem type="not-available"/>
      </div>
    );
  }

  return (
    <div>
      {ratings.map(({ type, total, voteCount }) => (
        <TitleRatingItem key={type} type={type} total={total} voteCount={voteCount}/>
      ))}
    </div>
  );
}


interface TitleRatingItemProps {
  type: string;
  total?: string | null;
  voteCount?: number | null;
}

export function TitleRatingItem({ type, total, voteCount }: TitleRatingItemProps) {
  return (
    <div className="flex items-center gap-2" key={type}>
      <Star className="w-5 h-5 fill-yellow-500 text-yellow-500"/>
      <span className="font-semibold text-foreground">{total || AppConstants.NOT_AVAILABLE}</span>
      <span className="text-md text-muted-foreground">
        {TitleUtils.formatVoteCount(voteCount)}
      </span>
    </div>
  );
}
