import { AccessorWithLatest } from "@solidjs/router";
import { For, Suspense } from "solid-js";
import { Eye, Info, Star } from "lucide-solid";
import { Times, TitleListDto } from "@repo/common";
import InterestsBadges from "~/ui/streamer/InterestsBadges";
import TitlePoster from "~/ui/streamer/TitlePoster";


export default function StreamerList({ titles }: {
  titles: AccessorWithLatest<TitleListDto[] | undefined>
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ul class="list bg-base-100 shadow-lg">
          <For each={titles()}>
            {(title) => (
              <li class="ipc-metadata-list-summary-item">
                <div class="card bg-base-100 border border-border shadow-sm">
                  <div class="card-body p-6">
                    <div class="flex gap-6">
                      {/* Poster Image */}
                      <TitlePoster title={title}/>
                      {/* Content */}
                      <div class="flex-1 flex flex-col gap-3">
                        {/* Header with title and info icon */}
                        <div class="flex items-start justify-between gap-4">
                          <div class="flex-1">
                            <h2
                              class="text-xl font-semibold text-foreground mb-2">{title.name}</h2>
                            {/* Metadata */}
                            <div
                              class="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                              <span>{Times.asDayjs(title.premiere).year()}–2018</span>
                              <span>•</span>
                              <span>73 eps</span>
                              <span>•</span>
                              <span class="badge badge-sm badge-outline">TV-MA</span>
                              <span>•</span>
                              <span>{title.type}</span>
                            </div>
                          </div>

                          {/* Info icon */}
                          <button class="btn btn-ghost btn-sm btn-circle">
                            <Info class="w-5 h-5 text-primary"/>
                          </button>
                        </div>

                        {/* Interests */}
                        <InterestsBadges interests={title.interests}/>

                        {/* Rating and Actions */}
                        <div class="flex items-center gap-4 flex-wrap">
                          {/* Rating */}
                          <div class="flex items-center gap-2">
                            <Star class="w-5 h-5 fill-yellow-500 text-yellow-500"/>
                            <span class="font-semibold text-foreground">8.6</span>
                            <span class="text-sm text-muted-foreground">(552K)</span>
                          </div>

                          {/* Rate button */}
                          <button class="btn btn-ghost btn-sm gap-2">
                            <Star class="w-4 h-4"/>
                            Rate
                          </button>

                          {/* Mark as watched button */}
                          <button class="btn btn-ghost btn-sm gap-2">
                            <Eye class="w-4 h-4"/>
                            Mark as watched
                          </button>
                        </div>

                        {/* Description */}
                        <p class="text-sm text-foreground leading-relaxed">
                          {title.plot}
                        </p>

                        {/* Creator and Stars */}
                        <div class="flex gap-6 text-sm flex-wrap">
                          <div class="flex gap-2">
                            <span class="font-semibold text-foreground">Writers</span>
                            <a href="#" class="link link-primary no-underline hover:underline">
                              <For each={title.writers}>
                                {(writer) => (
                                  <a href="#"
                                     class="link link-primary no-underline hover:underline">
                                    {writer.credit.name}
                                  </a>
                                )}
                              </For>
                            </a>
                          </div>
                          <div class="flex gap-2">
                            <span class="font-semibold text-foreground">Stars</span>
                            <div class="flex gap-2 flex-wrap">
                              <For each={title.stars}>
                                {(star) => (
                                  <a href="#"
                                     class="link link-primary no-underline hover:underline">
                                    {star.credit.name}
                                  </a>
                                )}
                              </For>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </For>
        </ul>
      </Suspense>
    </div>
  )
}