import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Navbar from "@home/components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Expertise from "./components/expertise/Expertise";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About/>
      <Skills/>
      <Expertise/>
    </>
  );
}
