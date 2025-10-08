import StreamerList from "~/ui/streamer/StreamerList";
import { createAsync, useParams } from "@solidjs/router";
import { getTitlesList } from "~/lib/titles/TitlesRepository";
import { Streamer, Title } from "@repo/common";


export default function StreamerPage() {
  const { streamer } = useParams()
  const titles = createAsync<Title[]>(() => getTitlesList(streamer as Streamer));

  return (
    <div>
      {streamer}
      <StreamerList titles={titles}/>
    </div>
  )
}