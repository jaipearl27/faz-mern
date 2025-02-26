import AboutUs from '@/components/home/AboutUs';
import Project from '@/components/home/project';
import Services from '@/components/home/Services';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
      </nav>
     
      <AboutUs id="about"/>
      <Services />
      <Project />
    </>
  );
}
