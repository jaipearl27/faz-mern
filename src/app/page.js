import AboutUs from '@/components/home/AboutUs';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
      </nav>
      <Hero id="home"/>
      <AboutUs id="about"/>
      <Services />
      <Project />
    </>
  );
}
