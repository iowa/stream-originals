"use client"

import React from "react";
import { TitleTypeChart } from "@repo/common";
import TitleTypePieChart from "@/ui/streamer/TitleTypePieChart";

export default function StreamerView({ titleTypes }: { titleTypes: TitleTypeChart[] }) {

  return (
    <div>
      <TitleTypePieChart titleTypes={titleTypes}/>
    </div>
  );
};
