import { AccessorWithLatest } from "@solidjs/router";
import { Title } from "@repo/common";
import { For, Suspense } from "solid-js";

interface StreamerListProps {
  titles: AccessorWithLatest<Title[] | undefined>
}

export default function StreamerList({ titles }: StreamerListProps) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ul class="list bg-base-100 shadow-lg">
          <For each={titles()}>
            {(title) => (
              <li class="list-row px-40 flex justify-between items-center">
                {title.name}
              </li>
            )}
          </For>
        </ul>
      </Suspense>
    </div>
  )
}