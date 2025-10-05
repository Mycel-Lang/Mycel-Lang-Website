import Link from 'next/link';
import { Construction } from 'lucide-react';

export default function UnderConstruction() {
  return (
    <div className="bg-substrate text-humus min-h-screen flex flex-col items-center justify-center text-center p-4">
      <Construction className="size-24 md:size-32 text-mycelium mb-4 animate-pulse" />
      <h1 className="text-4xl md:text-6xl font-bold font-heading text-mycelium mb-4">Page Under Construction</h1>
      <p className="text-lg text-loam max-w-xl mx-auto mb-8">
        We&aposre diligently working on building this section. Please check back soon for updates!
      </p>
      <Link href="/" passHref>
        <button className="btn btn--primary">Go to Homepage</button>
      </Link>
    </div>
  );
}
