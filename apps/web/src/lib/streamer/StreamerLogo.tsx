import { StreamerUtils } from "@/lib/streamer/StreamerUtils";
import { Streamer } from "@repo/common";
import Image from "next/image"

export default function StreamerLogo({ streamer, multiplier = 1 }: {
  streamer: Streamer,
  multiplier?: number
}) {
  return (
    <div className="py-1 px-1">
      <div style={{ width: (98 * multiplier), height: (26 * multiplier), position: 'relative' }}>
        <Image
          src={StreamerUtils.getLogoSVG(streamer)}
          alt={`${streamer}`}
          fill
        />
      </div>
    </div>
  );
};
