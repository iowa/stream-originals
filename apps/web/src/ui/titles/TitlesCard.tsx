"use client"

import { TitleListDto } from "@repo/common";
import TitlesPoster from "@/ui/titles/TitlesPoster";
import TitleInterests from "@/ui/titles/TitleInterests";
import { AppCons } from "@/ui/app/AppCons";
import TitlesCredits from "@/ui/titles/TitlesCredits";
import { Paths } from "@/lib/Paths";
import { useRouter } from "next/navigation";
import TitleHeader from "@/ui/title/TitleHeader";

export function TitlesCard({ title }: { title: TitleListDto }) {
  const router = useRouter();

  return (
    <div
      className="card card-side bg-base-100 border-1 border-base-300 shadow-sm cursor-pointer card-sm rounded-none"
      onClick={e => {
        const target = e.target as HTMLElement;
        if (target.closest("a")) return;
        router.push(Paths.title(title.id));
      }}
    >
      <div className="flex items-center">
        <TitlesPoster title={title} width={100.8} height={151.2}/>
      </div>
      <div className="card-body gap-1">
        <TitleHeader title={title} ratings={title.ratings} titleSize={'text-lg'}/>
        <TitleInterests interests={title.interests} withSubgenres={false}/>
        <div>
          {title.plot || AppCons.NOT_AVAILABLE}
        </div>
        <TitlesCredits title={title}/>
      </div>
    </div>
  );
}