import { TitleRatingPatchDto } from "@repo/common";
import { TitleUtils } from "@/lib/title/TitleUtils";
import { Star } from "lucide-react";

export default function TitleRating({ ratings }: { ratings: TitleRatingPatchDto[] }) {
  return (
    <div>
      {ratings.map((rating: TitleRatingPatchDto) => (
        <div className="flex items-center gap-2" key={rating.type}>
          <Star className="w-5 h-5 fill-yellow-500 text-yellow-500"/>
          <span className="font-semibold text-foreground">{rating.total}</span>
          <span className="text-md text-muted-foreground">
            {TitleUtils.formatVoteCount(rating.voteCount)}
          </span>
        </div>
      ))}
    </div>
  );
}
