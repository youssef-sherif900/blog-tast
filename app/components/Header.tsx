import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Blog
        </Link>
      </nav>
    </header>
  );
}

