import { AccessorWithLatest } from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { StreamerListItem } from "./StreamerListItem";
import { TitleListDto } from "@repo/common";


export default function StreamerList({ titles }: {
  titles: AccessorWithLatest<TitleListDto[] | undefined>
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ul class="list bg-base-100 shadow-lg">
          <For each={titles()}>
            {(title) => (
              <StreamerListItem title={title}/>
            )}
          </For>
        </ul>
      </Suspense>
    </div>
  )
}