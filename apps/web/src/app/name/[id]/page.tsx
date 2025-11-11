import {Suspense} from 'react';
import {CreditsRepository} from '@repo/common/credits/CreditsRepository';
import CreditHeader from '@/ui/credit/CreditHeader';
import CreditTitles from '@/ui/credit/CreditTitles';
import CreditPoster from '@/ui/credit/CreditPoster';
import AppLoading from '@/ui/app/AppLoading';

export default async function NamePage({params}: {params: {id: string}}) {
  const {id} = await params;
  return (
    <div>
      <Suspense key={id} fallback={<AppLoading />}>
        <NamePageData id={id} />
      </Suspense>
    </div>
  );
}

async function NamePageData({id}: {id: string}) {
  const credit = await new CreditsRepository().getCreditDto(id);
  if (!credit) {
    return <>No name found.</>;
  }
  return (
    <div className="card p-4">
      <CreditHeader credit={credit} />
      <div className="card card-side">
        <div className="flex items-center">
          <CreditPoster credit={credit} width={278} height={414} />
        </div>
        <div className="card-body"></div>
      </div>
      <CreditTitles credit={credit} />
    </div>
  );
}
