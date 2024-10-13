import Link from "next/link"


export default function TopNavigation() {
  return (
    <nav className="block bg-secondary p-5">
      <div className="font-sans text-3xl font-bold italic text-center text-text">
        <Link href="/">Legendary Turtle Cafe</Link>
      </div>
    </nav>
  );
}
