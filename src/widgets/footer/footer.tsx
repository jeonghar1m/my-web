import Copyright from "./copyright";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <Copyright />
        <div className="mt-4 flex items-center justify-between">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
