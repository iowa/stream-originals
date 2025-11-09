import {Star} from 'lucide-react';
import {Video} from 'lucide-react';
import {TitleStats} from '@repo/common';

export default function StreamerStats({
  titlesStats,
}: {
  titlesStats: TitleStats;
}) {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-figure ">
          <Video className=" h-8 w-8" />
        </div>
        <div className="stat-title">Total Titles</div>
        <div className="stat-value">{titlesStats.total}</div>
      </div>
      <div className="stat">
        <div className="stat-figure ">
          <Video className=" h-8 w-8" />
        </div>
        <div className="stat-title">Total Episodes</div>
        <div className="stat-value">{titlesStats.totalEpisodes}</div>
      </div>
      <div className="stat">
        <div className="stat-figure">
          <Star className="inline-block h-8 w-8" />
        </div>
        <div className="stat-title">Title Average Rating</div>
        <div className="stat-value">{titlesStats.avgRating}</div>
        <div className="stat-desc">Above 1000 votes</div>
      </div>
    </div>
  );
}
