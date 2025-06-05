// app/page.tsx
import Link from 'next/link';
import Header from '@/components/Header';
import Posts from '@/components/Posts';
import HeroSection from '@/components/HeroSection';

export default async function HomePage() {
  return (
    <>
      <Header>
      </Header>
      <HeroSection />
      <main>
        <Posts />
      </main>
    </>
  );
}
