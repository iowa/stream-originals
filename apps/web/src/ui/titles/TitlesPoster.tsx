import { TitleListDto } from "@repo/common";
import Image from "next/image";
import { ImageOff } from "lucide-react";

export default function TitlesPoster({ title }: { title: TitleListDto }) {
  if (!title.images[0]) {
    return <div className="relative w-[144px] h-[216px] py-2 px-2 flex items-center justify-center">
      <ImageOff size={48} className="text-gray-400"/>
    </div>
  }
  return (
    <div className="relative w-[144px] h-[216px] py-2 px-2">
      <Image
        src={title.images[0].url} width={0} height={0} sizes="100vh"
        style={{ height: '100%', width: 'auto' }} alt={""}
      />
    </div>
  );
};
