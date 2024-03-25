import Hero from "@/views/Hero";
import Map from "@/views/Map";
import Consultation from "@/views/Consultation";
import Testimoni from "@/views/Testimoni";
import Overview from "@/views/Overview";
import Stats from "@/views/Stats";
import Practice from "@/views/Practice";
import Attorneys from "@/views/Attorneys";


export default function Home() {
  return (
    <div>
      <Hero />
      <Practice />
      <Stats />
      <Attorneys />
      <Overview />
      <Testimoni />
      <Consultation />
      <Map />
    </div>
  );
}
