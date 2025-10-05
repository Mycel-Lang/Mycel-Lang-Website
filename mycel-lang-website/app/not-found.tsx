import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-substrate text-humus min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl md:text-9xl font-bold font-heading text-mycelium mb-4">404</h1>
      <h2 className="text-xl md:text-3xl font-semibold text-loam mb-8">Page Not Found</h2>
      <p className="text-lg text-loam mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" passHref>
        <button className="btn btn--primary">Go to Homepage</button>
      </Link>
    </div>
  );
}
