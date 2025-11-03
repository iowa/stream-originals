import { CreditDto } from "@repo/common";
import AppLine from "@/ui/layout/AppLine";
import CreditDetails from "@/ui/credit/CreditDetails";

export default function CreditHeader({ credit }: { credit: CreditDto }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex justify-between">
        <div className="flex flex-col gap-2">
          <AppLine>
            <div className="text-5xl font-semibold mb-1">{credit.name}</div>
          </AppLine>
        </div>
        <div className="flex gap-4 items-center">

        </div>
      </div>
      <CreditDetails/>
    </div>
  );
}