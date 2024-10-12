import { certifications } from "@/lib/certificationsData";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import TechnologyTag from "./TechnologyTag";

export default function CertificationCard({
  certification,
}: {
  certification: keyof typeof certifications;
}) {
  const info = certifications[certification];

  return (
    <div className="relative w-full rounded-[10px] border border-lightGrey text-sm transition-colors hover:bg-lightGrey/20 focus-visible:bg-lightGrey/20 md:min-h-[280px] md:w-[calc(100%-20px)] md:max-w-[620px] dark:hover:bg-lightGrey/30 dark:focus-visible:bg-lightGrey/30">
      <div className="flex flex-col gap-[20px] px-[20px] py-[20px]">
        {/* image & date */}
        <div className="flex justify-between text-grey">
          <Image
            src={info.image}
            width={32}
            height={32}
            alt={`${info.title} logo`}
            className="h-[32px] w-[32px] rounded border border-lightGrey"
          />
          <span>{info.date}</span>
        </div>
        {/* title & provider */}
        <div className="flex flex-col gap-[6px]">
          <Link
            href={info.link}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link flex items-center gap-[2px] font-semibold text-black transition-all hover:text-darkTeal focus-visible:text-darkTeal"
          >
            <span className="absolute inset-0" />
            <span>{info.title}</span>
            <IconArrowUpRight
              size={16}
              stroke={1.5}
              className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1"
            />
          </Link>
          <p className="leading-5 text-grey">{info.provider}</p>
        </div>
        {/* description */}
        <p className="leading-5 text-grey">{info.description}</p>
        {/* tags */}
        <div className="flex flex-wrap gap-[8px]">
          {info.tags.map((tag) => (
            <TechnologyTag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
