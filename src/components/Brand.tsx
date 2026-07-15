import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Arkha Developer, halaman utama">
      <Image src="/logo-mark.svg" alt="" width={38} height={38} priority />
      <span>Arkha Developer</span>
    </Link>
  );
}
