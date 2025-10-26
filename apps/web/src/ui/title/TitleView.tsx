import { Show } from "solid-js";
import { TitleDto } from "@repo/common";
import { AccessorWithLatest } from "@solidjs/router";

export default function TitleView({ title }: {
  title: AccessorWithLatest<TitleDto | undefined>
}) {
  return <Show when={title()} fallback={<>
    Not Found
  </>}>
    <div>
      {title()?.name}
    </div>
  </Show>
};
