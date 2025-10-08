import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="font-bold text-6xl md:text-8xl pb-4">LAP</h1>
      <h1 className="mb-4 text-2xl">Learn Audio Production</h1>
      <p className="text-fd-muted-foreground max-w-xl mx-auto pb-4">
        All the audio knowledge you need to empower yourself is now available in one place as a frequently updated knowledge base.
      </p>
      <Link
        href="/docs" className="text-2xl underline text-red-600 dark:text-red-500 font-bold">
        EXPLORE
      </Link>
    </main>
  );
}
