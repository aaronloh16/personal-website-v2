import HiddenProjects from "@/components/HiddenProjects";
import LinkWithUpRightArrow from "@/components/LinkWithUpRightArrow";
import ProjectCard from "@/components/ProjectCard";
import SocialLink from "@/components/SocialLink";
import StatusBadge from "@/components/StatusBadge";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import { projects } from "@/lib/projectsData";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/lib/certificationsData";
import { experiences } from "@/lib/workExperienceData";
import Image from "next/image";
import Link from "next/link";

export const tagline = "Stan Fellow, builder, dev advocate";
export const headline =
  "Building in public — passionate about developer advocacy, community, and making AI accessible. Currently exploring the intersection of AI tooling and product.";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white bg-gradient-to-b from-orange/5 via-transparent to-darkTeal/5 p-4 pb-0 text-black md:p-10 md:pb-0 md:pr-0 lg:p-16 lg:pb-0 lg:pr-0 xl:p-24 xl:pb-0 dark:from-orange/3 dark:to-darkTeal/3">
      <div className="z-10 flex w-full flex-col items-center justify-between gap-[60px] text-sm md:max-w-5xl">
        <section className="flex w-full flex-col gap-2 pt-[40px] md:flex-row md:gap-[20px]">
          <div className="relative h-[64px] w-[64px] md:h-[108px] md:w-[108px]">
            <Image
              src="/pfp.webp"
              sizes="(max-width: 768px) 64px, 108px"
              className="aspect-square rounded-[10px] border border-lightGrey"
              alt="Headshot profile picture"
              fill={true}
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-4xl leading-9 md:text-6xl md:leading-none">
                Aaron Loh
              </h1>
              <p className="font-mono text-sm tracking-tight text-grey md:text-base">
                <span className="text-orange">&gt;</span> {tagline}
                <span className="animate-blink text-orange">_</span>
              </p>
              <StatusBadge text="building in public" />
            </div>
            <p className="max-w-[400px] text-sm leading-relaxed text-grey md:max-w-[500px] md:text-base md:leading-relaxed">
              {headline}
            </p>
            <div className="flex flex-col gap-[10px] md:flex-row md:flex-wrap">
              <SocialLink link="x" />
              <SocialLink link="linkedin" />
              <SocialLink link="github" />
              <SocialLink link="email" />
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col gap-[20px]">
          <h1 className="font-serif text-3xl md:text-4xl">
            What I&apos;m Building
          </h1>
          <div className="flex flex-wrap gap-[20px]">
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
          <LinkWithUpRightArrow
            text="View code for this website & star my projects on GitHub"
            href="https://github.com/aaronloh16"
          />
        </section>

        <section className="flex w-full flex-col gap-[20px]">
          <h1 className="font-serif text-3xl md:text-4xl">Experience</h1>
          <div className="flex flex-col gap-[20px] md:flex-row md:flex-wrap">
            {Object.keys(experiences).map((experience) => (
              <WorkExperienceCard
                key={experience}
                company={experience as keyof typeof experiences}
              />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[20px]">
          <h1 className="font-serif text-3xl md:text-4xl">Certifications</h1>
          <div className="flex flex-wrap gap-[20px]">
            {Object.keys(certifications).map((certification) => (
              <CertificationCard
                key={certification}
                certification={certification as keyof typeof certifications}
              />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-[20px]">
          <h1 className="font-serif text-3xl md:text-4xl">
            Let&apos;s Connect
          </h1>
          <p className="text-sm text-grey md:text-base">
            I write about what I&apos;m building and learning. Follow along.
          </p>
          <div className="flex flex-col gap-[10px]">
            <LinkWithUpRightArrow
              text="Follow me on X"
              href="https://x.com/aaronloh_"
            />
            <LinkWithUpRightArrow
              text="Connect on LinkedIn"
              href="https://www.linkedin.com/in/aaron-loh26/"
            />
            <LinkWithUpRightArrow
              text="Check out my GitHub"
              href="https://github.com/aaronloh16"
            />
          </div>
        </section>
      </div>
      <footer className="mb-[20px] mt-24">
        <Link
          href="https://github.com/aaronloh16"
          target="_blank"
          className="font-serif text-lg text-grey transition-colors hover:text-darkTeal focus-visible:text-darkTeal"
        >
          View source code
        </Link>
      </footer>
    </main>
  );
}
