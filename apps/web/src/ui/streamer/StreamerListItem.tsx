import { TitleListDto } from "@repo/common";
import StreamerListTitlePoster from "~/ui/streamer/StreamerListTitlePoster";
import StreamerListItemHeader from "./StreamerListItemHeader";
import StreamerListInterests from "~/ui/streamer/StreamerListInterests";
import StreamerListItemActions from "./StreamerListItemActions";
import StreamerListItemDescription from "./StreamerListItemDescription";
import { StreamerListItemCredits } from "~/ui/streamer/StreamerListItemCredits";

export function StreamerListItem({ title }: { title: TitleListDto }) {
  return (
    <li class="ipc-metadata-list-summary-item">
      <div class="card bg-base-100 border border-border shadow-sm">
        <div class="card-body p-6">
          <div class="flex gap-6">
            <StreamerListTitlePoster title={title}/>
            <div class="flex-1 flex flex-col gap-3">
              <StreamerListItemHeader title={title}/>
              <StreamerListInterests interests={title.interests}/>
              <StreamerListItemActions ratings={title.ratings}/>
              <StreamerListItemDescription plot={title.plot}/>
              <StreamerListItemCredits writers={title.writers} stars={title.stars}/>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

