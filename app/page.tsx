// Home.tsx

import Navbar from "@/components/NavBar";
import Image from "next/image";
import RootLayout from "./layout";
import LogoPhrase from "@/components/LogoPhrase";
import '../components/scroll.style.css'
import SlideZoomPictures from "@/components/SlideZoomPictures";
import ParallaxText from "@/components/MovingText";

export default function Home() {
  const darkMode = true; // Set this dynamically based on your logic


  return (
    <RootLayout darkMode={darkMode}>
   <main className=" ">

  <div className="  flex items-center justify-end">
  <Navbar />
  </div>

<section className= "  h-[100vh]  mt-60 relative">

  <LogoPhrase/>
  <div className='   icon-scroll'></div>
</section>

<section className=" ">
 <ParallaxText  baseVelocity={-5}>Quality over quantity   &nbsp; </ParallaxText>
</section>
<section className=" my-10">
  <SlideZoomPictures/>
</section>
   </main>
    </RootLayout>
  );
}
