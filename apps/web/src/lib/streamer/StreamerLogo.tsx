import { StreamerUtils } from "@/lib/streamer/StreamerUtils";
import { Streamer } from "@repo/common";
import Image from "next/image"

export default function StreamerLogo({ streamer, height }: { streamer: Streamer, height: number }) {
  return (
    <div className={`relative w-auto h-${height} py-2 px-2`}>
      <Image
        src={StreamerUtils.getLogoSVG(streamer)} alt={`${streamer} logo`} width={0}
        height={0} sizes="100vh"
        className="w-auto h-full"
      />
    </div>
  );
};
