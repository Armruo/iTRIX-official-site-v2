import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import logoWhite from "@/public/images/logo-itrix-white-2.svg";
import logoBlack from "@/public/images/logo-itrix-black-2.svg";

export default function Logo() {
  const { theme } = useTheme();
  
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="ITRIX">
      <Image 
        src={theme === 'dark' ? logoWhite : logoBlack} 
        alt="ITRIX Logo" 
        width={108}
        height={36}
        className="w-auto h-7"
      />
    </Link>
  );
}
