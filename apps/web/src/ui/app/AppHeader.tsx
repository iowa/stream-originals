import { AppCons } from "@/ui/app/AppCons";
import { streamerValues } from "@repo/common";
import Link from "next/link";
import { Paths } from "@/lib/Paths";
import StreamerLogo from "@/lib/streamer/StreamerLogo";

export default function AppHeader() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          {AppCons.APP_NAME}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {streamerValues.map((streamer) => (
            <li key={streamer}>
              <Link href={Paths.streamer(streamer)}>
                <StreamerLogo streamer={streamer}/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
};
