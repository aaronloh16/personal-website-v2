import { experiences } from "@/lib/workExperienceData";
import Image from "next/image";
import TechnologyTag from "./TechnologyTag";

export default function WorkExperienceCard({
  company,
}: {
  company: keyof typeof experiences;
}) {
  const info = experiences[company];

  return (
    <div className="-mx-4 rounded-lg px-4 py-5 transition-colors hover:bg-lightGrey/20">
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-grey">{info.date}</span>
        {info.coop && (
          <span className="rounded bg-lightTeal px-1.5 py-0.5 text-[10px] font-medium text-darkTeal">
            co-op
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start gap-3">
        <Image
          src={info.image}
          width={28}
          height={28}
          alt={`${info.company} logo`}
          className="mt-0.5 h-7 w-7 rounded"
          priority
        />
        <div>
          <h3 className="text-sm font-medium">{info.title}</h3>
          <p className="text-sm text-grey">{info.company}</p>
        </div>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-grey">
        {info.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {info.tags.map((tag) => (
          <TechnologyTag key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
}
