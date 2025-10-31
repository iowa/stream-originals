import { Suspense } from "react";
import { TitlesRepository } from "@repo/common";
import TitleHeader from "@/ui/title/header/TitleHeader";
import TitlesPoster from "@/ui/titles/TitlesPoster";
import TitleRatings from "@/ui/title/header/TitleRatings";
import TitleInterests from "@/ui/titles/TitleInterests";
import { AppConstants } from "@/lib/AppConstants";
import StreamerLogo from "@/lib/streamer/StreamerLogo";
import TitleDetails from "@/ui/titles/TitleDetails";
import TitlesCredits from "@/ui/titles/TitlesCredits";
import TitleTopCast from "@/ui/title/header/TitleTopCast";

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
  return <div className="card p-4">
    <TitleHeader title={title}/>
    <div className="card card-side">
      <div className="flex items-center">
        <TitlesPoster title={title} images={title.images} width={278} height={414}/>
      </div>
      <div className="card-body">
        <TitleInterests interests={title.interests} withSubgenres={true}/>
        <p className="text-sm text-foreground leading-relaxed">
          {title.plot || AppConstants.NOT_AVAILABLE}
        </p>
      </div>
    </div>
    <TitleTopCast title={title}/>
  </div>
}