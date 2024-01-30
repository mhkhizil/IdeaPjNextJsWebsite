// Home.tsx

import Navbar from "@/components/NavBar";
import Image from "next/image";
import RootLayout from "./layout";
import LogoPhrase from "@/components/LogoPhrase";

import ParallaxText from "@/components/MovingText";

export default function Home() {
  const darkMode = true; // Set this dynamically based on your logic


  return (
    <RootLayout darkMode={darkMode}>
   <div className=" ">

  <div className="  flex items-center justify-end">
  <Navbar />
  </div>

<main className= "  h-[100vh]  mt-60 relative">

  <LogoPhrase/>
</main>
<main className=" ">
 <ParallaxText  baseVelocity={-5}>Quality over quantity   &nbsp; </ParallaxText>
</main>
   </div>
    </RootLayout>
  );
}
