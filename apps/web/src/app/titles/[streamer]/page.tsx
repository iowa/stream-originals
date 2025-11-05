import { Streamer, TitlesRepository } from "@repo/common";
import { Suspense } from "react";
import { TitlesCard } from "@/ui/titles/TitlesCard";

export default async function Titles({ params }: { params: { streamer: Streamer } }) {
  const { streamer } = await params;
  return (
    <Suspense key={streamer} fallback={<div>Loading...</div>}>
      <TitlesPageData streamer={streamer}/>
    </Suspense>
  );
};

async function TitlesPageData({ streamer }: { streamer: Streamer }) {
  const titles = await new TitlesRepository().geTitleListDtos(decodeURIComponent(streamer) as Streamer, 1, 10);

  return <div className="flex items-center flex-col gap-4">
    <div className="w-full">
      <ul className="list bg-base-100 shadow-lg">
        {titles.map((title) => (
          <li key={title.id}>
            <TitlesCard title={title}/>
          </li>
        ))}
      </ul>
    </div>
    <div className="join">
      <button className="join-item btn">«</button>
      <button className="join-item btn">Page 22</button>
      <button className="join-item btn">»</button>
    </div>
  </div>
}