import { Suspense } from "react";
import { TitlesRepository } from "@repo/common";
import TitleHeader from "@/ui/title/header/TitleHeader";
import TitlesPoster from "@/ui/titles/TitlesPoster";
import TitleRatings from "@/ui/title/header/TitleRatings";
import TitleInterests from "@/ui/titles/TitleInterests";

export default async function TitlePage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div>
      <Suspense key={id} fallback={<div>Loading...</div>}>
        <TitlePageData id={id}/>
      </Suspense>
    </div>
  );
};

async function TitlePageData({ id }: { id: string }) {
  const title = await new TitlesRepository().getTitleDto(id);
  if (!title) {
    return <>No title found.</>
  }
  return <div className="flex flex-col gap-6">
    <TitleHeader title={title}/>
    <TitlesPoster title={title} images={title.images} width={278} height={414}/>
    <TitleInterests interests={title.interests} withSubgenres={true}/>
  </div>
}