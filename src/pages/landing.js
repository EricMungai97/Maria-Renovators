import Choose from "@/components/choose";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/project";
import Vision from "@/components/vision";
import Contact from "./contact";

export default function Landing() {
  return (
    <div className="">
      <section className="text-center m-auto pt-60 pb-40 max-w-screen-lg">
        <p className="text-white text-7md font-bold"> IT `S YOUR DREAM</p>
        <p className="text-yellow-400 text-md font-bold">We Are Building</p>
        <p className="text-yellow-400 text-md font-bold">We Are Constructing</p>
        <p className="text-yellow-400 text-md font-bold">We Are Planning</p>
      </section>
      <section className="bg-yellow-400 text-lg font-semibold flex justify-between p-4 sm:max-md:flex flex-wrap">
        <p>Looking for best partner for your next Renovations?</p>
        <button className="border-solid border-2 border-black p-2 ">
          Hire us Now
        </button>
      </section>
      <section className="bg-white lg:grid grid-cols-3 justify-items-stretch whitespace-normal pr-8 py-20 sm:max-sm:grid-rows-3 pl-8 ">
        <div className="font-bold text-4xl whitespace-nowrap pr-5 sm:max-sm:row-span-1">
          Who We Are<span className="h-2 bg-yellow-400 w-50 mt-30 block"></span>
        </div>

        <div className="pr-4 sm:max-sm:row-span-2">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae.
        </div>

        <div className="air sm:max-sm:row-span-1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae.
        </div>
      </section>

      <Services/>
      <Choose />
      <Vision />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
