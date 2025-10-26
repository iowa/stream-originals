import { createAsync, useParams } from "@solidjs/router";
import { getTitle } from "~/lib/titles/TitlesAction";
import { TitleDto } from "@repo/common";
import TitleView from "~/ui/title/TitleView";

export default function TitlePage() {
  const { id } = useParams();
  const title = createAsync<TitleDto | undefined>(() => getTitle(id));
  return <div class="mx-auto w-[800px]">
    <TitleView title={title}/>
  </div>

}