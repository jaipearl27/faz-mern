import AboutUs from "@/components/home/AboutUs";
import Hero from "@/components/home/Hero";
import Project from "@/components/home/project";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Hero id="home"/>
      <AboutUs id="about"/>
      <Services />
      <Project />
    </>
  );
}
