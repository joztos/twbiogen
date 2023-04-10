import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="EMDI Logo"
          src="https://emdischool.edu.ec/port/images/logo%20emdi%20azul.png?crc=397001260"
          className="sm:w-12 sm:h-12 w-8 h-8 object-contain"
          width={48}
          height={48}
        />
      </Link>
      <a
        href="https://samasat.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Vercel Icon"
          src="/vercelLogo.png"
          className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
          width={32}
          height={28}
        />
      </a>
    </header>
  );
}
