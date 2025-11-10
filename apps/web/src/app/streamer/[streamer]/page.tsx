import {ChartDataDto, Streamer, TitleStats} from '@repo/common';
import React, {Suspense} from 'react';
import {StreamerRepository} from '@repo/common/streamer/StreamerRepository';
import StreamerLogo from '@/lib/streamer/StreamerLogo';
import StreamerStats from '@/ui/streamer/StreamerStats';
import TitlesByCategoryPieChart from '@/ui/streamer/TitlesByCategoryPieChart';
import StreamerTopTitles from '@/ui/streamer/StreamerTopTitles';

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
  return (
    <div className="flex items-center flex-col gap-4">
      <div className="card p-4 card-side bg-base-100 shadow-sm">
        <div className="flex items-center">
          <StreamerLogo streamer={streamerPath} multiplier={2} />
        </div>
        <div className="card-body">
          <div>
            <StreamerStats titlesStats={titlesStats} />
          </div>
        </div>
      </div>
      <StreamerTopTitles />
    </div>
  );
}
