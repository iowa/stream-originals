import { Suspense } from "react";
import { TitlesRepository } from "@repo/common";
import TitleHeader from "@/ui/title/header/TitleHeader";

export default async function TitlePage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div className="mx-auto w-[800px]">
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
    <TitleHeader titleDto={title}/>
  </div>
}