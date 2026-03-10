import { certifications } from "@/lib/certificationsData";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function CertificationCard({
  certification,
}: {
  certification: keyof typeof certifications;
}) {
  const info = certifications[certification];

  return (
    <div className="-mx-4 rounded-lg px-4 py-5 transition-colors hover:bg-lightGrey/20">
      <div className="flex items-start gap-3">
        <Image
          src={info.image}
          width={24}
          height={24}
          alt={`${info.provider} logo`}
          className="mt-0.5 h-6 w-6 rounded"
        />
        <div>
          {info.link ? (
            <Link
              href={info.link}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link inline-flex items-center gap-1 text-sm font-medium text-black transition-colors hover:text-darkTeal"
            >
              {info.title}
              <IconArrowUpRight
                size={14}
                stroke={1.5}
                className="opacity-0 transition-all group-hover/link:opacity-100"
              />
            </Link>
          ) : (
            <span className="text-sm font-medium">{info.title}</span>
          )}
          <p className="text-sm text-grey">
            {info.provider} · {info.date}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-grey">
            {info.description}
          </p>
        </div>
      </div>
    </div>
  );
}
