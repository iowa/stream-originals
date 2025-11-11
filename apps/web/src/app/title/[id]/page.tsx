import {Suspense} from 'react';
import {TitlesRepository} from '@repo/common';
import TitlesPoster from '@/ui/titles/TitlesPoster';
import TitleInterests from '@/ui/titles/TitleInterests';
import {AppCons} from '@/ui/app/AppCons';
import TitleHeader from '@/ui/title/TitleHeader';
import TitleTopCredits from '@/ui/title/TitleTopCredits';
import AppLoading from '@/ui/app/AppLoading';

export default async function TitlePage({params}: {params: {id: string}}) {
  const {id} = await params;

  return (
    <div>
      <Suspense key={id} fallback={<AppLoading />}>
        <TitlePageData id={id} />
      </Suspense>
    </div>
  );
}

async function TitlePageData({id}: {id: string}) {
  const title = await new TitlesRepository().getTitleDto(id);
  if (!title) {
    return <>No title found.</>;
  }
  return (
    <div className="card p-4">
      <TitleHeader
        title={title}
        ratings={title.ratings}
        titleSize={'text-5xl'}
      />
      <div className="card card-side">
        <div className="flex items-center">
          <TitlesPoster title={title} width={278} height={414} />
        </div>
        <div className="card-body">
          <TitleInterests interests={title.interests} withSubgenres={true} />
          <p className="text-sm text-foreground leading-relaxed">
            {title.plot || AppCons.NOT_AVAILABLE}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <TitleTopCredits caption={'Top Cast'} credits={title.stars} />
        <TitleTopCredits caption={'Directors'} credits={title.directors} />
        <TitleTopCredits caption={'Writers'} credits={title.writers} />
      </div>
    </div>
  );
}
