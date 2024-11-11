import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Project from "./components/Project";
import { Technology } from "./components/Technology";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technology />
        <Project />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
