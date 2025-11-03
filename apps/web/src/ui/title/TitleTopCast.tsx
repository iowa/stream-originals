import { TitleDto } from "@repo/common";
import React from "react";
import CreditAvatar from "@/ui/title/CreditAvatar";

export default function TitleTopCast({ title }: { title: TitleDto }) {
  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="w-1 h-6 bg-primary mr-3 rounded"></div>
        <h2 className="text-2xl font-semibold">Top Cast</h2>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {title.stars.map((star) => (
          <CreditAvatar key={`${star.credit.id}_${star.role}`} credit={star}/>
        ))}
      </div>
    </div>
  );
};
