"use client"

import React from "react";
import { ChartDataDto } from "@repo/common";
import TitlesByCategoryPieChart from "@/ui/streamer/TitlesByCategoryPieChart";

export default function StreamerView({ titleTypes }: { titleTypes: ChartDataDto[] }) {

  return (
    <div>
      <TitlesByCategoryPieChart titleTypes={titleTypes}/>
    </div>
  );
};
