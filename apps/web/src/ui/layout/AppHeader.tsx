import { AppConstants } from "@/lib/AppConstants";
import { streamerValues } from "@repo/common";

export default function AppHeader() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">{AppConstants.APP_NAME}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {streamerValues.map((streamer) => (
            <li key={streamer}><a>{streamer}</a></li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};
