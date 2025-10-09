import { AccessorWithLatest } from "@solidjs/router";
import { Title } from "@repo/common";
import { For, Suspense } from "solid-js";
import { Info, Star, Eye } from "lucide-solid";

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
              <li class="ipc-metadata-list-summary-item">
                <div class="card bg-base-100 border border-border shadow-sm">
                  <div class="card-body p-6">
                    <div class="flex gap-6">
                      {/* Poster Image */}
                      <div class="flex-shrink-0">
                        {/*
                        <Image
                          src="/house-of-cards-tv-show-poster-with-dark-political-.jpg"
                          alt="House of Cards poster"
                          width={120}
                          height={180}
                          class="rounded-lg object-cover"
                        />
                        */}
                      </div>

                      {/* Content */}
                      <div class="flex-1 flex flex-col gap-3">
                        {/* Header with title and info icon */}
                        <div class="flex items-start justify-between gap-4">
                          <div class="flex-1">
                            <h2 class="text-xl font-semibold text-foreground mb-2">1. House of
                              Cards</h2>

                            {/* Metadata */}
                            <div
                              class="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                              <span>2013–2018</span>
                              <span>•</span>
                              <span>73 eps</span>
                              <span>•</span>
                              <span class="badge badge-sm badge-outline">TV-MA</span>
                              <span>•</span>
                              <span>TV Series</span>
                            </div>
                          </div>

                          {/* Info icon */}
                          <button class="btn btn-ghost btn-sm btn-circle">
                            <Info class="w-5 h-5 text-primary"/>
                          </button>
                        </div>

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
                          A Congressman works with his equally conniving wife to exact revenge on
                          the people who betrayed him.
                        </p>

                        {/* Creator and Stars */}
                        <div class="flex gap-6 text-sm flex-wrap">
                          <div class="flex gap-2">
                            <span class="font-semibold text-foreground">Creator</span>
                            <a href="#" class="link link-primary no-underline hover:underline">
                              Beau Willimon
                            </a>
                          </div>
                          <div class="flex gap-2">
                            <span class="font-semibold text-foreground">Stars</span>
                            <div class="flex gap-2 flex-wrap">
                              <a href="#" class="link link-primary no-underline hover:underline">
                                Kevin Spacey
                              </a>
                              <a href="#" class="link link-primary no-underline hover:underline">
                                Michel Gill
                              </a>
                              <a href="#" class="link link-primary no-underline hover:underline">
                                Robin Wright
                              </a>
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