import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Legendary Turtle Cafe!</h1>
      <p>Get started with some <Link href="/appetizers">appetizers!</Link></p>
      <p>Alternatively, jump right into our <Link href="/entrees">entrees!</Link></p>
    </div>
  );
}
