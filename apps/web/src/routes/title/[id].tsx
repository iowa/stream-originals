import { For, Show } from "solid-js";
import { createAsync, useParams } from "@solidjs/router";
import { getTitle } from "~/lib/titles/TitlesAction";
import { TitleListDto } from "@repo/common";

export default function TitleView() {
  const { id } = useParams();
  const titleData = createAsync<TitleListDto | undefined>(() => getTitle(id));

  return (
    <Show when={titleData()} fallback={<>
      Not Found
    </>}>
      <div class="flex justify-center py-10">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{titleData()?.name}</h2>
            <p class="text-sm text-gray-500 mb-2">{titleData()?.plot}</p>
            <div class="mb-2">
              <span class="badge badge-primary">{titleData()?.type}</span>
              <span class="badge badge-secondary ml-2">{titleData()?.streamer}</span>
              <span class="badge badge-accent ml-2">{titleData()?.premiere}</span>
            </div>
            <div class="mb-4">
              <h3 class="font-bold">Genres</h3>
              <div class="flex flex-wrap gap-2">
                <For each={titleData()?.interests}>{(g) => (
                  <span class="badge badge-outline">{g.name}</span>
                )}</For>
              </div>
            </div>
            <div class="mb-4">
              <h3 class="font-bold">Stars</h3>
              <ul>
                <For each={titleData()?.stars}>{(s) => (
                  <li>{s.credit.name}</li>
                )}</For>
              </ul>
            </div>
            <div class="mb-4">
              <h3 class="font-bold">Writers</h3>
              <ul>
                <For each={titleData()?.writers}>{(w) => (
                  <li>{w.credit.name}</li>
                )}</For>
              </ul>
            </div>
            <div class="mb-4">
              <h3 class="font-bold">Directors</h3>
              <ul>
                <For each={titleData()?.directors}>{(d) => (
                  <li>{d.credit.name}</li>
                )}</For>
              </ul>
            </div>
            <div class="mb-4">
              <h3 class="font-bold">Ratings</h3>
              <ul>
                <For each={titleData()?.ratings}>{(r) => (
                  <li>
                    {r.type.toUpperCase()}: {r.total} ({r.voteCount} votes)
                  </li>
                )}</For>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Show>
  );
}