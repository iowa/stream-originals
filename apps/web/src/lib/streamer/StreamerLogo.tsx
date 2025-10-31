import { StreamerUtils } from "@/lib/streamer/StreamerUtils";
import { Streamer } from "@repo/common";
import Image from "next/image"

export default function StreamerLogo({ streamer }: { streamer: Streamer }) {
  return (
    <div className="py-1 px-1">
      <div style={{ width: 98.67, height: 26.67, position: 'relative' }}>
        <Image
          src={StreamerUtils.getLogoSVG(streamer)}
          alt={`${streamer}`}
          fill
        />
      </div>
    </div>
  );
};
