import { projects } from "@/lib/projectsData";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import TechnologyTag from "./TechnologyTag";

export default function ProjectCard({
  project,
}: {
  project: keyof typeof projects;
}) {
  const info = projects[project];
  const href = info.link || info.github;

  return (
    <div className="-mx-4 rounded-lg px-4 py-5 transition-colors hover:bg-lightGrey/20">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link inline-flex items-center gap-1 font-medium text-black transition-colors hover:text-darkTeal"
            >
              {info.title}
              <IconArrowUpRight
                size={14}
                stroke={1.5}
                className="opacity-0 transition-all group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
              />
            </Link>
          ) : (
            <span className="font-medium">{info.title}</span>
          )}
          <p className="mt-1 text-sm leading-relaxed text-grey">
            {info.description}
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {info.tags.map((tag) => (
              <TechnologyTag key={tag} text={tag} />
            ))}
          </div>
        </div>
        {info.github && (
          <Link
            href={info.github}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-0.5 shrink-0 text-grey transition-colors hover:text-darkTeal"
          >
            <IconBrandGithub size={18} stroke={1.25} />
          </Link>
        )}
      </div>
    </div>
  );
}
