import Link from "next/link";
import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: sessionData } = useSession();

  if (sessionData) {
    return (
      <nav className="absolute left-0 top-0 z-10 flex w-full flex-col items-center justify-between gap-8 bg-slate-950 bg-transparent p-7 backdrop-blur-md md:fixed md:flex-row md:gap-0">
        <div className="font-poppins flex w-full items-center justify-between text-xl font-bold lowercase tracking-tight text-neutral-100 md:text-4xl">
          <Link href="/">jrnl</Link>
          <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon width={30} /> : <Bars2Icon width={30} />}
          </div>
        </div>
        <ul
          className={`font-montserrat flex flex-col gap-8 text-neutral-100 md:flex-row md:items-center md:justify-end md:gap-20 ${
            !isOpen && "hidden md:flex"
          }`}
        >
          <Link href="/">Entries</Link>
          <Link href="/">Write</Link>
          <button className="w-min" onClick={() => void signOut()}>
            Logout
          </button>
        </ul>
      </nav>
    );
  }
};

export default Navigation;
