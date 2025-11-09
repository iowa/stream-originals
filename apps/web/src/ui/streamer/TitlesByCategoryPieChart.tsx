'use client';

import {ChartDataDto} from '@repo/common';
import {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export default function TitlesByCategoryPieChart({
  titlesByCategory,
}: {
  titlesByCategory: ChartDataDto[];
}) {
  const data = titlesByCategory.map(value => ({
    name: value.label,
    value: value.count,
  }));
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current!);
    chartInstance.setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'right',
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: data,
        },
      ],
    });

    return () => chartInstance.dispose();
  }, [data]);

  return <div ref={chartRef} style={{width: '550px', height: '400px'}} />;
}
