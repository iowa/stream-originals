import { A } from "@solidjs/router";
import { For } from "solid-js";
import { streamerValues } from "@repo/common";
import Paths from "~/ui/layout/Paths";

export default function AppHeader() {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <A href={"/"} class="btn btn-ghost text-xl">stream-originals-hub</A>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <For each={streamerValues}>
            {streamer => (
              <li>
                <A href={Paths.streamer(streamer)}>{streamer}</A>
              </li>
            )}
          </For>
        </ul>
      </div>
      <div class="navbar-end">
      </div>
    </div>
  )
}