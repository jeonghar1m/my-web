import { SiInstagram, SiGithub, SiLinkedin, SiVelog } from "react-icons/si";
import { Mail } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: SiInstagram,
    href: "https://instagram.com/jeonghar1m",
    label: "Instagram",
  },
  { icon: SiGithub, href: "https://github.com/jeonghar1m", label: "GitHub" },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/jeongharim/",
    label: "LinkedIn",
  },
  { icon: SiVelog, href: "https://velog.io/@jeonghar1m/posts", label: "Velog" },
  { icon: Mail, href: "mailto:me@jeongharim.dev", label: "Email" },
];

export default function SocialLinks() {
  return (
    <ul className="ml-auto flex gap-3" aria-label="소셜 링크">
      {SOCIAL_LINKS.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-neutral-500 transition-colors hover:text-neutral-300"
          >
            <link.icon size={20} aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
