import Link from 'next/link';

import PageTitle from '@/app/page_title'

export default function Home() {
  return (
    <div>
      <PageTitle text="Welcome to the Legendary Turtle Cafe!"/>
      <p className="prompt-text">
        Get started with some
        <Link href="/appetizers" className="link">appetizers!</Link>
      </p>
      <p className="prompt-text">
        Alternatively, jump right into our
        <Link href="/entrees" className="link">entrees!</Link>
      </p>
    </div>
  );
}
