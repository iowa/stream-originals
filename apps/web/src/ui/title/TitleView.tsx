import { TitleDto } from "@repo/common";
import { AccessorWithLatest } from "@solidjs/router";
import TitlePoster from "~/ui/common/TitlePoster";
import TitleHeader from "~/ui/title/TitleHeader";
import { Suspense } from "solid-js";

export default function TitleView({ title }: {
  title: AccessorWithLatest<TitleDto | undefined>
}) {
  const titleDto = title();
  if (!titleDto) {
    return <div>Not Found</div>;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div class="flex flex-col gap-6">
        <div>
          <TitleHeader titleDto={titleDto}/>
        </div>
        <div>
          <TitlePoster titleName={titleDto.name} image={titleDto.images[0]}/>
        </div>
        <div>
          {/* Additional content can go here */}
        </div>
      </div>
    </Suspense>
  );
};
