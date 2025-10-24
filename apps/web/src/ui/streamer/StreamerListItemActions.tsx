import { Eye, Star } from "lucide-solid";
import StreamerListRating from "~/ui/streamer/StreamerListRating";
import { TitleRatingPatchDto } from "@repo/common";

export default function StreamerListItemActions({ ratings }: { ratings: TitleRatingPatchDto[] }) {
  return (
    <div class="flex items-center gap-4 flex-wrap">
      <StreamerListRating ratings={ratings}/>
      <button class="btn btn-ghost btn-sm gap-2">
        <Star class="w-4 h-4"/>
        Rate
      </button>
      <button class="btn btn-ghost btn-sm gap-2">
        <Eye class="w-4 h-4"/>
        Mark as watched
      </button>
    </div>
  );
}

