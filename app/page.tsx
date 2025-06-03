// app/page.tsx
import Link from 'next/link';
import Header from '@/components/Header';
import Posts from '@/components/Posts';

export default async function HomePage() {
  return (
    <>
      <Header>
      </Header>
      <main className="max-w-3xl mx-auto p-6">
        <Posts/>
      </main>
    </>
  );
}
