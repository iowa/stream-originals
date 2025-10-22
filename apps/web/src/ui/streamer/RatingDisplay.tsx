import { TitleListDto } from "@repo/common";
import { Star } from "lucide-solid";
import { For, Show } from "solid-js";

export default function RatingDisplay({ title }: { title: TitleListDto }) {
  return (
    <div>
      <For each={title.ratings}>
        {(rating) => (
          <div class="flex items-center gap-2">
            <Star class="w-5 h-5 fill-yellow-500 text-yellow-500"/>
            <span class="font-semibold text-foreground">{rating.total}</span>
            <Show
              when={rating.voteCount != null}
              fallback={<span class="text-sm text-muted-foreground">(~)</span>}
            >
              <span class="text-sm text-muted-foreground">
                {`(${Math.floor(rating.voteCount! / 1000)}K)`}
              </span>
            </Show>
          </div>
        )}
      </For>
    </div>
  );
}
