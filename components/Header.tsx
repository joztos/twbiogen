import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <div className="flex space-x-3">
        <Image
          alt="Custom Logo"
          src="https://im.ge/i/IBXuyY"
          className="sm:w-12 sm:h-12 w-8 h-8 object-contain"
          width={48}
          height={48}
        />
      </div>
      <Image
        alt="Vercel Icon"
        src="/vercelLogo.png"
        className="sm:w-8 sm:h-[27px] w-8 h-[28px]"
        width={32}
        height={28}
      />
    </header>
  );
}
