import { spinnerSolid, taskAlt } from "../assets";
import { work } from "../constants";
import { GradientLight } from "./designs/Work";
import Section from "./Section";

const Work = () => {
  return (
    <Section className="bg-n-3" id="work">
      <div className="container py-7 lg:py-16 xl:py-20 z-1">
        <h2 className="h2">./Work</h2>
        <div className="flex flex-row justify-center h-full mt-8 mb-10">
            <div className="flex flex-wrap flex-col lg:flex-row justify-around">
          {work.map((item) => {
                    
                      return (
                        
                       
                       
                       <div
                       className="block relative p-1 m-4 bg-no-repeat bg-[length:100%_100%] border border-solid border-n-4 rounded-[2.5rem] transition delay-150 hover:bg-color-4 hover:translate-y-1 overflow-hidden"
                       key={item.id}
                     >
                       {<GradientLight />}
                       <div className="h-[22rem] md:min-w-[36rem] p-[2.4rem] pointer-events: auto">
                         <div className="flex flex-col h-full">
                           <div><h5 className="h5 mb-5">{item.title}</h5></div>
                           <div><p className="inline-block body-2 mb-6 text-n-2">
                             {item.tasks}
                           </p></div>
                           <div><p className="inline-block body-2 mb-6 text-n-2">
                             {item.details}
                           </p></div>
                         </div>

             </div>
           </div>
              
            );
          })}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
