import { TitleDto } from "@repo/common";
import CreditAvatar from "@/ui/credit/CreditAvatar";
import AppLine from "@/ui/layout/AppLine";

export default function TitleTopCast({ title }: { title: TitleDto }) {
  return (
    <div>
      <div className="flex items-center mb-6">
        <AppLine>
          <h2 className="text-2xl font-semibold">Top Cast</h2>
        </AppLine>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {title.stars.map((star) => (
          <CreditAvatar key={`${star.credit.id}_${star.role}`} credit={star}/>
        ))}
      </div>
    </div>
  );
};
