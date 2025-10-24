import { CreditPatchDto } from "@repo/common";
import { For } from "solid-js";

export function StreamerListItemCredits({ writers, stars }: {
  writers: CreditPatchDto[];
  stars: CreditPatchDto[]
}) {
  return <div class="flex gap-6 text-sm flex-wrap">
    <div class="flex gap-2">
      <span class="font-semibold text-foreground">Writers</span>
      <span class="flex gap-2 flex-wrap">
        <For each={writers}>
          {(writer) => (
            <a href="#" class="link link-primary no-underline hover:underline">
              {writer.credit.name}
            </a>
          )}
        </For>
      </span>
    </div>
    <div class="flex gap-2">
      <span class="font-semibold text-foreground">Stars</span>
      <span class="flex gap-2 flex-wrap">
        <For each={stars}>
          {(star) => (
            <a href="#" class="link link-primary no-underline hover:underline">
              {star.credit.name}
            </a>
          )}
        </For>
      </span>
    </div>
  </div>
}