import Link from 'next/link';
export default function Footer() {
  return (
    <div>
      <Link href="/">Home</Link> - <Link href="/posts/a">Static Built A</Link> - <Link href="/posts/b">Not Static B</Link> -{' '}
      <Link href="/a/b/c/d">Catch All</Link>
    </div>
  );
}
