import AboutUs from '@/components/home/AboutUs';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Products from '@/components/home/Products';
import Clients from '@/components/home/Clients';


const services = [
  {
    title: "Aluminium Tents",
    banner: "/services/aluminiumTents.png",
    description: "Supply and lease of Aluminum Tents with Lights, Air Conditioners, Bunk Beds, Floor, Doors, Fire Extinguishers and Charging points.",
    // onClick: console.log('aluminiumTents')
  },
  {
    title: "Box Trucks / Buses Transportation",
    banner: "/services/boxTrucks.png",
    description: "We offer trucks for transporting passenger’s luggage and buses for moving passengers between different points.",
    // onClick: console.log('2')
  },
  {
    title: "Construction Vehicles",
    banner: "/services/constructionVehicles.png",
    description: "Short / Long term lease of Construction Vehicles (Boom Loaders Compactors, Forklift, Scissor lifts, Manlifts etc.)",
    // onClick: console.log('2')
  },
]

export default function Home() {
  return (
    <>
      <Hero id="home" />
      <AboutUs id="about" />
      <Services data={services} />
      <Products />
      <Clients />
    </>
  );
}
