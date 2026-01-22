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
    text: "/in/aaron-loh26",
    href: "https://www.linkedin.com/in/aaron-loh26/",
    icon: IconBrandLinkedin,
  },
  email: {
    text: "aaronloh04@gmail.com",
    href: "mailto:aaronloh04@gmail.com",
    icon: IconMail,
  },
  github: {
    text: "/aaronloh16",
    href: "https://github.com/aaronloh16",
    icon: IconBrandGithub,
  },
  x: {
    text: "@AaronLoh_",
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
      className="group/link flex w-fit items-center gap-[4px] rounded-full border border-grey px-[10px] py-[4px] transition hover:border-darkTeal hover:bg-lightTeal/20"
    >
      <SocialIcon
        size={19}
        stroke={1.25}
        className="text-grey transition group-hover/link:-translate-y-0.5 group-hover/link:text-darkTeal group-focus-visible/link:-translate-y-0.5"
      />
      <p className="text-xs text-grey group-hover/link:text-darkTeal md:text-sm">
        {linkNameToInfo[link].text}
      </p>
    </Link>
  );
}
