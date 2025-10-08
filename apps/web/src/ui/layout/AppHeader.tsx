import { A } from "@solidjs/router";

export default function AppHeader() {
  return (
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <A href={"/"} class="btn btn-ghost text-xl">stream-originals-hub</A>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><A href={"/streamer/NETFLIX"}>NETFLIX</A></li>
        </ul>
      </div>
      <div class="navbar-end">
      </div>
    </div>
  )
}