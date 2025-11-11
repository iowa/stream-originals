import {Suspense} from 'react';
import {TitlesCard} from '@/ui/titles/TitlesCard';
import {TitlesParams} from '@/lib/AppTypes';
import AppPaging from '@/ui/app/AppPaging';
import {TitlesListRepository} from '@repo/common/titles/TitlesListRepository';
import AppLoading from '@/ui/app/AppLoading';
import {Streamer} from '@repo/common';

export default async function Titles({
  searchParams,
}: {
  searchParams: Promise<TitlesParams>;
}) {
  const params = await searchParams;
  return (
    <Suspense key={JSON.stringify(params)} fallback={<AppLoading />}>
      <TitlesPageData params={params} />
    </Suspense>
  );
}

async function TitlesPageData({params}: {params: TitlesParams}) {
  const currentPage = params.page || 1;
  const titles = await new TitlesListRepository().getTitles(
    currentPage,
    params.pageSize || 10,
    params.streamer
      ? (decodeURIComponent(params.streamer) as Streamer)
      : undefined,
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
