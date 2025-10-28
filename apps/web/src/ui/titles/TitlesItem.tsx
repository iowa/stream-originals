import Link from "next/link";
import { TitleListDto } from "@repo/common";
import TitlesPoster from "@/ui/titles/TitlesPoster";

export function TitlesItem({ title }: { title: TitleListDto }) {
  return (
    <Link href={`/title/${title.id}`}>
      <div className="card card-side bg-base-100 shadow-sm">
        <div>
          <TitlesPoster title={title}/>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title.name}</h2>
          <p>{title.plot}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </Link>
  );
}