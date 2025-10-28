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
        dominantBaseline="middle"
        fontSize="16"
        fill="#6b7280"
      >
        not available
      </text>
    </svg>
  }
  return (
    <div className={"relative w-[120px] h-[180px]"}>
      <Image
        src={title.images[0].url} width={0} height={0} sizes="100vh"
        style={{ height: '100%', width: 'auto' }} alt={""}/>
    </div>
  );
};
