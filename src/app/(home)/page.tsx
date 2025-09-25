import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Learn Audio Production</h1>
      <p className="text-fd-muted-foreground max-w-md mx-auto pb-4">
        All the audio knowledge you need to empower yourself. Now available in one place.
      </p>
      <Link
        href="/docs" className="text-2xl underline text-red-600 dark:text-red-500">
        Explore
      </Link>
    </main>
  );
}
