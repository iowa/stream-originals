"use client"

import React from "react";
import { TitleTypeChart } from "@repo/common";
import Chart from 'react-apexcharts'


export default function StreamerView({ titleTypes }: { titleTypes: TitleTypeChart[] }) {
  const [state, setState] = React.useState({

    series: [titleTypes.map(title => title.typeCount)],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


  });


  return (
    <div>
      {JSON.stringify(titleTypes)}
    </div>
  );
};
