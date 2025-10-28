import { Streamer, TitlesRepository } from "@repo/common";
import { Suspense } from "react";
import { TitlesItem } from "@/ui/titles/TitlesItem";

export default async function Titles({ params }: { params: { streamer: Streamer } }) {
  const { streamer } = await params;
  return (
    <Suspense key={streamer} fallback={<div>Loading...</div>}>
      <TitlesPageData streamer={streamer}/>
    </Suspense>
  );
};

async function TitlesPageData({ streamer }: { streamer: Streamer }) {
  const titles = await new TitlesRepository().geTitleListDtos(streamer);
  return <ul className="list bg-base-100 shadow-lg">
    {titles.map((title) => (
      <li key={title.id}>
        <TitlesItem title={title}/>
      </li>
    ))}
  </ul>
}