import { TitleTypeChart } from "@repo/common";
import { useEffect, useRef } from "react";
import * as echarts from 'echarts';

export default function TitleTypePieChart({ titleTypes }: { titleTypes: TitleTypeChart[] }) {
  const data = titleTypes.map((value) => ({
    name: value.type,
    value: value.typeCount,
  }));
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current!);
    chartInstance.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: data
        }
      ]
    });

    return () => chartInstance.dispose();
  }, [data]);


  return <div ref={chartRef} style={{ width: "600px", height: "400px" }}/>;
};
