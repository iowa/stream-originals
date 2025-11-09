import { Star } from "lucide-react";
import { Video } from 'lucide-react';

export default function StreamerStats({}: {}) {
  return (
    <div className="stats stats-vertical lg:stats-horizontal shadow">
      <div className="stat">
        <div className="stat-figure ">
          <Video className=" h-8 w-8"/>
        </div>
        <div className="stat-title">Total Titles</div>
        <div className="stat-value">25.6K</div>
      </div>

      <div className="stat">
        <div className="stat-figure">
          <Star className="inline-block h-8 w-8"/>
        </div>
        <div className="stat-title">Title Average Rating</div>
        <div className="stat-value">2.6M</div>
        <div className="stat-desc"></div>
      </div>
    </div>
  );
};
