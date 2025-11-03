import { Suspense } from "react";
import { CreditsRepository } from "@repo/common/credits/CreditsRepository";
import CreditHeader from "@/ui/credit/CreditHeader";
import CreditKnownFor from "@/ui/credit/CreditKnownFor";

export default async function NamePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div>
      <Suspense key={id} fallback={<div>Loading...</div>}>
        <NamePageData id={id}/>
      </Suspense>
    </div>
  );
};

async function NamePageData({ id }: { id: string }) {
  const credit = await new CreditsRepository().getCreditDto(id);
  if (!credit) {
    return <>No name found.</>
  }
  return <div className="card p-4">
    <CreditHeader credit={credit}/>
    <div className="card card-side">
      <div className="flex items-center">
      </div>
      <div className="card-body">
      </div>
    </div>
    <CreditKnownFor credit={credit}/>
  </div>
}