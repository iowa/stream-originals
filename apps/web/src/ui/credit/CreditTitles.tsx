import { CreditDto } from "@repo/common";
import React from "react";
import TitleAvatar from "@/ui/credit/TitleAvatar";

export default function CreditTitles({ credit }: { credit: CreditDto }) {
  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="w-1 h-6 bg-primary mr-3 rounded"></div>
        <h2 className="text-2xl font-semibold">Titles</h2>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {credit.titles.map((title) => (
          <TitleAvatar key={title.id} title={title}/>
        ))}
      </div>
    </div>
  );
};
