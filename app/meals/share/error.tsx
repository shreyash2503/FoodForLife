"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main className="flex flex-col items-center justify-center">
      <p>{error.message}</p>
    </main>
  );
}
