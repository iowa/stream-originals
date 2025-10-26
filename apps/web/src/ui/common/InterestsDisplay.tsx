import { For } from "solid-js";
import { InterestListDto } from "@repo/common";

export default function InterestsDisplay({ interests, isSubgenre }: {
  interests: InterestListDto[],
  isSubgenre: boolean
}) {
  const list = interests.filter(i => i.isSubgenre === (isSubgenre || null));
  return (
    <div class="flex items-center gap-2 flex-wrap">
      <For each={list}>
        {interest => <span class="badge badge-sm badge-outline">{interest.name}</span>}
      </For>
    </div>
  );
}
