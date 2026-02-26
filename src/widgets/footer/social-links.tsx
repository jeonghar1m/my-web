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
  { icon: Mail, href: "mailto:me@jeongharim.com", label: "Email" },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-3 ml-auto">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );
}
