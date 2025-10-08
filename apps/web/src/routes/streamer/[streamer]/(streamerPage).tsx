import StreamerList from "~/ui/streamer/StreamerList";
import { useParams } from "@solidjs/router";

export default function StreamerPage() {
  const { streamer } = useParams()
  return (
    <div>
      {streamer}
      <StreamerList/>
    </div>
  )
}