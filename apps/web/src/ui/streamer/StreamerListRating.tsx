import { TitleRatingPatchDto } from "@repo/common";
import { Star } from "lucide-solid";
import { For } from "solid-js";
import { StreamerListUtils } from "~/ui/streamer/streamerListUtils";

export default function StreamerListRating({ ratings }: { ratings: TitleRatingPatchDto[] }) {
  return (
    <div>
      <For each={ratings}>
        {(rating) => (
          <div class="flex items-center gap-2">
            <Star class="w-5 h-5 fill-yellow-500 text-yellow-500"/>
            <span class="font-semibold text-foreground">{rating.total}</span>
            <span class="text-sm text-muted-foreground">
              {StreamerListUtils.formatVoteCount(rating.voteCount)}
            </span>
          </div>
        )}
      </For>
    </div>
  );
}
