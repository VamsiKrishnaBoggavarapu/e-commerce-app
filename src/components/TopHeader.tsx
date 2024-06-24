import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="flex gap-4">
      <div>Home</div>
      <div>Serach</div>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/cart"}>Cart</Link>
    </div>
  );
}
