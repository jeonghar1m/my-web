import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si";
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
  { icon: Mail, href: "mailto:me@jeongharim.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-sm italic">
          &copy; {new Date().getFullYear()} Jeong Harim
        </p>

        <div className="mt-4 flex items-center justify-between">
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
        </div>
      </div>
    </footer>
  );
}
