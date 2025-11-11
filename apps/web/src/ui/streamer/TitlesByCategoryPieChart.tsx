'use client';

import {ChartDataDto} from '@repo/common';
import {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import AppLine from '@/ui/app/AppLine';

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
    const chartInstance = echarts.init(chartRef.current!, null, {
      renderer: 'svg',
    });
    chartInstance.setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          radius: ['30%', '70%'],
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

  return (
    <div className="w-[800px]">
      <div>
        <AppLine>
          <h2 className="text-4xl font-bold">Top Categories</h2>
        </AppLine>
      </div>
      <div className="flex justify-center py-4">
        <div ref={chartRef} style={{width: '800px', height: '350px'}} />
      </div>
    </div>
  );
}
