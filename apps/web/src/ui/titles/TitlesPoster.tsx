import { TitleListDto } from "@repo/common";
import Image from "next/image";

export default function TitlesPoster({ title }: { title: TitleListDto }) {
  if (!title.images[0]) {
    return <svg width={120} height={180} className="w-auto h-[180px] bg-gray-200">
      <rect width="120" height="180" fill="#e5e7eb"/>
      <text
        x="60"
        y="90"
        textAnchor="middle"
        dominant-baseline="middle"
        font-size="16"
        fill="#6b7280"
      >
        not available
      </text>
    </svg>
  }
  return (
    <div className="flex-shrink-0">
      <Image
        src={title.images[0].url}
        alt={`${title.name}_poster`}
        width={120}
        height={180}
        className={"w-auto h-[180px]"}
      />
    </div>
  );
};
