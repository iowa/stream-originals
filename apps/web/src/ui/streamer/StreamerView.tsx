"use client"

import React from "react";
import { ChartDataDto } from "@repo/common";
import TitleTypePieChart from "@/ui/streamer/TitleTypePieChart";

export default function StreamerView({ titleTypes }: { titleTypes: ChartDataDto[] }) {

  return (
    <div>
      <TitleTypePieChart titleTypes={titleTypes}/>
    </div>
  );
};
