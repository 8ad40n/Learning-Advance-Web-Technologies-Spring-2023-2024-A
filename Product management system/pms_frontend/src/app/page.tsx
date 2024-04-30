import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/login">Login</Link>
      <br />
      <Link href="/register">Register</Link>
    </>
  );
}
