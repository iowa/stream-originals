import { TitleImage } from "@repo/common";
import { Image } from "@unpic/solid";
import { Show } from "solid-js";

export default function TitlePoster({ image, titleName }: {
  image: TitleImage,
  titleName: string
}) {
  return <Show
    when={image?.url}
    fallback={
      <div>not available</div>
    }
  >
    <Image
      src={image.url}
      alt={`${titleName}_poster`}
      width={278}
      height={414}
      class={"w-auto h-[414px]"}
    />
  </Show>

};
