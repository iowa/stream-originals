import {Streamer} from '@repo/common';
import {Suspense} from 'react';
import {TitlesCard} from '@/ui/titles/TitlesCard';
import {Paging} from '@/lib/AppTypes';
import AppPaging from '@/ui/app/AppPaging';
import {TitlesListRepository} from '@repo/common/titles/TitlesListRepository';
import AppLoading from '@/ui/app/AppLoading';

export default async function Titles({
  params,
  searchParams,
}: {
  params: Promise<{streamer: Streamer}>;
  searchParams: Promise<Paging>;
}) {
  const {streamer} = await params;
  const paging = await searchParams;

  return (
    <Suspense key={streamer + JSON.stringify(paging)} fallback={<AppLoading />}>
      <TitlesPageData streamer={streamer} paging={paging} />
    </Suspense>
  );
}

async function TitlesPageData({
  streamer,
  paging,
}: {
  streamer: Streamer;
  paging: Paging;
}) {
  const currentPage = paging.page || 1;
  const titles = await new TitlesListRepository().getTitles(
    decodeURIComponent(streamer) as Streamer,
    currentPage,
    paging.pageSize || 10,
  );

  return (
    <div className="flex items-center flex-col gap-4">
      <div className="w-full">
        <ul className="list bg-base-100 shadow-lg">
          {titles.map(title => (
            <li key={title.id}>
              <TitlesCard title={title} />
            </li>
          ))}
        </ul>
      </div>
      <AppPaging />
    </div>
  );
}
