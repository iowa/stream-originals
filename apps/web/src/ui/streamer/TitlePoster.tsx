import { Show } from "solid-js";
import { TitleListDto } from "@repo/common";
import { Image } from "@unpic/solid";

export default function TitlePoster({ title }: { title: TitleListDto }) {
  return (
    <div class="flex-shrink-0">
      <Show
        when={title?.images[0]?.url}
        fallback={
          <svg width={120} height={180} class="w-auto h-[180px] bg-gray-200">
            <rect width="120" height="180" fill="#e5e7eb"/>
            <text
              x="60"
              y="90"
              text-anchor="middle"
              dominant-baseline="middle"
              font-size="16"
              fill="#6b7280"
            >
              not available
            </text>
          </svg>
        }
      >
        <Image
          src={title.images[0].url}
          alt={`${title.name}_poster`}
          width={120}
          height={180}
          class={"w-auto h-[180px]"}
        />
      </Show>
    </div>
  );
}
