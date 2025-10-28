import { CreditPatchDto, TitleListDto } from "@repo/common";
import { AppConstants } from "@/lib/AppConstants";

export default function TitlesCredits({ title }: { title: TitleListDto }) {
  const renderCredits = (label: string, credits: CreditPatchDto[]) => (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="font-bold">{label}</span>
      {credits.length === 0
        ? <span>{AppConstants.NOT_AVAILABLE}</span>
        : credits.map(({ credit }) => (
          <span key={credit.id}>{credit.name}</span>
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
