import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { about } from "@/constants/index"
import Section from "./Section"

const About = () => { 
    return (
    <Section id="about" className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 max-w-5xl w-full">
          {/* Section Title - Left Side */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 lg:sticky lg:top-24">
            <h2 className="text-5xl lg:text-7xl">./About Me</h2>
          </div>
          
          {/* Card - Right Side */}
          <div className="lg:w-2/3">
            <Card className="w-full">
              <CardContent className="pt-6">
                {about.map((item) => (
                  <div key={item.id} className="flex flex-col gap-4">
                    <p className="text-base leading-relaxed">{item.text}</p>
                    <p className="text-base leading-relaxed">{item.text2}</p>
                    <p className="text-base leading-relaxed">{item.text3}</p>
                    <p className="text-base leading-relaxed">{item.text4}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
    );
};

export default About;