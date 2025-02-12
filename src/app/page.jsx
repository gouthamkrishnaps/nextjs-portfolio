import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Navbar from "@home/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About/>
    </>
  );
}
