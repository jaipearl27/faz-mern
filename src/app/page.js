import Link from 'next/link';
import AboutUs from '@/components/home/AboutUs';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Products from '@/components/home/Products';
import Clients from '@/components/home/Clients';


export default function Home() {
  return (
    <>

      <Hero id="home" />
      <AboutUs id="about" />
      <Services />
      <Products />
      <Clients />
    </>
  );
}
