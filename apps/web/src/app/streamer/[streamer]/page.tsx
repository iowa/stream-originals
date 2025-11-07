import { Streamer, TitleTypeChart } from "@repo/common";
import { Suspense } from "react";
import StreamerView from "@/ui/streamer/StreamerView";
import { StreamerRepository } from "@repo/common/streamer/StreamerRepository";

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
  const titleTypes: TitleTypeChart[] = await new StreamerRepository().titleTypes(decodeURIComponent(streamer) as Streamer);

  return (
    <div className="flex items-center flex-col gap-4">
      <StreamerView titleTypes={titleTypes}/>
    </div>
  );
}
