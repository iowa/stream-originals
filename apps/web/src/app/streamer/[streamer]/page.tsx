import {Streamer, TitleStats} from '@repo/common';
import React, {Suspense} from 'react';
import {StreamerRepository} from '@repo/common/streamer/StreamerRepository';
import StreamerLogo from '@/lib/streamer/StreamerLogo';
import StreamerStats from '@/ui/streamer/StreamerStats';
import StreamerTopTitles from '@/ui/streamer/StreamerTopTitles';
import {TitlesListRepository} from '@repo/common/titles/TitlesListRepository';

export default async function StreamerPage({
  params,
}: {
  params: Promise<{streamer: Streamer}>;
}) {
  const {streamer} = await params;

  return (
    <Suspense key={streamer} fallback={<div>Loading...</div>}>
      <StreamerPageData streamer={streamer} />
    </Suspense>
  );
}

async function StreamerPageData({streamer}: {streamer: Streamer}) {
  const streamerPath = decodeURIComponent(streamer) as Streamer;
  const streamerRepository = new StreamerRepository();
  const titlesStats: TitleStats =
    await streamerRepository.titlesStats(streamerPath);
  const titles = await new TitlesListRepository().getTitles(
    streamerPath,
    1,
    10,
  );
  return (
    <div className="flex items-center flex-col gap-4">
      <div className="card p-4  bg-base-100 shadow-sm">
        <div className="card-body gap-8">
          <div className="flex items-center gap-4">
            <StreamerLogo streamer={streamerPath} multiplier={2} />
            <StreamerStats titlesStats={titlesStats} />
          </div>
          <StreamerTopTitles streamer={streamerPath} titles={titles} />
        </div>
      </div>
    </div>
  );
}
