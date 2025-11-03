import { TitleCreditWithCredit } from "@repo/common";
import React from "react";
import CreditAvatar from "@/ui/title/CreditAvatar";

export default function TitleTopCredits({ caption, credits }: {
  caption: string,
  credits: TitleCreditWithCredit[]
}) {
  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="w-1 h-6 bg-primary mr-3 rounded"></div>
        <h2 className="text-2xl font-semibold">{caption}</h2>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {credits.map((credit) => (
          <CreditAvatar key={`${credit.credit.id}_${credit.role}`} credit={credit}/>
        ))}
      </div>
    </div>
  );
};
