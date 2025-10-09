import StreamerList from "~/ui/streamer/StreamerList";
import { createAsync, useParams } from "@solidjs/router";
import { getTitlesList } from "~/lib/titles/TitlesRepository";
import { Streamer } from "@repo/common";


export default function StreamerPage() {
  const { streamer } = useParams()
  const titles = createAsync(() => getTitlesList(streamer as Streamer));
  return (
    <div>
      <StreamerList titles={titles}/>
    </div>
  )
}