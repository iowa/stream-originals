import { InterestListDto } from "@repo/common";

export default function TitleInterests({ interests, isSubgenre }: {
  interests: InterestListDto[],
  isSubgenre: boolean
}) {
  const filtered = interests.filter(i => i.isSubgenre === (isSubgenre || null));
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {filtered.map((interest: InterestListDto) => (
        <span key={interest.id} className="badge badge-sm badge-outline">{interest.name}</span>
      ))}
    </div>
  );
};
