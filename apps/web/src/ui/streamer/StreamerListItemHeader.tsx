import { Info } from "lucide-solid";
import { Times, TitleListDto } from "@repo/common";

export default function StreamerListItemHeader({ title }: { title: TitleListDto }) {
  return (
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1">
        <h2 class="text-xl font-semibold text-foreground mb-2">{title.name}</h2>
        <div class="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <span>{Times.asDayjs(title.premiere).year()}–2018</span>
          <span>•</span>
          <span>73 eps</span>
          <span>•</span>
          <span class="badge badge-sm badge-outline">TV-MA</span>
          <span>•</span>
          <span>{title.type}</span>
        </div>
      </div>
      <button class="btn btn-ghost btn-sm btn-circle">
        <Info class="w-5 h-5 text-primary" />
      </button>
    </div>
  );
}

