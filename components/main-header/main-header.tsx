import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex justify-between items-center px-2 py-1 md:px-2 md:py-0.1">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 uppercase tracking-wider text-2xl"
        >
          <Image
            src={logoImg}
            alt="A plate with delicious food on it"
            width={100}
            height={100}
            priority
          />
          Food For Life
        </Link>
        <nav className="m-0 p-0 flex gap-1.5">
          <ul className="flex gap-7 font text-xl">
            <li className=" text-lg hover:text-slate-400">
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li className="text-lg hover:text-slate-400">
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
