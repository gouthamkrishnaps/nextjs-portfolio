import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Navbar from "@home/components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Expertise from "./components/expertise/Expertise";
import { AsernityTabs } from "../components/UI/asernity-tabs/Tabs";
export const imageTabs = [
  {
    title: "Mountains",
    value: "mountains",
    content: (
      <img
        src="https://source.unsplash.com/800x600/?mountains"
        alt="Mountains"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    ),
  },
  {
    title: "Ocean",
    value: "ocean",
    content: (
      <img
        src="https://source.unsplash.com/800x600/?ocean"
        alt="Ocean"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    ),
  },
  {
    title: "Forest",
    value: "forest",
    content: (
      <img
        src="https://source.unsplash.com/800x600/?forest"
        alt="Forest"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    ),
  },
  {
    title: "Desert",
    value: "desert",
    content: (
      <img
        src="https://source.unsplash.com/800x600/?desert"
        alt="Desert"
        className="w-full h-auto object-cover rounded-md shadow-md"
      />
    ),
  },
];



export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About/>
      <Skills/>
      <Expertise/>
      {/* <AsernityTabs tabs={imageTabs}tabClassName={'text-black bg-red-500'} /> */}
    </>
  );
}
