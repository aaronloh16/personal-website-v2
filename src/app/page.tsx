import CertificationCard from "@/components/CertificationCard";
import HiddenProjects from "@/components/HiddenProjects";
import LinkWithUpRightArrow from "@/components/LinkWithUpRightArrow";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import StatusBadge from "@/components/StatusBadge";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import { certifications } from "@/lib/certificationsData";
import { projects } from "@/lib/projectsData";
import { experiences } from "@/lib/workExperienceData";
import Link from "next/link";

export const tagline = "Software Engineer";
export const headline =
  "Software engineer interested in growth and distribution.";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="h-[3px] bg-orange" />
      <div className="mx-auto max-w-2xl px-6 pb-16 pt-20 md:pt-32">
        {/* Hero */}
        <section className="animate-fade-up">
          <h1 className="font-serif text-[3.5rem] leading-[1] tracking-tight md:text-7xl">
            Aaron Loh
          </h1>
          <div className="mt-5 h-[2px] w-10 bg-orange" />
          <p className="mt-5 max-w-md text-base leading-relaxed md:text-lg md:leading-relaxed">
            <span className="font-medium">Software engineer.</span>{" "}
            <span className="text-grey">
              Curious about growth and distribution.
            </span>
          </p>
          <div className="mt-3">
            <StatusBadge text="building in public" />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            <SocialLink link="x" />
            <SocialLink link="linkedin" />
            <SocialLink link="github" />
            <SocialLink link="email" />
          </div>
        </section>

        {/* Experience */}
        <section className="mt-24 md:mt-32">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey">
            Experience
          </h2>
          <div className="mt-8 divide-y divide-lightGrey">
            {Object.keys(experiences).map((experience) => (
              <WorkExperienceCard
                key={experience}
                company={experience as keyof typeof experiences}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-24 md:mt-32">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey">
            Selected Work
          </h2>
          <div className="mt-8 divide-y divide-lightGrey">
            {Object.keys(projects)
              .slice(0, 5)
              .map((project) => (
                <ProjectCard
                  key={project}
                  project={project as keyof typeof projects}
                />
              ))}
            <HiddenProjects>
              {Object.keys(projects)
                .slice(5)
                .map((project) => (
                  <ProjectCard
                    key={project}
                    project={project as keyof typeof projects}
                  />
                ))}
            </HiddenProjects>
          </div>
          <div className="mt-6">
            <LinkWithUpRightArrow
              text="More on GitHub"
              href="https://github.com/aaronloh16"
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-24 md:mt-32">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey">
            Certifications
          </h2>
          <div className="mt-8 divide-y divide-lightGrey">
            {Object.keys(certifications).map((cert) => (
              <CertificationCard
                key={cert}
                certification={cert as keyof typeof certifications}
              />
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="mt-24 md:mt-32">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-grey">
            Say Hello
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-grey">
            I write about what I&apos;m building and learning. Follow along.
          </p>
          <div className="mt-4 flex flex-col gap-1.5">
            <LinkWithUpRightArrow
              text="Follow on X"
              href="https://x.com/aaronloh_"
            />
            <LinkWithUpRightArrow
              text="Connect on LinkedIn"
              href="https://www.linkedin.com/in/aaron-loh26/"
            />
            <LinkWithUpRightArrow
              text="GitHub"
              href="https://github.com/aaronloh16"
            />
          </div>
        </section>
      </div>

      <footer className="mt-16 border-t border-lightGrey">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-6">
          <span className="text-xs text-grey">Aaron Loh</span>
          <Link
            href="https://github.com/aaronloh16"
            target="_blank"
            className="text-xs text-grey transition-colors hover:text-darkTeal"
          >
            Source
          </Link>
        </div>
        <div className="h-[3px] bg-orange" />
      </footer>
    </main>
  );
}
