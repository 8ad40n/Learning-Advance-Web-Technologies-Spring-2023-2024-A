import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <br />
      <Link href="/register">
        <a>Register</a>
      </Link>
    </>
  );
}
