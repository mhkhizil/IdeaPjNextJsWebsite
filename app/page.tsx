// Home.tsx

import Navbar from "@/components/NavBar";
import Image from "next/image";
import RootLayout from "./layout";
import LogoPhrase from "@/components/LogoPhrase";

export default function Home() {
  const darkMode = true; // Set this dynamically based on your logic


  return (
    <RootLayout darkMode={darkMode}>
      <Navbar />

      <main className=" mt-60 relative">
     
        <LogoPhrase/>
      </main>
    </RootLayout>
  );
}
