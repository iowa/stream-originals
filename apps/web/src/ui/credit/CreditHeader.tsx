import { CreditDto } from "@repo/common";
import AppLine from "@/ui/layout/AppLine";
import CreditDetails from "@/ui/credit/CreditDetails";

export default function CreditHeader({ credit }: { credit: CreditDto }) {
  return (
    <div
      className="flex justify-between items-star ">
      <div className="flex flex-col gap-2">
        <AppLine>
          <div className="text-5xl font-semibold mb-1">{credit.name}</div>
        </AppLine>
        <CreditDetails/>
      </div>
    </div>
  );
}