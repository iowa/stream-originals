import { Streamer } from "@repo/common";
import { Suspense } from "react";
import StreamerView from "@/ui/streamer/StreamerView";

export default async function StreamerPage({ params }: {
  params: Promise<{ streamer: Streamer }>,
}) {
  const { streamer } = await params;

  return (
    <Suspense key={streamer} fallback={<div>Loading...</div>}>
      <StreamerPageData streamer={streamer}/>
    </Suspense>
  );
}

async function StreamerPageData({ streamer }: {
  streamer: Streamer,
}) {
  return (
    <div className="flex items-center flex-col gap-4">
      <StreamerView/>
    </div>
  );
}
