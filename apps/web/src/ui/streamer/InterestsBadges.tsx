import { For } from "solid-js";
import { Interest, InterestListDto } from "@repo/common";

export default function InterestsBadges({ interests }: { interests: InterestListDto[] }) {
  const list = interests.filter(i => i.isSubgenre === null);
  return (
    <div class="flex items-center gap-2 flex-wrap">
      <For each={list}>
        {(interest) => (
          <span class="badge badge-sm badge-outline">{interest.name}</span>
        )}
      </For>
    </div>
  );
}

