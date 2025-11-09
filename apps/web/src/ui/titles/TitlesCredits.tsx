import { CreditPatchDto, TitleListDto } from "@repo/common";
import { AppCons } from "@/ui/app/AppCons";
import Link from "next/link";
import { Paths } from "@/lib/Paths";

export default function TitlesCredits({ title }: { title: TitleListDto }) {
  const renderCredits = (label: string, credits: CreditPatchDto[]) => (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="font-bold">{label}</span>
      {credits.length === 0
        ? <span>{AppCons.NOT_AVAILABLE}</span>
        : credits.map(({ credit }) => (
          <Link key={credit.id} href={Paths.credit(credit.id)}
                className="link link-primary link-hover">
            {credit.name}
          </Link>
        ))
      }
    </div>
  );

  return (
    <div>
      {renderCredits("Directors", title.directors)}
      {renderCredits("Stars", title.stars)}
    </div>
  );
}
