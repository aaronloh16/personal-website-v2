import {
  Icon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

type SocialLink = "linkedin" | "email" | "github" | "x";

type LinkNameToInfoType = {
  [key in SocialLink]: {
    text: string;
    href: string;
    icon: Icon;
  };
};

const linkNameToInfo: LinkNameToInfoType = {
  linkedin: {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/aaron-loh26/",
    icon: IconBrandLinkedin,
  },
  email: {
    text: "Email",
    href: "mailto:aaronloh04@gmail.com",
    icon: IconMail,
  },
  github: {
    text: "GitHub",
    href: "https://github.com/aaronloh16",
    icon: IconBrandGithub,
  },
  x: {
    text: "X",
    href: "https://x.com/aaronloh_",
    icon: IconBrandX,
  },
};

export default function SocialLink({ link }: { link: SocialLink }) {
  const SocialIcon = linkNameToInfo[link].icon;

  return (
    <Link
      href={linkNameToInfo[link].href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 text-grey transition-colors hover:text-black"
      aria-label={linkNameToInfo[link].text}
    >
      <SocialIcon size={16} stroke={1.5} />
      <span className="text-sm">{linkNameToInfo[link].text}</span>
    </Link>
  );
}
