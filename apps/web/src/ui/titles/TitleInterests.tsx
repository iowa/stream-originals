import { InterestListDto } from "@repo/common";

export default function TitleInterests({ interests, withSubgenres }: {
  interests: InterestListDto[],
  withSubgenres: boolean
}) {
  const filtered = (withSubgenres) ? interests : interests.filter(i => i.isSubgenre === null);
  console.log(interests);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {filtered.map((interest: InterestListDto) => (
        <span key={interest.id} className="badge badge-sm badge-outline">{interest.name}</span>
      ))}
    </div>
  );
};
