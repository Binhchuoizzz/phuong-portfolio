"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
     return (
          <section className="h-[800px] relative bg-accent/10 xl:bg-white">
               {/* header */}
               <div>header</div>
               <div className="container mx-auto h-full">
                    <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col
                    items-center xl:items-start justify-center text-center xl:text-left pt-10">
                         <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
                              <span className="text-accent">I Have Experience </span>And Work In
                         <TypeAnimation 
                         preRenderFirstString={true}
                         sequence={["Logistics", 2000, "Economists",2000]}
                         speed={50}
                         repeat={Infinity}
                         wrapper="span"
                         cursor={false}
                         className="ml-2 xl:ml-4"
                         />
                         </h1>
                         <p className="lead">As an innovation and efficiency oriented person, I have developed strategies to improve the flow of goods and optimize processes from input to output, contributing positively to business growth and building sustainable relationships with domestic and foreign partners.</p>
                    <ScrollLink to="contact" smooth>
                         <button className="btn btn-accent mb-8">Contact me</button>
                    </ScrollLink>
                    </div>
               </div>
          </section>
     );
};

export default Hero