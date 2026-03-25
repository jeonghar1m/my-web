import Link from "next/link";
import Nav from "./nav";

export default async function Header() {
  return (
    <header className="bg-neutral-700 text-white px-8 pt-8 pb-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <h1 className="text-3xl font-bold">정하림</h1>
        </Link>
        <p className="text-neutral-400 text-sm mt-1">
          Designed by Harim in Seoul
        </p>
        <Nav />
      </div>
    </header>
  );
}
