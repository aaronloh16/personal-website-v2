import TypewriterName from "@/components/TypewriterName";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://x.com/aaronloh_", icon: IconBrandX, label: "X" },
  {
    href: "https://www.linkedin.com/in/aaron-loh26/",
    icon: IconBrandLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/aaronloh16",
    icon: IconBrandGithub,
    label: "GitHub",
  },
  {
    href: "mailto:aaronloh04@gmail.com",
    icon: IconMail,
    label: "Email",
  },
];

const currentRoles = [
  {
    company: "Royal Bank of Canada",
    role: "Software Developer, Cash Management",
    image: "/work-experience-images/rbc.webp",
  },
  {
    company: "Stan",
    role: "Fellow",
    image: "/work-experience-images/stan.webp",
  },
];

const previousRoles = [
  {
    company: "Royal Bank of Canada",
    role: "Software Developer, Global Payments",
    image: "/work-experience-images/rbc.webp",
  },
  {
    company: "Royal Bank of Canada",
    role: "Software Developer, Amplify",
    image: "/work-experience-images/rbc.webp",
  },
  {
    company: "boardy.ai",
    role: "Fellow",
    image: "/work-experience-images/boardy.webp",
  },
  {
    company: "Google Developer Groups McMaster",
    role: "Open Source Team",
    image: "/work-experience-images/gdsc.webp",
  },
  {
    company: "McSCert",
    role: "Software Research Assistant",
    image: "/work-experience-images/mcscert.webp",
  },
];

const interests = [
  "AI agents & LLM interpretability",
  "growth engineering",
  "open source",
  "hackathons",
  "building in public",
  "tennis, golf & triathlon",
];

const community = [
  "Stan Fellow — first cohort",
  "Hack the North — finalist 2024, builder 2025",
  "Google Developer Groups McMaster",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-mono text-black">
      <div className="mx-auto max-w-xl px-6 py-16 md:py-24">
        {/* Name */}
        <h1 className="animate-fade-up text-2xl font-bold md:text-3xl">
          <TypewriterName />
        </h1>
        <p
          className="animate-fade-up mt-1 text-sm text-grey"
          style={{ animationDelay: "0.05s" }}
        >
          toronto, canada
        </p>

        {/* Current Roles */}
        <div
          className="animate-fade-up mt-8 flex flex-col gap-2.5"
          style={{ animationDelay: "0.1s" }}
        >
          {currentRoles.map((role) => (
            <div
              key={`${role.company}-${role.role}`}
              className="flex items-center gap-2.5"
            >
              <Image
                src={role.image}
                width={20}
                height={20}
                alt={`${role.company} logo`}
                className="h-5 w-5 rounded"
              />
              <span className="text-sm">
                {role.company}{" "}
                <span className="text-grey">{role.role}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Bio */}
        <p
          className="animate-fade-up mt-6 text-sm leading-relaxed text-grey"
          style={{ animationDelay: "0.15s" }}
        >
          Software engineer building agentic AI infrastructure. Figuring out
          how to make useful things reach more people.
        </p>

        {/* Previously */}
        <section
          className="animate-fade-up mt-12"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-sm font-bold">previously</h2>
          <div className="mt-4 flex flex-col gap-2.5">
            {previousRoles.map((role) => (
              <div
                key={`${role.company}-${role.role}`}
                className="flex items-center gap-2.5"
              >
                <Image
                  src={role.image}
                  width={20}
                  height={20}
                  alt={`${role.company} logo`}
                  className="h-5 w-5 rounded"
                />
                <span className="text-sm">
                  {role.company}{" "}
                  <span className="text-grey">{role.role}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section
          className="animate-fade-up mt-12"
          style={{ animationDelay: "0.25s" }}
        >
          <h2 className="text-sm font-bold">interests</h2>
          <ul className="mt-4 flex flex-col gap-1.5">
            {interests.map((interest) => (
              <li key={interest} className="text-sm text-grey">
                – {interest}
              </li>
            ))}
          </ul>
        </section>

        {/* Community */}
        <section
          className="animate-fade-up mt-12"
          style={{ animationDelay: "0.3s" }}
        >
          <h2 className="text-sm font-bold">community</h2>
          <ul className="mt-4 flex flex-col gap-1.5">
            {community.map((item) => (
              <li key={item} className="text-sm text-grey">
                – {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Social Links */}
        <div
          className="animate-fade-up mt-12 flex items-center gap-4"
          style={{ animationDelay: "0.35s" }}
        >
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="text-grey transition-colors hover:text-black"
            >
              <link.icon size={18} stroke={1.5} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
